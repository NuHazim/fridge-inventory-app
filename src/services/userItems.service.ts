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
    serverTimestamp,
    Timestamp
  } from 'firebase/firestore';
  import { db } from '../config/firebase.config';
  import { UserItem, CreateUserItemDTO, UpdateUserItemDTO } from '../models/UserItem.model';
  
  const COLLECTION_NAME = 'user_items';
  
  // Helper function to calculate item status
  const calculateStatus = (expiryDate: Date): 'fresh' | 'expiring_soon' | 'expired' => {
    const today = new Date();
    const daysUntilExpiry = Math.ceil((expiryDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  
    if (daysUntilExpiry < 0) return 'expired';
    if (daysUntilExpiry <= 3) return 'expiring_soon';
    return 'fresh';
  };
  
  // Create user item
  export const createUserItem = async (userId: string, itemData: CreateUserItemDTO): Promise<string> => {
    try {
      const status = calculateStatus(itemData.user_items_expiry_date);
  
      const docRef = await addDoc(collection(db, COLLECTION_NAME), {
        user_id: userId,
        item_id: itemData.item_id,
        user_items_quantity: itemData.user_items_quantity,
        user_items_unit: itemData.user_items_unit,
        user_items_expiry_date: Timestamp.fromDate(itemData.user_items_expiry_date),
        user_items_added_at: serverTimestamp(),
        user_items_status: status
      });
      return docRef.id;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  
  // Get user item by ID
  export const getUserItemById = async (itemId: string): Promise<UserItem | null> => {
    try {
      const itemRef = doc(db, COLLECTION_NAME, itemId);
      const itemSnap = await getDoc(itemRef);
  
      if (itemSnap.exists()) {
        const data = itemSnap.data();
        return {
          user_items_id: itemSnap.id,
          user_id: data.user_id,
          item_id: data.item_id,
          user_items_quantity: data.user_items_quantity,
          user_items_unit: data.user_items_unit,
          user_items_expiry_date: data.user_items_expiry_date?.toDate(),
          user_items_added_at: data.user_items_added_at?.toDate(),
          user_items_status: data.user_items_status
        } as UserItem;
      }
      return null;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  
  // Get all items for a user
  export const getUserItems = async (userId: string): Promise<UserItem[]> => {
    try {
      const q = query(
        collection(db, COLLECTION_NAME),
        where('user_id', '==', userId),
        orderBy('user_items_expiry_date')
      );
      const querySnapshot = await getDocs(q);
  
      return querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          user_items_id: doc.id,
          user_id: data.user_id,
          item_id: data.item_id,
          user_items_quantity: data.user_items_quantity,
          user_items_unit: data.user_items_unit,
          user_items_expiry_date: data.user_items_expiry_date?.toDate(),
          user_items_added_at: data.user_items_added_at?.toDate(),
          user_items_status: data.user_items_status
        } as UserItem;
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  
  // Get user items by status
  export const getUserItemsByStatus = async (
    userId: string,
    status: 'fresh' | 'expiring_soon' | 'expired'
  ): Promise<UserItem[]> => {
    try {
      const q = query(
        collection(db, COLLECTION_NAME),
        where('user_id', '==', userId),
        where('user_items_status', '==', status),
        orderBy('user_items_expiry_date')
      );
      const querySnapshot = await getDocs(q);
  
      return querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          user_items_id: doc.id,
          user_id: data.user_id,
          item_id: data.item_id,
          user_items_quantity: data.user_items_quantity,
          user_items_unit: data.user_items_unit,
          user_items_expiry_date: data.user_items_expiry_date?.toDate(),
          user_items_added_at: data.user_items_added_at?.toDate(),
          user_items_status: data.user_items_status
        } as UserItem;
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  
  // Update user item
  export const updateUserItem = async (itemId: string, updates: UpdateUserItemDTO) => {
    try {
      const itemRef = doc(db, COLLECTION_NAME, itemId);
      
      const updateData: any = { ...updates };
      
      // Recalculate status if expiry date is being updated
      if (updates.user_items_expiry_date) {
        updateData.user_items_expiry_date = Timestamp.fromDate(updates.user_items_expiry_date);
        updateData.user_items_status = calculateStatus(updates.user_items_expiry_date);
      }
  
      await updateDoc(itemRef, updateData);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  
  // Delete user item
  export const deleteUserItem = async (itemId: string) => {
    try {
      const itemRef = doc(db, COLLECTION_NAME, itemId);
      await deleteDoc(itemRef);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };