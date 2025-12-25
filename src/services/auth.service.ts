import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    User as FirebaseUser,
    updateProfile
  } from 'firebase/auth';
  import { auth } from '../config/firebase.config';
  import { createUser } from './user.service';
  import { CreateUserDTO } from '../models/User.model';
  
  // Sign up new user
  export const signUp = async (userData: CreateUserDTO) => {
    try {
      // Create auth user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userData.user_email,
        userData.user_password
      );
  
      // Update display name
      await updateProfile(userCredential.user, {
        displayName: userData.user_name
      });
  
      // Create user document in Firestore
      await createUser({
        user_id: userCredential.user.uid,
        user_name: userData.user_name,
        user_email: userData.user_email
      });
  
      return userCredential.user;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  
  // Sign in existing user
  export const signIn = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  
  // Sign out user
  export const logout = async () => {
    try {
      await signOut(auth);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  
  // Get current user
  export const getCurrentUser = (): FirebaseUser | null => {
    return auth.currentUser;
  };
  
  // Listen to auth state changes
  export const onAuthChange = (callback: (user: FirebaseUser | null) => void) => {
    return onAuthStateChanged(auth, callback);
  };