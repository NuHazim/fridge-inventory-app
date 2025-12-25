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
  import { ItemMaster, CreateItemMasterDTO, UpdateItemMasterDTO } from '../models/ItemMaster.model';
  
  const COLLECTION_NAME = 'item_master';
  
  // Create item
  export const createItem = async (itemData: CreateItemMasterDTO): Promise<string> => {
    try {
      const docRef = await addDoc(collection(db, COLLECTION_NAME), {
        ...itemData,
        created_at: serverTimestamp(),
        updated_at: serverTimestamp()
      });
      return docRef.id;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  
  // Get item by ID
  export const getItemById = async (itemId: string): Promise<ItemMaster | null> => {
    try {
      const itemRef = doc(db, COLLECTION_NAME, itemId);
      const itemSnap = await getDoc(itemRef);
  
      if (itemSnap.exists()) {
        const data = itemSnap.data();
        return {
          item_id: itemSnap.id,
          item_code: data.item_code,
          item_name: data.item_name,
          item_category: data.item_category,
          item_default_shelf_life: data.item_default_shelf_life,
          created_at: data.created_at?.toDate(),
          updated_at: data.updated_at?.toDate()
        } as ItemMaster;
      }
      return null;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  
  // Get all items
  export const getAllItems = async (): Promise<ItemMaster[]> => {
    try {
      const q = query(collection(db, COLLECTION_NAME), orderBy('item_name'));
      const querySnapshot = await getDocs(q);
  
      return querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          item_id: doc.id,
          item_code: data.item_code,
          item_name: data.item_name,
          item_category: data.item_category,
          item_default_shelf_life: data.item_default_shelf_life,
          created_at: data.created_at?.toDate(),
          updated_at: data.updated_at?.toDate()
        } as ItemMaster;
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  
  // Get items by category
  export const getItemsByCategory = async (category: string): Promise<ItemMaster[]> => {
    try {
      const q = query(
        collection(db, COLLECTION_NAME),
        where('item_category', '==', category),
        orderBy('item_name')
      );
      const querySnapshot = await getDocs(q);
  
      return querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          item_id: doc.id,
          item_code: data.item_code,
          item_name: data.item_name,
          item_category: data.item_category,
          item_default_shelf_life: data.item_default_shelf_life,
          created_at: data.created_at?.toDate(),
          updated_at: data.updated_at?.toDate()
        } as ItemMaster;
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  
  // Update item
  export const updateItem = async (itemId: string, updates: UpdateItemMasterDTO) => {
    try {
      const itemRef = doc(db, COLLECTION_NAME, itemId);
      await updateDoc(itemRef, {
        ...updates,
        updated_at: serverTimestamp()
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  
  // Delete item
  export const deleteItem = async (itemId: string) => {
    try {
      const itemRef = doc(db, COLLECTION_NAME, itemId);
      await deleteDoc(itemRef);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };