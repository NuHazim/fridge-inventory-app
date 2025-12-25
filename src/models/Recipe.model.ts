export interface Recipe {
    recipe_id: string;
    user_id: string;
    recipe_name: string;
    recipe_instruction: string;
    created_at: Date;
    updated_at: Date;
  }
  
  export interface CreateRecipeDTO {
    recipe_name: string;
    recipe_instruction: string;
  }
  
  export interface UpdateRecipeDTO {
    recipe_name?: string;
    recipe_instruction?: string;
  }