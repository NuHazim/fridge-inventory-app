import { UserItem } from '../models/UserItem.model';
import { getItemById } from './itemMaster.service';

interface AIRecipeSuggestion {
  name: string;
  description: string;
  time: number;
  servings: number;
  difficulty: 'easy' | 'medium' | 'hard';
  ingredients: {
    name: string;
    quantity: string;
    available: boolean;
  }[];
  instructions: string[];
  matchPercentage: number;
}

// Get AI recipe suggestions based on available ingredients
export const getAIRecipeSuggestions = async (
  userItems: UserItem[]
): Promise<AIRecipeSuggestion[]> => {
  try {
    // Get item names from item_master
    const itemNames = await Promise.all(
      userItems.map(async (userItem) => {
        const item = await getItemById(userItem.item_id);
        return item?.item_name || 'Unknown';
      })
    );

    // Filter out expired items
    const availableItems = userItems
      .filter(item => item.user_items_status !== 'expired')
      .map((item, index) => ({
        name: itemNames[index],
        quantity: item.user_items_quantity,
        unit: item.user_items_unit,
      }));

    if (availableItems.length === 0) {
      return [];
    }

    return getFallbackRecipes(
        userItems.map((item, index) => ({
          name: 'Ingredient',
          quantity: item.user_items_quantity,
          unit: item.user_items_unit,
        }))
      );
  } catch (error) {
    console.error('Error getting AI suggestions:', error);
    return getFallbackRecipes(
      userItems.map((item, index) => ({
        name: 'Ingredient',
        quantity: item.user_items_quantity,
        unit: item.user_items_unit,
      }))
    );
  }
};

// Fallback recipes if AI fails
const getFallbackRecipes = (availableItems: any[]): AIRecipeSuggestion[] => {
  return [
    {
      name: 'Quick Stir Fry',
      description: 'A simple and healthy stir fry using whatever vegetables you have on hand.',
      time: 15,
      servings: 2,
      difficulty: 'easy',
      ingredients: [
        { name: 'Mixed vegetables', quantity: '2 cups', available: true },
        { name: 'Soy sauce', quantity: '2 tbsp', available: false },
        { name: 'Garlic', quantity: '2 cloves', available: false },
        { name: 'Oil', quantity: '1 tbsp', available: false },
      ],
      instructions: [
        'Heat oil in a wok or large pan',
        'Add minced garlic and cook until fragrant',
        'Add vegetables and stir fry for 5-7 minutes',
        'Add soy sauce and toss to combine',
        'Serve hot with rice',
      ],
      matchPercentage: 25,
    },
    {
      name: 'Simple Omelet',
      description: 'A classic breakfast dish that\'s quick and satisfying.',
      time: 10,
      servings: 1,
      difficulty: 'easy',
      ingredients: [
        { name: 'Eggs', quantity: '3', available: true },
        { name: 'Butter', quantity: '1 tbsp', available: false },
        { name: 'Salt', quantity: 'to taste', available: false },
        { name: 'Pepper', quantity: 'to taste', available: false },
      ],
      instructions: [
        'Beat eggs in a bowl with salt and pepper',
        'Heat butter in a pan over medium heat',
        'Pour in eggs and let set slightly',
        'Fold omelet in half and cook until done',
        'Serve immediately',
      ],
      matchPercentage: 25,
    },
  ];
};