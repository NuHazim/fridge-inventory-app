export interface RecipeIngredient {
    recipe_ingredients_id: string;
    recipe_id: string;
    item_id: string;
    ingredient_quantity: number;
    ingredient_unit: string;
  }
  
  export interface CreateRecipeIngredientDTO {
    item_id: string;
    ingredient_quantity: number;
    ingredient_unit: string;
  }
  
  export interface UpdateRecipeIngredientDTO {
    ingredient_quantity?: number;
    ingredient_unit?: string;
  }