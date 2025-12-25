import {
    collection,
    doc,
    getDoc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    query,
    where
  } from 'firebase/firestore';
  import { db } from '../config/firebase.config';
  import { RecipeIngredient, CreateRecipeIngredientDTO, UpdateRecipeIngredientDTO } from '../models/RecipeIngredient.model';
  
  const COLLECTION_NAME = 'recipe_ingredients';
  
  // Add ingredient to recipe
  export const addRecipeIngredient = async (
    recipeId: string,
    ingredientData: CreateRecipeIngredientDTO
  ): Promise<string> => {
    try {
      const docRef = await addDoc(collection(db, COLLECTION_NAME), {
        recipe_id: recipeId,
        item_id: ingredientData.item_id,
        ingredient_quantity: ingredientData.ingredient_quantity,
        ingredient_unit: ingredientData.ingredient_unit
      });
      return docRef.id;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  
  // Get ingredient by ID
  export const getRecipeIngredientById = async (ingredientId: string): Promise<RecipeIngredient | null> => {
    try {
      const ingredientRef = doc(db, COLLECTION_NAME, ingredientId);
      const ingredientSnap = await getDoc(ingredientRef);
  
      if (ingredientSnap.exists()) {
        const data = ingredientSnap.data();
        return {
          recipe_ingredients_id: ingredientSnap.id,
          recipe_id: data.recipe_id,
          item_id: data.item_id,
          ingredient_quantity: data.ingredient_quantity,
          ingredient_unit: data.ingredient_unit
        } as RecipeIngredient;
      }
      return null;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  
  // Get all ingredients for a recipe
  export const getRecipeIngredients = async (recipeId: string): Promise<RecipeIngredient[]> => {
    try {
      const q = query(
        collection(db, COLLECTION_NAME),
        where('recipe_id', '==', recipeId)
      );
      const querySnapshot = await getDocs(q);
  
      return querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          recipe_ingredients_id: doc.id,
          recipe_id: data.recipe_id,
          item_id: data.item_id,
          ingredient_quantity: data.ingredient_quantity,
          ingredient_unit: data.ingredient_unit
        } as RecipeIngredient;
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  
  // Update recipe ingredient
  export const updateRecipeIngredient = async (
    ingredientId: string,
    updates: UpdateRecipeIngredientDTO
  ) => {
    try {
      const ingredientRef = doc(db, COLLECTION_NAME, ingredientId);
      await updateDoc(ingredientRef, updates as any);

    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  
  // Delete recipe ingredient
  export const deleteRecipeIngredient = async (ingredientId: string) => {
    try {
      const ingredientRef = doc(db, COLLECTION_NAME, ingredientId);
      await deleteDoc(ingredientRef);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  
  // Delete all ingredients for a recipe
  export const deleteAllRecipeIngredients = async (recipeId: string) => {
    try {
      const ingredients = await getRecipeIngredients(recipeId);
      const deletePromises = ingredients.map((ingredient) =>
        deleteRecipeIngredient(ingredient.recipe_ingredients_id)
      );
      await Promise.all(deletePromises);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };