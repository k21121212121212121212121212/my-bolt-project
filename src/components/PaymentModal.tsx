import { X, ExternalLink, CreditCard, ShieldCheck } from 'lucide-react';
import type { CartItem } from '../App';

type Props = {
  item: CartItem;
  onClose: () => void;
};

function getPaymentUrl(price: number): string {
  if (price <= 5) {
    return 'https://www.g2a.com/rewarble-visa-gift-card-5-usd-by-rewarble-key-global-i10000502992001';
  } else if (price <= 15) {
    return 'https://www.g2a.com/rewarble-visa-gift-card-15-usd-by-rewarble-key-global-i10000502992002';
  } else {
    return 'https://www.g2a.com/rewarble-visa-gift-card-25-usd-by-rewarble-key-global-i10000502992003';
  }
}

export default function PaymentModal({ item, onClose }: Props) {
  const paymentUrl = getPaymentUrl(item.duration.price);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-gray-900 border border-cyan-500/40 rounded-2xl max-w-md w-full shadow-2xl shadow-cyan-500/10 animate-slideUp">
        {/* header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="relative">
              <CreditCard className="w-6 h-6 text-cyan-400" />
              <div className="absolute inset-0 blur-md bg-cyan-400/30" />
            </div>
            <span className="font-black text-white text-lg">Complete Purchase</span>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* body */}
        <div className="p-6">
          {/* order summary */}
          <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-4 mb-5">
            <p className="text-gray-400 text-xs uppercase tracking-widest mb-3 font-semibold">Order Summary</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-bold">{item.product.name}</p>
                <p className="text-gray-400 text-sm">{item.duration.label}</p>
              </div>
              <span className="text-2xl font-black text-cyan-400">${item.duration.price}</span>
            </div>
          </div>

          {/* secure notice */}
          <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 mb-5">
            <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <p className="text-emerald-300 text-xs font-medium">
              Secure payment via G2A Rewarble Visa Gift Card
            </p>
          </div>

          {/* payment amount highlight */}
          <div className="text-center mb-5">
            <p className="text-gray-400 text-sm mb-1">Amount to purchase</p>
            <p className="text-4xl font-black text-white">
              ${item.duration.price} <span className="text-cyan-400 text-2xl">USD</span>
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-3 rounded-xl border border-gray-700 text-gray-400 font-semibold hover:text-white hover:border-gray-500 transition-all"
            >
              Cancel
            </button>
            <a
              href={paymentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-black transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/40"
            >
              Pay Now
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
