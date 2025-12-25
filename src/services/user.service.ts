import {
    doc,
    getDoc,
    setDoc,
    updateDoc,
    deleteDoc,
    serverTimestamp
  } from 'firebase/firestore';
  import { db } from '../config/firebase.config';
  import { User, UpdateUserDTO } from '../models/User.model';
  
  const COLLECTION_NAME = 'users';
  
  // Create user document
  export const createUser = async (userData: Omit<User, 'created_at' | 'updated_at'>) => {
    try {
      const userRef = doc(db, COLLECTION_NAME, userData.user_id);
      await setDoc(userRef, {
        ...userData,
        created_at: serverTimestamp(),
        updated_at: serverTimestamp()
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  
  // Get user by ID
  export const getUserById = async (userId: string): Promise<User | null> => {
    try {
      const userRef = doc(db, COLLECTION_NAME, userId);
      const userSnap = await getDoc(userRef);
  
      if (userSnap.exists()) {
        const data = userSnap.data();
        return {
          user_id: userSnap.id,
          user_name: data.user_name,
          user_email: data.user_email,
          created_at: data.created_at?.toDate(),
          updated_at: data.updated_at?.toDate()
        } as User;
      }
      return null;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  
  // Update user
  export const updateUser = async (userId: string, updates: UpdateUserDTO) => {
    try {
      const userRef = doc(db, COLLECTION_NAME, userId);
      await updateDoc(userRef, {
        ...updates,
        updated_at: serverTimestamp()
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  
  // Delete user
  export const deleteUser = async (userId: string) => {
    try {
      const userRef = doc(db, COLLECTION_NAME, userId);
      await deleteDoc(userRef);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };