import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ChtsPage from './pages/ChtsPage';
import PaymentModal from './components/PaymentModal';
import WarningModal from './components/WarningModal';

export type Duration = {
  label: string;
  price: number;
};

export type Product = {
  id: string;
  name: string;
  category: 'spoofer' | 'chts';
  durations: Duration[];
  badge?: string;
};

export type CartItem = {
  product: Product;
  duration: Duration;
};

function App() {
  const [activePage, setActivePage] = useState<'home' | 'chts'>('home');
  const [warningItem, setWarningItem] = useState<CartItem | null>(null);
  const [paymentItem, setPaymentItem] = useState<CartItem | null>(null);

  const handleBuy = (product: Product, duration: Duration) => {
    setWarningItem({ product, duration });
  };

  const handleConfirmWarning = () => {
    if (warningItem) {
      setPaymentItem(warningItem);
      setWarningItem(null);
    }
  };

  const handleCloseWarning = () => setWarningItem(null);
  const handleClosePayment = () => setPaymentItem(null);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      {activePage === 'home' ? (
        <HomePage onBuy={handleBuy} />
      ) : (
        <ChtsPage onBuy={handleBuy} />
      )}
      {warningItem && (
        <WarningModal
          item={warningItem}
          onConfirm={handleConfirmWarning}
          onClose={handleCloseWarning}
        />
      )}
      {paymentItem && (
        <PaymentModal item={paymentItem} onClose={handleClosePayment} />
      )}
    </div>
  );
}

export default App;
