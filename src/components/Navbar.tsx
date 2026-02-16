import { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className="bg-brand-darker/90 backdrop-blur-md py-4 relative z-50 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-display font-black italic tracking-tighter text-white">
          WHEELIE<span className="text-brand">FUN</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {['BIKE', 'FEATURES', 'ACCESSORIES', 'PERSONALIZATION', 'SUPPORT'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-bold tracking-wide hover:text-brand transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA & Cart */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="relative group">
            <ShoppingBag className="w-6 h-6 hover:text-brand transition-colors" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand text-brand-darker text-[10px] font-bold flex items-center justify-center rounded-full">
              0
            </span>
          </button>
          <button className="bg-brand text-brand-darker px-6 py-2.5 font-black uppercase text-sm tracking-wider hover:bg-white transition-colors skew-x-[-10deg]">
            <span className="block skew-x-[10deg]">Order Now</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-darker border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {['BIKE', 'FEATURES', 'ACCESSORIES', 'PERSONALIZATION', 'SUPPORT'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-xl font-bold hover:text-brand"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full bg-brand text-brand-darker py-3 font-black uppercase mt-4">
                Order Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
