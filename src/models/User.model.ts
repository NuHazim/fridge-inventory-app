export interface User {
    user_id: string;        // Firebase Auth UID
    user_name: string;
    user_email: string;
    created_at: Date;
    updated_at: Date;
  }
  
  export interface CreateUserDTO {
    user_name: string;
    user_email: string;
    user_password: string;
  }
  
  export interface UpdateUserDTO {
    user_name?: string;
    user_email?: string;
  }