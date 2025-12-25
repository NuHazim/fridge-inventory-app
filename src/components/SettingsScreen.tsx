import { useState } from 'react';
import { Moon, Sun, Bell, Trash2, HelpCircle, Info, LogOut, User, Loader2 } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { useAuth } from './AuthProvider';
import { logout } from '../services/auth.service';
import { collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase.config';

export function SettingsScreen() {
  const { theme, toggleTheme } = useTheme();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const handleSignOut = async () => {
    try {
      setLoading(true);
      await logout();
      // Navigation happens automatically via AuthProvider
    } catch (error) {
      console.error('Error signing out:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleClearAllData = async () => {
    if (!user) return;
    
    try {
      setLoading(true);

      // Delete user_items
      const userItemsQuery = query(
        collection(db, 'user_items'),
        where('user_id', '==', user.uid)
      );
      const userItemsSnapshot = await getDocs(userItemsQuery);
      await Promise.all(
        userItemsSnapshot.docs.map(docSnap => deleteDoc(doc(db, 'user_items', docSnap.id)))
      );

      // Delete grocery_items
      const groceryItemsQuery = query(
        collection(db, 'grocery_items'),
        where('user_id', '==', user.uid)
      );
      const groceryItemsSnapshot = await getDocs(groceryItemsQuery);
      await Promise.all(
        groceryItemsSnapshot.docs.map(docSnap => deleteDoc(doc(db, 'grocery_items', docSnap.id)))
      );

      // Delete recipes
      const recipesQuery = query(
        collection(db, 'recipes'),
        where('user_id', '==', user.uid)
      );
      const recipesSnapshot = await getDocs(recipesQuery);
      await Promise.all(
        recipesSnapshot.docs.map(docSnap => deleteDoc(doc(db, 'recipes', docSnap.id)))
      );

      alert('All data cleared successfully!');
      setShowConfirmDelete(false);
    } catch (error) {
      console.error('Error clearing data:', error);
      alert('Failed to clear data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Settings</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your preferences
        </p>
      </div>

      <div className="space-y-4">
        {/* Account */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="font-semibold text-gray-900 dark:text-white">Account</h2>
          </div>
          <div className="p-4 space-y-1">
            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <User className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <div className="flex-1">
                <p className="font-medium text-gray-900 dark:text-white">
                  {user?.displayName || 'User'}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {user?.email}
                </p>
              </div>
            </div>
            <button 
              onClick={handleSignOut}
              disabled={loading}
              className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors text-left disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 text-gray-600 dark:text-gray-400 animate-spin" />
              ) : (
                <LogOut className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              )}
              <div className="flex-1">
                <p className="font-medium text-gray-900 dark:text-white">Sign Out</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Log out of your account
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* Appearance */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="font-semibold text-gray-900 dark:text-white">Appearance</h2>
          </div>
          <div className="p-4">
            <button
              onClick={toggleTheme}
              className="w-full flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-3">
                {theme === 'light' ? (
                  <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                )}
                <div className="text-left">
                  <p className="font-medium text-gray-900 dark:text-white">Dark Mode</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {theme === 'dark' ? 'On' : 'Off'}
                  </p>
                </div>
              </div>
              <div
                className={`w-12 h-6 rounded-full transition-colors ${
                  theme === 'dark' ? 'bg-[#007057]' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full mt-0.5 transition-transform ${
                    theme === 'dark' ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                ></div>
              </div>
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="font-semibold text-gray-900 dark:text-white">Notifications</h2>
          </div>
          <div className="p-4 space-y-1">
            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg opacity-50">
              <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <div className="flex-1">
                <p className="font-medium text-gray-900 dark:text-white">Expiry Reminders</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Coming soon
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg opacity-50">
              <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <div className="flex-1">
                <p className="font-medium text-gray-900 dark:text-white">Recipe Suggestions</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Coming soon
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Data Management */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="font-semibold text-gray-900 dark:text-white">Data Management</h2>
          </div>
          <div className="p-4 space-y-1">
            <button 
              onClick={() => setShowConfirmDelete(true)}
              disabled={loading}
              className="w-full flex items-center gap-3 p-3 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors text-left disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Trash2 className="w-5 h-5 text-red-600 dark:text-red-400" />
              <div className="flex-1">
                <p className="font-medium text-red-900 dark:text-red-100">Clear All Data</p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  Remove all items from fridge and lists
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* About */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="font-semibold text-gray-900 dark:text-white">About</h2>
          </div>
          <div className="p-4 space-y-1">
            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <HelpCircle className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <div className="flex-1">
                <p className="font-medium text-gray-900 dark:text-white">Help & Support</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Get help using the app
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <Info className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <div className="flex-1">
                <p className="font-medium text-gray-900 dark:text-white">App Version</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  1.0.0 - Firebase Edition
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirm Delete Modal */}
      {showConfirmDelete && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Clear All Data?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              This will permanently delete all your fridge items, grocery lists, and recipes. This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirmDelete(false)}
                disabled={loading}
                className="flex-1 py-2 px-4 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={handleClearAllData}
                disabled={loading}
                className="flex-1 py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Deleting...
                  </>
                ) : (
                  'Delete All'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}