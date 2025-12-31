import { useState } from 'react';
import { X, Scan } from 'lucide-react';
import BarcodeScannerComponent from 'react-qr-barcode-scanner';

interface BarcodeScannerModalProps {
  onClose: () => void;
  onResult: (data: {
    barcode: string;
    name: string;
    category: string;
    unit: string;
  }) => void;
}

export function BarcodeScannerModal({ onClose, onResult }: BarcodeScannerModalProps) {
  const [manualBarcode, setManualBarcode] = useState('');
  const [scanning, setScanning] = useState(false);
  const [error, setError] = useState('');

  // 🔥 REAL barcode handler
  const handleBarcode = async (barcode: string) => {
    setScanning(true);
  setError('');

  try {
    const res = await fetch(
      `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`
    );

    if (!res.ok) {
      setError(`API request failed with status ${res.status}`);
      return;
    }

    const json = await res.json();
    console.log('OpenFoodFacts response:', json);

    if (!json.product) {
      setError('Product not found');
      return;
    }

    const product = json.product;

    // Determine category
    const category =
      product.categories_tags?.length > 0
        ? product.categories_tags[0].replace(/^en:/, '')
        : 'Other';

    // Determine unit
    let unit = 'pcs';
    if (product.quantity) {
      const q = product.quantity.toLowerCase();
      if (q.includes('ml') || q.includes('l')) unit = 'ml';
      else if (q.includes('g') || q.includes('kg') || q.includes('oz') || q.includes('lb')) unit = 'g';
    }

    onResult({
      barcode,
      name: product.product_name || 'Unknown Product',
      category,
      unit,
    });
  } catch (err) {
    console.error('Barcode fetch error:', err);
    setError('Failed to fetch product info');
  } finally {
    setScanning(false);
  }
  };

  // Manual fallback (still useful)
  const handleManualEntry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!manualBarcode) return;
    handleBarcode(manualBarcode);
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center">
      <div className="w-full max-w-md mx-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden">

          {/* Header */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <h2 className="text-gray-900 dark:text-white">Scan Barcode</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <div className="p-6">

            {/* CAMERA AREA (REAL) */}
            <div className="relative aspect-square bg-gray-900 rounded-lg mb-4 overflow-hidden">
            <BarcodeScannerComponent
  width="100%"
  height="100%"
  onUpdate={(err, result) => {
    if (!result || scanning) return;

    const barcode = (result as any).text;

    if (barcode) {
      handleBarcode(barcode);
    }
  }}
/>

              <div className="absolute inset-8 border-2 border-blue-500 rounded-lg pointer-events-none" />
            </div>

            {scanning && (
              <div className="text-center text-white mb-2">
                <Scan className="w-8 h-8 mx-auto animate-pulse text-[#007057]" />
                Scanning...
              </div>
            )}

            {error && (
              <p className="text-red-500 text-sm text-center mb-3">{error}</p>
            )}

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-2 bg-white dark:bg-gray-800 text-sm text-gray-500">
                  or enter manually
                </span>
              </div>
            </div>

            {/* Manual input */}
            <form onSubmit={handleManualEntry} className="space-y-3">
              <input
                type="text"
                placeholder="Enter barcode number"
                value={manualBarcode}
                onChange={(e) => setManualBarcode(e.target.value)}
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border rounded-lg"
              />
              <button
                type="submit"
                className="w-full py-2 bg-gray-200 dark:bg-gray-700 rounded-lg"
              >
                Submit
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}
