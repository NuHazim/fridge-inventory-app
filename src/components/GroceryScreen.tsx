import { useState, useEffect } from 'react';
import { Plus, Trash2, Check, Sparkles, Loader2 } from 'lucide-react';
import { useAuth } from './AuthProvider';
import { createUserItem } from '../services/userItems.service';
import { createItem } from '../services/itemMaster.service';
import { 
  collection, 
  addDoc, 
  getDocs, 
  deleteDoc, 
  updateDoc, 
  doc, 
  query, 
  where,
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '../config/firebase.config';

interface GroceryItem {
  id: string;
  user_id: string;
  name: string;
  category: string;
  quantity: number;
  unit: string;
  completed: boolean;
  created_at: Date;
}

const RECOMMENDED_ITEMS = [
  { name: 'Milk', category: 'Dairy', quantity: 1, unit: 'L' },
  { name: 'Eggs', category: 'Dairy', quantity: 12, unit: 'pcs' },
  { name: 'Bread', category: 'Bakery', quantity: 1, unit: 'loaf' },
  { name: 'Bananas', category: 'Fruits', quantity: 6, unit: 'pcs' },
  { name: 'Rice', category: 'Grains', quantity: 1, unit: 'kg' },
];

export function GroceryScreen() {
  const { user } = useAuth();
  const [items, setItems] = useState<GroceryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showRecommended, setShowRecommended] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    category: 'Dairy',
    quantity: 1,
    unit: 'pcs',
  });

  const categories = ['Dairy', 'Meat', 'Vegetables', 'Fruits', 'Bakery', 'Beverages', 'Grains', 'Other'];
  const units = ['pcs', 'g', 'kg', 'L', 'ml', 'oz', 'lb', 'loaf'];

  const completedCount = items.filter(item => item.completed).length;

  // Load grocery items
  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  const loadItems = async () => {
    try {
      setLoading(true);
      const q = query(
        collection(db, 'grocery_items'),
        where('user_id', '==', user!.uid)
      );
      const querySnapshot = await getDocs(q);
      
      const loadedItems: GroceryItem[] = querySnapshot.docs.map(doc => ({
        id: doc.id,
        user_id: doc.data().user_id,
        name: doc.data().name,
        category: doc.data().category,
        quantity: doc.data().quantity,
        unit: doc.data().unit,
        completed: doc.data().completed || false,
        created_at: doc.data().created_at?.toDate() || new Date(),
      }));
      
      setItems(loadedItems);
    } catch (error) {
      console.error('Error loading items:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddItem = async (itemData: typeof formData) => {
    if (!user) return;
    
    try {
      await addDoc(collection(db, 'grocery_items'), {
        user_id: user.uid,
        name: itemData.name,
        category: itemData.category,
        quantity: itemData.quantity,
        unit: itemData.unit,
        completed: false,
        created_at: serverTimestamp(),
      });
      
      await loadItems();
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const handleRemoveItem = async (itemId: string) => {
    try {
      await deleteDoc(doc(db, 'grocery_items', itemId));
      setItems(items.filter(item => item.id !== itemId));
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  const handleToggleItem = async (itemId: string) => {
    try {
      const item = items.find(i => i.id === itemId);
      if (!item) return;
      
      await updateDoc(doc(db, 'grocery_items', itemId), {
        completed: !item.completed,
      });
      
      setItems(items.map(i => 
        i.id === itemId ? { ...i, completed: !i.completed } : i
      ));
    } catch (error) {
      console.error('Error toggling item:', error);
    }
  };

  

// Replace the handleCompletePurchase function with this:
const handleCompletePurchase = async () => {
  if (!user) return;
  
  try {
    setLoading(true);
    const completedItems = items.filter(item => item.completed);
    
    // Step 1: Add completed items to fridge (user_items)
    for (const groceryItem of completedItems) {
      try {
        // Create item_master entry
        const itemMasterId = await createItem({
          item_code: `${groceryItem.category.toUpperCase()}_${Date.now()}`,
          item_name: groceryItem.name,
          item_category: groceryItem.category,
          item_default_shelf_life: getDefaultShelfLife(groceryItem.category),
        });

        // Calculate default expiry date based on category
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + getDefaultShelfLife(groceryItem.category));

        // Create user_item entry (add to fridge)
        await createUserItem(user.uid, {
          item_id: itemMasterId,
          user_items_name: groceryItem.name,
          user_items_quantity: groceryItem.quantity,
          user_items_unit: groceryItem.unit,
          user_items_expiry_date: expiryDate,
        });

        console.log(`Added ${groceryItem.name} to fridge`);
      } catch (error) {
        console.error(`Error adding ${groceryItem.name} to fridge:`, error);
      }
    }

    // Step 2: Delete all completed items from grocery list
    await Promise.all(
      completedItems.map(item => deleteDoc(doc(db, 'grocery_items', item.id)))
    );

    // Step 3: Reload grocery list
    await loadItems();

    // Show success message
    alert(`✅ ${completedItems.length} item(s) added to fridge!`);
  } catch (error) {
    console.error('Error completing purchase:', error);
    alert('Failed to complete purchase. Please try again.');
  } finally {
    setLoading(false);
  }
};

const getDefaultShelfLife = (category: string): number => {
  const shelfLifeMap: Record<string, number> = {
    'Dairy': 7,
    'Meat': 3,
    'Vegetables': 5,
    'Fruits': 7,
    'Bakery': 5,
    'Beverages': 30,
    'Grains': 180,
    'Other': 7,
  };
  return shelfLifeMap[category] || 7; // Default 7 days
};


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) return;

    await handleAddItem(formData);
    setFormData({
      name: '',
      category: 'Dairy',
      quantity: 1,
      unit: 'pcs',
    });
    setShowAddForm(false);
  };

  const addRecommendedItem = async (item: typeof RECOMMENDED_ITEMS[0]) => {
    await handleAddItem(item);
  };

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto p-4 flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-gray-600 dark:text-gray-400" />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Grocery List</h1>
        <p className="text-gray-600 dark:text-gray-400">
          {completedCount} of {items.length} items completed
        </p>
      </div>

      {/* AI Recommended Items */}
      <button
        onClick={() => setShowRecommended(!showRecommended)}
        className="w-full mb-4 p-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border border-purple-200 dark:border-purple-700 rounded-lg hover:from-purple-100 hover:to-blue-100 dark:hover:from-purple-900/30 dark:hover:to-blue-900/30 transition-colors"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <span className="text-purple-900 dark:text-purple-100 font-medium">AI Recommended Items</span>
          </div>
          <span className="text-sm text-purple-600 dark:text-purple-400">
            {showRecommended ? 'Hide' : 'Show'}
          </span>
        </div>
      </button>

      {showRecommended && (
        <div className="mb-4 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Based on your fridge contents and shopping patterns
          </p>
          <div className="space-y-2">
            {RECOMMENDED_ITEMS.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div>
                  <p className="text-gray-900 dark:text-white font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.quantity} {item.unit}
                  </p>
                </div>
                <button
                  onClick={() => addRecommendedItem(item)}
                  className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors"
                >
                  Add
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Add Item Button */}
      {!showAddForm && (
        <button
          onClick={() => setShowAddForm(true)}
          className="w-full mb-4 py-3 bg-[#007057] hover:bg-[#005a45] text-white rounded-lg flex items-center justify-center gap-2 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Item
        </button>
      )}

      {/* Add Item Form */}
      {showAddForm && (
        <form onSubmit={handleSubmit} className="mb-4 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Item name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white text-sm"
              required
            />
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white text-sm"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <input
              type="number"
              placeholder="Quantity"
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: Number(e.target.value) })}
              className="px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white text-sm"
              min="0.1"
              step="0.1"
              required
            />
            <select
              value={formData.unit}
              onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
              className="px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white text-sm"
            >
              {units.map(unit => (
                <option key={unit} value={unit}>{unit}</option>
              ))}
            </select>
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              className="flex-1 py-2 bg-[#007057] hover:bg-[#005a45] text-white rounded-lg transition-colors text-sm"
            >
              Add
            </button>
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg transition-colors text-sm"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Grocery Items List */}
      <div className="space-y-3 mb-4">
        {items.map(item => (
          <div
            key={item.id}
            className={`p-4 rounded-lg border transition-all ${
              item.completed
                ? 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 opacity-60'
                : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
            }`}
          >
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleToggleItem(item.id)}
                className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                  item.completed
                    ? 'bg-[#007057] border-[#007057]'
                    : 'border-gray-300 dark:border-gray-600 hover:border-[#007057]'
                }`}
              >
                {item.completed && <Check className="w-4 h-4 text-white" />}
              </button>
              <div className="flex-1">
                <h3 className={`font-medium text-gray-900 dark:text-white ${item.completed ? 'line-through' : ''}`}>
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.quantity} {item.unit} • {item.category}
                </p>
              </div>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <Trash2 className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </button>
            </div>
          </div>
        ))}

        {items.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No items in your grocery list</p>
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
              Click "Add Item" to start building your list
            </p>
          </div>
        )}
      </div>

      {/* Complete Purchase Button */}
      {completedCount > 0 && (
        <button
          onClick={handleCompletePurchase}
          className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-medium"
        >
          Complete Purchase ({completedCount} items)
        </button>
      )}
    </div>
  );
}