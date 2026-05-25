import { Shield, Crosshair, Zap } from 'lucide-react';

type Props = {
  activePage: 'home' | 'chts';
  setActivePage: (p: 'home' | 'chts') => void;
};

export default function Navbar({ activePage, setActivePage }: Props) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Zap className="w-8 h-8 text-cyan-400" />
            <div className="absolute inset-0 blur-md bg-cyan-400/30 rounded-full" />
          </div>
          <span className="text-xl font-black tracking-widest text-white uppercase">
            Apex<span className="text-cyan-400">Tools</span>
          </span>
        </div>

        <div className="flex items-center gap-2 bg-gray-900 rounded-xl p-1 border border-gray-800">
          <button
            onClick={() => setActivePage('home')}
            className={`flex items-center gap-2 px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
              activePage === 'home'
                ? 'bg-cyan-500 text-gray-950 shadow-lg shadow-cyan-500/30'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Shield className="w-4 h-4" />
            SPOOFER
          </button>
          <button
            onClick={() => setActivePage('chts')}
            className={`flex items-center gap-2 px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
              activePage === 'chts'
                ? 'bg-cyan-500 text-gray-950 shadow-lg shadow-cyan-500/30'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Crosshair className="w-4 h-4" />
            CHTS
          </button>
        </div>
      </div>
    </nav>
  );
}
