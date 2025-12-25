import {
    collection,
    doc,
    getDoc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    query,
    where,
    orderBy,
    serverTimestamp
  } from 'firebase/firestore';
  import { db } from '../config/firebase.config';
  import { Recipe, CreateRecipeDTO, UpdateRecipeDTO } from '../models/Recipe.model';
  
  const COLLECTION_NAME = 'recipes';
  
  // Create recipe
  export const createRecipe = async (userId: string, recipeData: CreateRecipeDTO): Promise<string> => {
    try {
      const docRef = await addDoc(collection(db, COLLECTION_NAME), {
        user_id: userId,
        recipe_name: recipeData.recipe_name,
        recipe_instruction: recipeData.recipe_instruction,
        created_at: serverTimestamp(),
        updated_at: serverTimestamp()
      });
      return docRef.id;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  
  // Get recipe by ID
  export const getRecipeById = async (recipeId: string): Promise<Recipe | null> => {
    try {
      const recipeRef = doc(db, COLLECTION_NAME, recipeId);
      const recipeSnap = await getDoc(recipeRef);
  
      if (recipeSnap.exists()) {
        const data = recipeSnap.data();
        return {
          recipe_id: recipeSnap.id,
          user_id: data.user_id,
          recipe_name: data.recipe_name,
          recipe_instruction: data.recipe_instruction,
          created_at: data.created_at?.toDate(),
          updated_at: data.updated_at?.toDate()
        } as Recipe;
      }
      return null;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  
  // Get all recipes for a user
  export const getUserRecipes = async (userId: string): Promise<Recipe[]> => {
    try {
      const q = query(
        collection(db, COLLECTION_NAME),
        where('user_id', '==', userId),
        orderBy('created_at', 'desc')
      );
      const querySnapshot = await getDocs(q);
  
      return querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          recipe_id: doc.id,
          user_id: data.user_id,
          recipe_name: data.recipe_name,
          recipe_instruction: data.recipe_instruction,
          created_at: data.created_at?.toDate(),
          updated_at: data.updated_at?.toDate()
        } as Recipe;
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  
  // Update recipe
  export const updateRecipe = async (recipeId: string, updates: UpdateRecipeDTO) => {
    try {
      const recipeRef = doc(db, COLLECTION_NAME, recipeId);
      await updateDoc(recipeRef, {
        ...updates,
        updated_at: serverTimestamp()
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  
  // Delete recipe
  export const deleteRecipe = async (recipeId: string) => {
    try {
      const recipeRef = doc(db, COLLECTION_NAME, recipeId);
      await deleteDoc(recipeRef);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };