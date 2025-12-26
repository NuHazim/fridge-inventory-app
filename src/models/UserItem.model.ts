export interface UserItem {
    user_items_id: string;
    user_id: string;
    item_id: string;
    user_items_name: string;
    user_items_quantity: number;
    user_items_unit: string;
    user_items_expiry_date: Date;
    user_items_added_at: Date;
    user_items_status: 'fresh' | 'expiring_soon' | 'expired';
  }
  
  export interface CreateUserItemDTO {
    item_id: string;
    user_items_name: string;
    user_items_quantity: number;
    user_items_unit: string;
    user_items_expiry_date: Date;
  }
  
  export interface UpdateUserItemDTO {
    user_items_name?: string;
    user_items_quantity?: number;
    user_items_unit?: string;
    user_items_expiry_date?: Date;
    user_items_status?: 'fresh' | 'expiring_soon' | 'expired';
  }
