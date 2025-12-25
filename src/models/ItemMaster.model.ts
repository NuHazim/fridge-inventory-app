export interface ItemMaster {
    item_id: string;
    item_code: string;
    item_name: string;
    item_category: string;
    item_default_shelf_life: number; // in days
    created_at: Date;
    updated_at: Date;
  }
  
  export interface CreateItemMasterDTO {
    item_code: string;
    item_name: string;
    item_category: string;
    item_default_shelf_life: number;
  }
  
  export interface UpdateItemMasterDTO {
    item_code?: string;
    item_name?: string;
    item_category?: string;
    item_default_shelf_life?: number;
  }