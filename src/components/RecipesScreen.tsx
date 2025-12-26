import { useState, useMemo, useEffect } from 'react';
import { ChefHat, Clock, Users, Sparkles, Heart } from 'lucide-react';
import { FridgeItem } from '../App';

interface RecipesScreenProps {
  fridgeItems: FridgeItem[];
  onUpdateFridgeItems: (items: FridgeItem[]) => void;
}

interface Recipe {
  id: string;
  name: string;
  image: string;
  time: number;
  servings: number;
  ingredients: string[];
  instructions: string[];
  matchPercentage: number;
}

export function RecipesScreen({ fridgeItems, onUpdateFridgeItems }: RecipesScreenProps) {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favoriteRecipes');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (recipeId: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent opening recipe detail
    setFavorites(prev =>
      prev.includes(recipeId)
        ? prev.filter(id => id !== recipeId)
        : [...prev, recipeId]
    );
  };

  const handleCookRecipe = (recipe: Recipe) => {
    // Deduct ingredients from fridge
    const updatedFridgeItems = fridgeItems.map(item => {
      const itemNameLower = item.name.toLowerCase();
      const usedIngredient = recipe.ingredients.find(ingredient =>
        itemNameLower.includes(ingredient) || ingredient.includes(itemNameLower)
      );

      if (usedIngredient) {
        // Reduce quantity or remove if quantity becomes 0 or negative
        const newQuantity = item.quantity - 1;
        if (newQuantity <= 0) {
          return null; // Mark for removal
        }
        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter((item): item is FridgeItem => item !== null);

    onUpdateFridgeItems(updatedFridgeItems);
    setShowConfirmation(true);
    
    // Auto-close confirmation after 2 seconds
    setTimeout(() => {
      setShowConfirmation(false);
      setSelectedRecipe(null);
    }, 2000);
  };

  const recipes: Recipe[] = useMemo(() => {
    const fridgeIngredients = fridgeItems.map(item => item.name.toLowerCase());

    const allRecipes = [
      {
        id: '1',
        name: 'Classic Omelet',
        image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400',
        time: 10,
        servings: 2,
        ingredients: ['eggs', 'milk', 'cheese', 'butter'],
        instructions: [
          'Beat eggs with milk in a bowl',
          'Heat butter in a pan over medium heat',
          'Pour egg mixture into the pan',
          'Add cheese when eggs are halfway cooked',
          'Fold and serve hot'
        ],
      },
      {
        id: '2',
        name: 'Chicken Salad',
        image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400',
        time: 20,
        servings: 4,
        ingredients: ['chicken breast', 'lettuce', 'tomatoes', 'cheese', 'olive oil'],
        instructions: [
          'Grill chicken breast until fully cooked',
          'Chop lettuce and tomatoes',
          'Slice the cooked chicken',
          'Mix all ingredients in a bowl',
          'Drizzle with olive oil and season to taste'
        ],
      },
      {
        id: '3',
        name: 'Tomato Soup',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400',
        time: 30,
        servings: 4,
        ingredients: ['tomatoes', 'onion', 'garlic', 'chicken breast', 'milk'],
        instructions: [
          'Chop tomatoes and onion',
          'Sauté onion and garlic until fragrant',
          'Add tomatoes and cook until soft',
          'Blend until smooth',
          'Add milk and simmer for 10 minutes'
        ],
      },
      {
        id: '4',
        name: 'Cheese Sandwich',
        image: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?w=400',
        time: 10,
        servings: 2,
        ingredients: ['bread', 'cheese', 'butter'],
        instructions: [
          'Butter one side of each bread slice',
          'Place cheese between bread slices',
          'Grill in a pan until golden brown on both sides',
          'Cut diagonally and serve hot'
        ],
      },
      {
        id: '5',
        name: 'Caprese Salad',
        image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=400',
        time: 5,
        servings: 2,
        ingredients: ['tomatoes', 'cheese', 'olive oil', 'basil'],
        instructions: [
          'Slice tomatoes and cheese',
          'Arrange alternating slices on a plate',
          'Drizzle with olive oil',
          'Add fresh basil leaves',
          'Season with salt and pepper'
        ],
      },
    ];

    return allRecipes.map(recipe => {
      const matchingIngredients = recipe.ingredients.filter(ingredient =>
        fridgeIngredients.some(fridgeIng => 
          fridgeIng.includes(ingredient) || ingredient.includes(fridgeIng)
        )
      );
      const matchPercentage = Math.round((matchingIngredients.length / recipe.ingredients.length) * 100);

      return {
        ...recipe,
        matchPercentage,
      };
    }).sort((a, b) => b.matchPercentage - a.matchPercentage);
  }, [fridgeItems]);

  const favoriteRecipes = recipes.filter(recipe => favorites.includes(recipe.id));
  const otherRecipes = recipes.filter(recipe => !favorites.includes(recipe.id));

  const RecipeCard = ({ recipe }: { recipe: Recipe }) => (
    <div
      onClick={() => setSelectedRecipe(recipe)}
      className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer relative"
    >
      <div className="flex gap-4">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-32 h-32 object-cover flex-shrink-0"
        />
        <div className="flex-1 p-4 pr-12">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-gray-900 dark:text-white">{recipe.name}</h3>
            <span
              className={`px-2 py-1 rounded text-xs whitespace-nowrap ${
                recipe.matchPercentage >= 80
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                  : recipe.matchPercentage >= 50
                  ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              {recipe.matchPercentage}% match
            </span>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{recipe.time} min</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{recipe.servings} servings</span>
            </div>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            {recipe.ingredients.length} ingredients
          </p>
        </div>
      </div>
      
      {/* Favorite Button */}
      <button
        onClick={(e) => toggleFavorite(recipe.id, e)}
        className="absolute top-3 right-3 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all"
      >
        <Heart
          className={`w-5 h-5 ${
            favorites.includes(recipe.id)
              ? 'fill-red-500 text-red-500'
              : 'text-gray-400 dark:text-gray-500'
          }`}
        />
      </button>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="mb-6">
        <h1 className="text-gray-900 dark:text-white mb-2">Recipes for You</h1>
      </div>

      {/* Favourites Section */}
      {favoriteRecipes.length > 0 && (
        <div className="mb-8">
          <h2 className="text-gray-900 dark:text-white mb-4">Favourites</h2>
          <div className="space-y-4">
            {favoriteRecipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      )}

      {/* AI Suggestions Section */}
      <div className="mb-4">
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
          <Sparkles className="w-5 h-5" />
          <p>AI-powered recipe suggestions based on your fridge</p>
        </div>
      </div>

      {/* Other Recipes Grid */}
      <div className="space-y-4">
        {otherRecipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

      {/* Recipe Detail Modal */}
      {selectedRecipe && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 w-full sm:max-w-2xl rounded-t-2xl sm:rounded-lg max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedRecipe.image}
                alt={selectedRecipe.name}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedRecipe(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg"
              >
                ×
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-gray-900 dark:text-white">{selectedRecipe.name}</h2>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedRecipe.matchPercentage >= 80
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                      : selectedRecipe.matchPercentage >= 50
                      ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {selectedRecipe.matchPercentage}% match
                </span>
              </div>

              <div className="flex items-center gap-6 mb-6 text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{selectedRecipe.time} minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>{selectedRecipe.servings} servings</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-gray-900 dark:text-white mb-3">Ingredients</h3>
                <ul className="space-y-2">
                  {selectedRecipe.ingredients.map((ingredient, index) => {
                    const hasIngredient = fridgeItems.some(item =>
                      item.name.toLowerCase().includes(ingredient) ||
                      ingredient.includes(item.name.toLowerCase())
                    );
                    return (
                      <li
                        key={index}
                        className={`flex items-center gap-2 ${
                          hasIngredient
                            ? 'text-green-700 dark:text-green-300'
                            : 'text-gray-600 dark:text-gray-400'
                        }`}
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${
                            hasIngredient ? 'bg-green-600' : 'bg-gray-400'
                          }`}
                        ></div>
                        <span className="capitalize">{ingredient}</span>
                        {hasIngredient && (
                          <span className="text-xs text-green-600 dark:text-green-400">
                            (in fridge)
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div>
                <h3 className="text-gray-900 dark:text-white mb-3">Instructions</h3>
                <ol className="space-y-3">
                  {selectedRecipe.instructions.map((instruction, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-gray-600 dark:text-gray-400"
                    >
                      <span className="flex-shrink-0 w-6 h-6 bg-[#007057] text-white rounded-full flex items-center justify-center text-sm">
                        {index + 1}
                      </span>
                      <span>{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <button
                onClick={() => setSelectedRecipe(null)}
                className="w-full mt-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg transition-colors"
              >
                Close
              </button>

              <button
                onClick={() => handleCookRecipe(selectedRecipe)}
                disabled={showConfirmation}
                className="w-full mt-3 py-3 bg-[#007057] hover:bg-[#005a45] disabled:bg-gray-400 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <ChefHat className="w-5 h-5" />
                {showConfirmation ? 'Ingredients Deducted!' : 'Cook This Recipe'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

















// import { useState, useEffect } from 'react';
// import { ChefHat, Clock, Users, Sparkles, Heart, Loader2, RefreshCw } from 'lucide-react';
// import { useAuth } from './AuthProvider';
// import { getUserItems, deleteUserItem, updateUserItem } from '../services/userItems.service';
// import { getItemById } from '../services/itemMaster.service';
// import { getAIRecipeSuggestions } from '../services/recipe.ai.service';
// import { UserItem } from '../models/UserItem.model';
// import {
//   getUserRecipes,
//   createRecipe,
//   deleteRecipe,
// } from '../services/recipe.service';
// import { Recipe } from '../models/Recipe.model';

// interface AIRecipe {
//   name: string;
//   description: string;
//   time: number;
//   servings: number;
//   difficulty: 'easy' | 'medium' | 'hard';
//   ingredients: {
//     name: string;
//     quantity: string;
//     available: boolean;
//   }[];
//   instructions: string[];
//   matchPercentage: number;
// }

// export function RecipesScreen() {
//   const { user } = useAuth();
//   const [loading, setLoading] = useState(true);
//   const [aiLoading, setAiLoading] = useState(false);
//   const [userItems, setUserItems] = useState<UserItem[]>([]);
//   const [aiRecipes, setAiRecipes] = useState<AIRecipe[]>([]);
//   const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([]);
//   const [selectedRecipe, setSelectedRecipe] = useState<AIRecipe | null>(null);
//   const [favorites, setFavorites] = useState<string[]>([]);

//   useEffect(() => {
//     if (user) {
//       loadData();
//     }
//   }, [user]);

//   const loadData = async () => {
//     try {
//       setLoading(true);
      
//       // Load user items and saved recipes
//       const [items, recipes] = await Promise.all([
//         getUserItems(user!.uid),
//         getUserRecipes(user!.uid),
//       ]);
//       console.log('User items:', JSON.stringify(items, null, 2));
//       setUserItems(items);
//       setSavedRecipes(recipes);
      
//       // Load favorites from localStorage
//       const savedFavorites = localStorage.getItem('favoriteRecipes');
//       if (savedFavorites) {
//         setFavorites(JSON.parse(savedFavorites));
//       }
//     } catch (error) {
//       console.error('Error loading data:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getAIRecommendations = async () => {
//     try {
//       setAiLoading(true);
//       const suggestions = await getAIRecipeSuggestions(userItems);
//       setAiRecipes(suggestions);
//     } catch (error) {
//       console.error('Error getting AI recommendations:', error);
//       alert('Failed to get AI recommendations. Please try again.');
//     } finally {
//       setAiLoading(false);
//     }
//   };

//   const toggleFavorite = (recipeName: string, e: React.MouseEvent) => {
//     e.stopPropagation();
//     const newFavorites = favorites.includes(recipeName)
//       ? favorites.filter(id => id !== recipeName)
//       : [...favorites, recipeName];
    
//     setFavorites(newFavorites);
//     localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
//   };

//   const handleCookRecipe = async (recipe: AIRecipe) => {
//     if (!user) return;

//     try {
//       setLoading(true);

//       // Deduct ingredients from fridge
//       for (const ingredient of recipe.ingredients) {
//         if (ingredient.available) {
//           // Find matching user item
//           const matchingItem = userItems.find(async (item) => {
//             const itemMaster = await getItemById(item.item_id);
//             return itemMaster?.item_name.toLowerCase().includes(ingredient.name.toLowerCase());
//           });

//           if (matchingItem) {
//             // Reduce quantity by 1
//             const newQuantity = matchingItem.user_items_quantity - 1;
//             if (newQuantity <= 0) {
//               await deleteUserItem(matchingItem.user_items_id);
//             } else {
//               await updateUserItem(matchingItem.user_items_id, {
//                 user_items_quantity: newQuantity,
//               });
//             }
//           }
//         }
//       }

//       // Optionally save recipe to user's collection
//       await createRecipe(user.uid, {
//         recipe_name: recipe.name,
//         recipe_instruction: recipe.instructions.join('\n'),
//       });

//       alert('✅ Recipe cooked! Ingredients deducted from your fridge.');
//       await loadData();
//       setSelectedRecipe(null);
//     } catch (error) {
//       console.error('Error cooking recipe:', error);
//       alert('Failed to cook recipe. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const RecipeCard = ({ recipe }: { recipe: AIRecipe }) => (
//     <div
//       onClick={() => setSelectedRecipe(recipe)}
//       className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer relative p-4"
//     >
//       <div className="flex items-start justify-between mb-3">
//         <div className="flex-1">
//           <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
//             {recipe.name}
//           </h3>
//           <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
//             {recipe.description}
//           </p>
//         </div>
//         <button
//           onClick={(e) => toggleFavorite(recipe.name, e)}
//           className="ml-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
//         >
//           <Heart
//             className={`w-5 h-5 ${
//               favorites.includes(recipe.name)
//                 ? 'fill-red-500 text-red-500'
//                 : 'text-gray-400'
//             }`}
//           />
//         </button>
//       </div>

//       <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
//         <div className="flex items-center gap-1">
//           <Clock className="w-4 h-4" />
//           <span>{recipe.time} min</span>
//         </div>
//         <div className="flex items-center gap-1">
//           <Users className="w-4 h-4" />
//           <span>{recipe.servings} servings</span>
//         </div>
//         <span className="capitalize px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-xs">
//           {recipe.difficulty}
//         </span>
//       </div>

//       <div className="flex items-center justify-between">
//         <span className="text-sm text-gray-500 dark:text-gray-400">
//           {recipe.ingredients.length} ingredients
//         </span>
//         <span
//           className={`px-3 py-1 rounded-full text-xs font-medium ${
//             recipe.matchPercentage >= 80
//               ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
//               : recipe.matchPercentage >= 50
//               ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
//               : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
//           }`}
//         >
//           {recipe.matchPercentage}% match
//         </span>
//       </div>
//     </div>
//   );

//   if (loading) {
//     return (
//       <div className="max-w-2xl mx-auto p-4 flex items-center justify-center min-h-screen">
//         <Loader2 className="w-8 h-8 animate-spin text-gray-600 dark:text-gray-400" />
//       </div>
//     );
//   }

//   const favoriteRecipes = aiRecipes.filter(r => favorites.includes(r.name));
//   const otherRecipes = aiRecipes.filter(r => !favorites.includes(r.name));

//   return (
//     <div className="max-w-2xl mx-auto p-4">
//       <div className="mb-6">
//         <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
//           Recipe Recommendations
//         </h1>
//         <p className="text-gray-600 dark:text-gray-400">
//           {userItems.length} ingredients available in your fridge
//         </p>
//       </div>

//       {/* AI Recommendation Button */}
//       {aiRecipes.length === 0 && (
//         <button
//           onClick={getAIRecommendations}
//           disabled={aiLoading || userItems.length === 0}
//           className="w-full mb-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-2 border-purple-200 dark:border-purple-700 rounded-lg hover:from-purple-100 hover:to-blue-100 dark:hover:from-purple-900/30 dark:hover:to-blue-900/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           <div className="flex items-center justify-center gap-3">
//             {aiLoading ? (
//               <>
//                 <Loader2 className="w-6 h-6 text-purple-600 dark:text-purple-400 animate-spin" />
//                 <span className="text-purple-900 dark:text-purple-100 font-medium">
//                   Getting AI recommendations...
//                 </span>
//               </>
//             ) : (
//               <>
//                 <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
//                 <span className="text-purple-900 dark:text-purple-100 font-medium">
//                   {userItems.length === 0
//                     ? 'Add items to your fridge first'
//                     : 'Get AI Recipe Recommendations'}
//                 </span>
//               </>
//             )}
//           </div>
//         </button>
//       )}

//       {/* Refresh Button */}
//       {aiRecipes.length > 0 && (
//         <button
//           onClick={getAIRecommendations}
//           disabled={aiLoading}
//           className="w-full mb-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
//         >
//           <RefreshCw className={`w-5 h-5 ${aiLoading ? 'animate-spin' : ''}`} />
//           {aiLoading ? 'Refreshing...' : 'Get New Suggestions'}
//         </button>
//       )}

//       {/* Favorites Section */}
//       {favoriteRecipes.length > 0 && (
//         <div className="mb-8">
//           <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
//             ⭐ Favorites
//           </h2>
//           <div className="space-y-3">
//             {favoriteRecipes.map((recipe, index) => (
//               <RecipeCard key={index} recipe={recipe} />
//             ))}
//           </div>
//         </div>
//       )}

//       {/* AI Suggestions */}
//       {otherRecipes.length > 0 && (
//         <div>
//           <div className="flex items-center gap-2 mb-4">
//             <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
//             <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
//               AI Suggestions
//             </h2>
//           </div>
//           <div className="space-y-3">
//             {otherRecipes.map((recipe, index) => (
//               <RecipeCard key={index} recipe={recipe} />
//             ))}
//           </div>
//         </div>
//       )}

//       {aiRecipes.length === 0 && !aiLoading && userItems.length > 0 && (
//         <div className="text-center py-12">
//           <Sparkles className="w-16 h-16 text-gray-400 mx-auto mb-4" />
//           <p className="text-gray-500 dark:text-gray-400">
//             Click the button above to get AI-powered recipe recommendations
//           </p>
//         </div>
//       )}

//       {/* Recipe Detail Modal */}
//       {selectedRecipe && (
//         <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-4">
//           <div className="bg-white dark:bg-gray-800 w-full sm:max-w-2xl rounded-t-2xl sm:rounded-lg max-h-[90vh] overflow-y-auto">
//             <div className="p-6">
//               <div className="flex items-start justify-between mb-4">
//                 <div className="flex-1">
//                   <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
//                     {selectedRecipe.name}
//                   </h2>
//                   <p className="text-gray-600 dark:text-gray-400">
//                     {selectedRecipe.description}
//                   </p>
//                 </div>
//                 <button
//                   onClick={() => setSelectedRecipe(null)}
//                   className="ml-4 w-10 h-10 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full text-2xl"
//                 >
//                   ×
//                 </button>
//               </div>

//               <div className="flex items-center gap-6 mb-6 text-gray-600 dark:text-gray-400">
//                 <div className="flex items-center gap-2">
//                   <Clock className="w-5 h-5" />
//                   <span>{selectedRecipe.time} minutes</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Users className="w-5 h-5" />
//                   <span>{selectedRecipe.servings} servings</span>
//                 </div>
//                 <span className="capitalize px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
//                   {selectedRecipe.difficulty}
//                 </span>
//               </div>

//               <div className="mb-6">
//                 <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
//                   Ingredients
//                 </h3>
//                 <ul className="space-y-2">
//                   {selectedRecipe.ingredients.map((ingredient, index) => (
//                     <li
//                       key={index}
//                       className={`flex items-start gap-3 ${
//                         ingredient.available
//                           ? 'text-green-700 dark:text-green-300'
//                           : 'text-gray-600 dark:text-gray-400'
//                       }`}
//                     >
//                       <div
//                         className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${
//                           ingredient.available ? 'bg-green-600' : 'bg-gray-400'
//                         }`}
//                       />
//                       <div className="flex-1">
//                         <span className="font-medium">{ingredient.quantity}</span>{' '}
//                         <span className="capitalize">{ingredient.name}</span>
//                         {ingredient.available && (
//                           <span className="ml-2 text-xs text-green-600 dark:text-green-400">
//                             (in fridge)
//                           </span>
//                         )}
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="mb-6">
//                 <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
//                   Instructions
//                 </h3>
//                 <ol className="space-y-3">
//                   {selectedRecipe.instructions.map((instruction, index) => (
//                     <li key={index} className="flex gap-3">
//                       <span className="flex-shrink-0 w-7 h-7 bg-[#007057] text-white rounded-full flex items-center justify-center text-sm font-medium">
//                         {index + 1}
//                       </span>
//                       <span className="text-gray-600 dark:text-gray-400 pt-0.5">
//                         {instruction}
//                       </span>
//                     </li>
//                   ))}
//                 </ol>
//               </div>

//               <div className="flex gap-3">
//                 <button
//                   onClick={() => setSelectedRecipe(null)}
//                   className="flex-1 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg transition-colors font-medium"
//                 >
//                   Close
//                 </button>
//                 <button
//                   onClick={() => handleCookRecipe(selectedRecipe)}
//                   disabled={loading}
//                   className="flex-1 py-3 bg-[#007057] hover:bg-[#005a45] disabled:bg-gray-400 text-white rounded-lg transition-colors flex items-center justify-center gap-2 font-medium"
//                 >
//                   {loading ? (
//                     <>
//                       <Loader2 className="w-5 h-5 animate-spin" />
//                       Cooking...
//                     </>
//                   ) : (
//                     <>
//                       <ChefHat className="w-5 h-5" />
//                       Cook This
//                     </>
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }