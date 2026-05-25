import { useState } from 'react';
import { ShoppingCart, CheckCircle, Clock, Infinity } from 'lucide-react';
import type { Product, Duration } from '../App';

type Props = {
  product: Product;
  onBuy: (product: Product, duration: Duration) => void;
  accentColor?: string;
};

export default function ProductCard({ product, onBuy, accentColor = 'cyan' }: Props) {
  const [selectedDuration, setSelectedDuration] = useState<Duration>(product.durations[0]);
  const [hovered, setHovered] = useState(false);

  const accent = {
    cyan: {
      border: 'border-cyan-500/40 hover:border-cyan-400',
      glow: 'shadow-cyan-500/20',
      badge: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
      btn: 'bg-cyan-500 hover:bg-cyan-400 shadow-cyan-500/40',
      selected: 'bg-cyan-500/20 border-cyan-500 text-cyan-300',
      unselected: 'bg-gray-800/60 border-gray-700 text-gray-400 hover:border-gray-500',
      dot: 'bg-cyan-400',
    },
    emerald: {
      border: 'border-emerald-500/40 hover:border-emerald-400',
      glow: 'shadow-emerald-500/20',
      badge: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      btn: 'bg-emerald-500 hover:bg-emerald-400 shadow-emerald-500/40',
      selected: 'bg-emerald-500/20 border-emerald-500 text-emerald-300',
      unselected: 'bg-gray-800/60 border-gray-700 text-gray-400 hover:border-gray-500',
      dot: 'bg-emerald-400',
    },
    amber: {
      border: 'border-amber-500/40 hover:border-amber-400',
      glow: 'shadow-amber-500/20',
      badge: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
      btn: 'bg-amber-500 hover:bg-amber-400 shadow-amber-500/40',
      selected: 'bg-amber-500/20 border-amber-500 text-amber-300',
      unselected: 'bg-gray-800/60 border-gray-700 text-gray-400 hover:border-gray-500',
      dot: 'bg-amber-400',
    },
  }[accentColor] ?? {
    border: 'border-cyan-500/40 hover:border-cyan-400',
    glow: 'shadow-cyan-500/20',
    badge: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    btn: 'bg-cyan-500 hover:bg-cyan-400 shadow-cyan-500/40',
    selected: 'bg-cyan-500/20 border-cyan-500 text-cyan-300',
    unselected: 'bg-gray-800/60 border-gray-700 text-gray-400 hover:border-gray-500',
    dot: 'bg-cyan-400',
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative group bg-gray-900/80 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-500 cursor-default ${accent.border} ${
        hovered ? `shadow-2xl ${accent.glow} -translate-y-2` : 'shadow-lg'
      }`}
      style={{ transform: hovered ? 'translateY(-8px)' : 'translateY(0)', transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
    >
      {/* animated top glow line */}
      <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-current to-transparent transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'} text-${accentColor}-400`} />

      {/* pulsing dot */}
      <div className="flex items-center gap-2 mb-4">
        <span className={`relative flex h-2.5 w-2.5`}>
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${accent.dot} opacity-75`}></span>
          <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${accent.dot}`}></span>
        </span>
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Active</span>
        {product.badge && (
          <span className={`ml-auto text-xs font-bold px-2 py-0.5 rounded-full border ${accent.badge}`}>
            {product.badge}
          </span>
        )}
      </div>

      <h3 className="text-xl font-black text-white mb-1 tracking-wide">{product.name}</h3>
      <p className="text-gray-500 text-sm mb-5">Select your duration below</p>

      {/* duration selector */}
      <div className="grid grid-cols-2 gap-2 mb-6">
        {product.durations.map((d) => (
          <button
            key={d.label}
            onClick={() => setSelectedDuration(d)}
            className={`flex flex-col items-center gap-1 p-3 rounded-xl border text-sm font-semibold transition-all duration-200 ${
              selectedDuration.label === d.label ? accent.selected : accent.unselected
            }`}
          >
            <span className="flex items-center gap-1.5">
              {d.label === 'Lifetime' ? (
                <Infinity className="w-3.5 h-3.5" />
              ) : (
                <Clock className="w-3.5 h-3.5" />
              )}
              {d.label}
            </span>
            <span className="text-lg font-black">${d.price}</span>
          </button>
        ))}
      </div>

      {/* selected price display */}
      <div className="flex items-center justify-between mb-5">
        <span className="text-gray-400 text-sm">Selected</span>
        <div className="flex items-center gap-2">
          {selectedDuration.label === 'Lifetime' ? (
            <CheckCircle className="w-4 h-4 text-emerald-400" />
          ) : (
            <Clock className="w-4 h-4 text-gray-400" />
          )}
          <span className="text-white font-bold">{selectedDuration.label}</span>
          <span className="text-2xl font-black text-white">${selectedDuration.price}</span>
        </div>
      </div>

      <button
        onClick={() => onBuy(product, selectedDuration)}
        className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-gray-950 transition-all duration-300 shadow-lg ${accent.btn} hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]`}
      >
        <ShoppingCart className="w-4 h-4" />
        Buy Now — ${selectedDuration.price}
      </button>
    </div>
  );
}
