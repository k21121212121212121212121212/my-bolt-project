import { Crosshair, Target, Zap, Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import type { Product, Duration } from '../App';

const products: Product[] = [
  {
    id: 'cod-aim-assist',
    name: 'Cod Aim Assist',
    category: 'chts',
    badge: 'BEST VALUE',
    durations: [
      { label: 'Lifetime', price: 25 },
    ],
  },
  {
    id: 'fortnite-ai-aim',
    name: 'Fortnite Ai Aim',
    category: 'chts',
    badge: 'AI POWERED',
    durations: [
      { label: 'Day', price: 5 },
      { label: 'Week', price: 15 },
      { label: 'Month', price: 35 },
    ],
  },
];

type Props = {
  onBuy: (product: Product, duration: Duration) => void;
};

export default function ChtsPage({ onBuy }: Props) {
  return (
    <main className="pt-24 pb-16 px-6">
      {/* hero */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
          <Star className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Advanced Cheats</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
          CHTS <span className="text-amber-400">PRODUCTS</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Next-gen AI-powered aim assistance tools. Dominate every match.
        </p>
      </div>

      {/* stats bar */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="grid grid-cols-3 gap-4 bg-gray-900/60 border border-gray-800 rounded-2xl p-5">
          {[
            { icon: Target, label: 'Aim Accuracy', value: '99%' },
            { icon: Zap, label: 'Low Latency', value: '<1ms' },
            { icon: Crosshair, label: 'Games Supported', value: '10+' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="text-center">
              <div className="flex justify-center mb-1">
                <Icon className="w-5 h-5 text-amber-400" />
              </div>
              <p className="text-white font-black text-xl">{value}</p>
              <p className="text-gray-500 text-xs font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* product grid */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-2">
          <Crosshair className="w-4 h-4" />
          Available Cheats
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {products.map((p, i) => (
            <ProductCard
              key={p.id}
              product={p}
              onBuy={onBuy}
              accentColor={i % 2 === 0 ? 'amber' : 'cyan'}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
