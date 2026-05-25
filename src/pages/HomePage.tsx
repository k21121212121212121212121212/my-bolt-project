import { Shield, Zap, Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import type { Product, Duration } from '../App';

const products: Product[] = [
  {
    id: 'perm-woofer',
    name: 'PERM WOOFER',
    category: 'spoofer',
    badge: 'POPULAR',
    durations: [
      { label: 'One Time', price: 25 },
      { label: 'Lifetime', price: 35 },
    ],
  },
  {
    id: 'fortnite-no-format',
    name: 'Fortnite No Format',
    category: 'spoofer',
    badge: 'HOT',
    durations: [
      { label: 'One Time', price: 25 },
      { label: 'Lifetime', price: 50 },
    ],
  },
];

type Props = {
  onBuy: (product: Product, duration: Duration) => void;
};

export default function HomePage({ onBuy }: Props) {
  return (
    <main className="pt-24 pb-16 px-6">
      {/* hero */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-6">
          <Star className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">HWID Spoofer Tools</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
          SPOOFER <span className="text-cyan-400">PRODUCTS</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Premium HWID spoofers with instant delivery. Undetected and reliable.
        </p>
      </div>

      {/* stats bar */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="grid grid-cols-3 gap-4 bg-gray-900/60 border border-gray-800 rounded-2xl p-5">
          {[
            { icon: Shield, label: 'Undetected', value: '100%' },
            { icon: Zap, label: 'Instant Delivery', value: '24/7' },
            { icon: Star, label: 'Satisfied Users', value: '2,500+' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="text-center">
              <div className="flex justify-center mb-1">
                <Icon className="w-5 h-5 text-cyan-400" />
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
          <Shield className="w-4 h-4" />
          Available Spoofers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {products.map((p, i) => (
            <ProductCard
              key={p.id}
              product={p}
              onBuy={onBuy}
              accentColor={i % 2 === 0 ? 'cyan' : 'emerald'}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
