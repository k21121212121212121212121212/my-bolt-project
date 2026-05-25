import { AlertTriangle, X, Ticket } from 'lucide-react';
import type { CartItem } from '../App';

type Props = {
  item: CartItem;
  onConfirm: () => void;
  onClose: () => void;
};

export default function WarningModal({ item, onConfirm, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-gray-900 border border-amber-500/50 rounded-2xl max-w-md w-full shadow-2xl shadow-amber-500/10 animate-slideUp">
        {/* header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="relative">
              <AlertTriangle className="w-6 h-6 text-amber-400" />
              <div className="absolute inset-0 blur-md bg-amber-400/40" />
            </div>
            <span className="font-black text-amber-400 text-lg uppercase tracking-wide">Warning</span>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* body */}
        <div className="p-6">
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 mb-5">
            <p className="text-amber-300 font-semibold text-sm leading-relaxed text-center">
              قبل شرائك للكود يجب فتح تكت وارسال صوره
            </p>
          </div>

          <div className="flex items-center gap-3 bg-gray-800/60 rounded-xl p-4 mb-6">
            <Ticket className="w-5 h-5 text-cyan-400 flex-shrink-0" />
            <div>
              <p className="text-white font-bold">{item.product.name}</p>
              <p className="text-gray-400 text-sm">{item.duration.label} — <span className="text-cyan-400 font-bold">${item.duration.price}</span></p>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-3 rounded-xl border border-gray-700 text-gray-400 font-semibold hover:text-white hover:border-gray-500 transition-all"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-gray-950 font-black transition-all shadow-lg shadow-amber-500/30 hover:shadow-amber-400/40"
            >
              I Understand
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
