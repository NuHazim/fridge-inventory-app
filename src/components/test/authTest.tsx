import { signUp, onAuthChange } from '../../services/auth.service';
import { createItem, getAllItems } from '../../services/itemMaster.service';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';

function AuthAndFirestoreTest() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthChange((currentUser) => {
      setUser(currentUser);
      console.log('Current user:', currentUser);
    });
    return unsubscribe;
  }, []);

  const handleSignUp = async () => {
    try {
      await signUp({
        user_name: 'Test User',
        user_email: 'test@example.com',
        user_password: 'password123'
      });
      console.log('Sign up successful!');
    } catch (error) {
      console.error('Sign up error:', error);
    }
  };

  const handleTestItem = async () => {
    try {
      const itemId = await createItem({
        item_code: 'MILK001',
        item_name: 'Whole Milk',
        item_category: 'Dairy',
        item_default_shelf_life: 7
      });
      console.log('Created item:', itemId);
      const items = await getAllItems();
      console.log('All items:', items);
    } catch (error) {
      console.error('Test item error:', error);
    }
  };

  return (
    <div>
      <h2>Auth And Firestore Test</h2>
      <p>User: {user?.email || 'Not logged in'}</p>
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleTestItem}>Test Item</button>
    </div>
  );
}

export default AuthAndFirestoreTest;
