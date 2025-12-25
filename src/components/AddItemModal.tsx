import { useState } from 'react';
import { X, Scan, Search, TrendingUp, Loader2 } from 'lucide-react';
import { useAuth } from './AuthProvider';
import { createUserItem } from '../services/userItems.service';
import { createItem } from '../services/itemMaster.service';
import { BarcodeScannerModal } from './BarcodeScannerModal';

interface AddItemModalProps {
  onClose: () => void;
  onItemAdded: () => void;
}

const SUGGESTED_ITEMS = [
  { name: 'Milk', category: 'Dairy', unit: 'L', defaultQty: 1 },
  { name: 'Eggs', category: 'Dairy', unit: 'pcs', defaultQty: 12 },
  { name: 'Bread', category: 'Bakery', unit: 'loaf', defaultQty: 1 },
  { name: 'Chicken Breast', category: 'Meat', unit: 'g', defaultQty: 500 },
  { name: 'Tomatoes', category: 'Vegetables', unit: 'pcs', defaultQty: 4 },
  { name: 'Lettuce', category: 'Vegetables', unit: 'head', defaultQty: 1 },
  { name: 'Cheese', category: 'Dairy', unit: 'g', defaultQty: 250 },
  { name: 'Yogurt', category: 'Dairy', unit: 'g', defaultQty: 500 },
  { name: 'Orange Juice', category: 'Beverages', unit: 'L', defaultQty: 1 },
  { name: 'Apples', category: 'Fruits', unit: 'pcs', defaultQty: 6 },
];

type AddMethod = 'manual' | 'search' | 'suggestions';

export function AddItemModal({ onClose, onItemAdded }: AddItemModalProps) {
  const { user } = useAuth();
  const [method, setMethod] = useState<AddMethod>('suggestions');
  const [showScanner, setShowScanner] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    category: 'Dairy',
    quantity: 1,
    unit: 'pcs',
    expiryDate: '',
  });

  const categories = ['Dairy', 'Meat', 'Vegetables', 'Fruits', 'Bakery', 'Beverages', 'Other'];
  const units = ['pcs', 'g', 'kg', 'L', 'ml', 'oz', 'lb'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.expiryDate || !user) return;

    setLoading(true);
    setError('');

    try {

     
      // Create item_master entry
      const itemMasterId = await createItem({
        item_code: `${formData.category.toUpperCase()}_${Date.now()}`,
        item_name: formData.name,
        item_category: formData.category,
        item_default_shelf_life: 7,
      });

      console.log('Created item:', itemMasterId);



      // Create user_item entry
      await createUserItem(user.uid, {
        item_id: itemMasterId,
        user_items_quantity: formData.quantity,
        user_items_unit: formData.unit,
        user_items_expiry_date: new Date(formData.expiryDate),
      });

      onItemAdded();
      onClose();
    } catch (err) {
      console.error('Error adding item:', err);
      setError(err instanceof Error ? err.message : 'Failed to add item');
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestedItemClick = (item: typeof SUGGESTED_ITEMS[0]) => {
    const defaultExpiry = new Date();
    defaultExpiry.setDate(defaultExpiry.getDate() + 7);
    
    setFormData({
      name: item.name,
      category: item.category,
      quantity: item.defaultQty,
      unit: item.unit,
      expiryDate: defaultExpiry.toISOString().split('T')[0],
    });
    setMethod('manual');
  };

  const handleBarcodeResult = (barcode: string, productName: string) => {
    const defaultExpiry = new Date();
    defaultExpiry.setDate(defaultExpiry.getDate() + 7);
    
    setFormData({
      ...formData,
      name: productName,
      expiryDate: defaultExpiry.toISOString().split('T')[0],
    });
    setShowScanner(false);
    setMethod('manual');
  };

  const filteredSuggestions = SUGGESTED_ITEMS.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center">
        <div className="bg-white dark:bg-gray-800 w-full sm:max-w-lg sm:rounded-lg rounded-t-2xl max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between">
            <h2 className="text-gray-900 dark:text-white">Add Item</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              disabled={loading}
            >
              <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </button>
          </div>

          <div className="p-4">
            {/* Add Method Selector */}
            {method === 'suggestions' && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setShowScanner(true)}
                    className="p-4 bg-[#007057]/10 dark:bg-[#007057]/20 border-2 border-[#007057]/30 dark:border-[#007057]/40 rounded-lg hover:bg-[#007057]/20 dark:hover:bg-[#007057]/30 transition-colors"
                  >
                    <Scan className="w-8 h-8 text-[#007057] mx-auto mb-2" />
                    <p className="text-sm text-[#007057]">Scan Barcode</p>
                  </button>
                  <button
                    onClick={() => setMethod('search')}
                    className="p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                  >
                    <Search className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                    <p className="text-sm text-green-900 dark:text-green-100">Search Items</p>
                  </button>
                </div>

                <button
                  onClick={() => setMethod('manual')}
                  className="w-full py-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  Enter Manually
                </button>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <h3 className="text-gray-900 dark:text-white">Popular Items</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {SUGGESTED_ITEMS.slice(0, 6).map((item, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestedItemClick(item)}
                        className="p-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-left"
                      >
                        <p className="text-gray-900 dark:text-white">{item.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{item.category}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Search Method */}
            {method === 'search' && (
              <div className="space-y-4">
                <button
                  onClick={() => setMethod('suggestions')}
                  className="text-blue-600 dark:text-blue-400 text-sm"
                >
                  ← Back
                </button>

                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for items..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    autoFocus
                  />
                </div>

                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {filteredSuggestions.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestedItemClick(item)}
                      className="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-left"
                    >
                      <p className="text-gray-900 dark:text-white">{item.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {item.category} • {item.defaultQty} {item.unit}
                      </p>
                    </button>
                  ))}
                  {filteredSuggestions.length === 0 && (
                    <p className="text-center py-8 text-gray-500 dark:text-gray-400">
                      No items found
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Manual Entry Form */}
            {method === 'manual' && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <button
                  type="button"
                  onClick={() => setMethod('suggestions')}
                  className="text-blue-600 dark:text-blue-400 text-sm"
                  disabled={loading}
                >
                  ← Back
                </button>

                <div>
                  <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                    Item Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                    required
                    disabled={loading}
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                    disabled={loading}
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                      Quantity
                    </label>
                    <input
                      type="number"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: Number(e.target.value) })}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                      min="0.1"
                      step="0.1"
                      required
                      disabled={loading}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                      Unit
                    </label>
                    <select
                      value={formData.unit}
                      onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                      disabled={loading}
                    >
                      {units.map(unit => (
                        <option key={unit} value={unit}>{unit}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="date"
                    value={formData.expiryDate}
                    onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                    required
                    disabled={loading}
                  />
                </div>

                {error && (
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
                    <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3 bg-[#007057] hover:bg-[#005a45] disabled:bg-gray-400 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Adding...
                    </>
                  ) : (
                    'Add to Fridge'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {showScanner && (
        <BarcodeScannerModal
          onClose={() => setShowScanner(false)}
          onResult={handleBarcodeResult}
        />
      )}
    </>
  );
}