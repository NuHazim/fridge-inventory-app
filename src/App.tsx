import { useState } from 'react';
import { Home, ShoppingCart, ChefHat, Settings } from 'lucide-react';
import { FridgeScreen } from './components/FridgeScreen';
import { GroceryScreen } from './components/GroceryScreen';
import { SettingsScreen } from './components/SettingsScreen';
import { ThemeProvider } from './components/ThemeProvider';
import { AuthProvider, useAuth } from './components/AuthProvider';
import { LoginScreen } from './components/LoginScreen';
import { SignUpScreen } from './components/SignUpScreen';

type Screen = 'fridge' | 'grocery' | 'recipes' | 'settings';

function AppContent() {
  const { user, isLoading } = useAuth();
  const [authScreen, setAuthScreen] = useState<'login' | 'signup'>('login');

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-gray-600 dark:text-gray-400">Loading...</div>
      </div>
    );
  }

  // Show auth screens if no user
  if (!user) {
    if (authScreen === 'login') {
      return <LoginScreen onSwitchToSignUp={() => setAuthScreen('signup')} />;
    }
    return <SignUpScreen onSwitchToLogin={() => setAuthScreen('login')} />;
  }

  // User is logged in - show main app
  return <MainApp />;
}

function MainApp() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('fridge');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'fridge':
        return <FridgeScreen />;
      case 'grocery':
        return <GroceryScreen />;
      case 'recipes':
        return (
          <div className="max-w-2xl mx-auto p-4 min-h-screen flex items-center justify-center">
            <div className="text-center">
              <ChefHat className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Recipes
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Coming soon! Find recipes based on your fridge items.
              </p>
            </div>
          </div>
        );
      case 'settings':
        return <SettingsScreen />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      {renderScreen()}

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 safe-area-bottom">
        <div className="grid grid-cols-4 h-16">
          <button
            onClick={() => setCurrentScreen('fridge')}
            className={`flex flex-col items-center justify-center gap-1 transition-colors ${
              currentScreen === 'fridge'
                ? 'text-[#007057]'
                : 'text-gray-500 dark:text-gray-400'
            }`}
          >
            <Home className="w-6 h-6" />
            <span className="text-xs">Fridge</span>
          </button>
          <button
            onClick={() => setCurrentScreen('grocery')}
            className={`flex flex-col items-center justify-center gap-1 transition-colors ${
              currentScreen === 'grocery'
                ? 'text-[#007057]'
                : 'text-gray-500 dark:text-gray-400'
            }`}
          >
            <ShoppingCart className="w-6 h-6" />
            <span className="text-xs">Grocery</span>
          </button>
          <button
            onClick={() => setCurrentScreen('recipes')}
            className={`flex flex-col items-center justify-center gap-1 transition-colors ${
              currentScreen === 'recipes'
                ? 'text-[#007057]'
                : 'text-gray-500 dark:text-gray-400'
            }`}
          >
            <ChefHat className="w-6 h-6" />
            <span className="text-xs">Recipes</span>
          </button>
          <button
            onClick={() => setCurrentScreen('settings')}
            className={`flex flex-col items-center justify-center gap-1 transition-colors ${
              currentScreen === 'settings'
                ? 'text-[#007057]'
                : 'text-gray-500 dark:text-gray-400'
            }`}
          >
            <Settings className="w-6 h-6" />
            <span className="text-xs">Settings</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}