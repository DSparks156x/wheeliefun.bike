import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureCard from './components/FeatureCard';
import WheelieButtonDemo from './components/WheelieButtonDemo';
import AccessoryGrid from './components/AccessoryGrid';
import ColorCustomizer from './components/ColorCustomizer';
import BarPowerMeter from './components/BarPowerMeter';
import { Gauge, Battery, Zap, Crosshair } from 'lucide-react';

// Simple Footer Component
const Footer = () => (
  <footer className="bg-brand-darker border-t border-white/10 py-12">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
      <div className="text-2xl font-display font-black italic tracking-tighter text-white mb-4 md:mb-0">
        WHELIE<span className="text-brand">FUN</span>
      </div>
      <div className="text-gray-500 text-sm text-right">
        © 2026 WheelieFunBike, A CowPowerCompany. Designed in San Fransisco Bay, Xiaomi, China.
      </div>
    </div>
  </footer>
);

import NoiseOverlay from './components/NoiseOverlay';
import GlitchText from './components/GlitchText';

// ... (Footer remains same)

function App() {
  return (
    <div className="min-h-screen bg-brand-darker text-white selection:bg-brand selection:text-black">
      <NoiseOverlay />
      <Navbar />

      <main>
        <Hero />

        {/* Features Section */}
        <section id="features" className="py-24 bg-brand-surface relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16 text-center">
              <h2 className="text-5xl md:text-7xl font-display font-black italic uppercase mb-6">
                Specs That <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-white"><GlitchText text="Kill." /></span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureCard
                title="Top Speed"
                value={67}
                suffix=" MPH"
                description="Tear up the asphalt with a high-torque hub motor designed for instant acceleration."
                icon={<Gauge className="w-8 h-8" />}
                delay={0.1}
                animate={true}
              />
              <FeatureCard
                title="Range"
                value={69}
                suffix=" Miles"
                description="Go further with our high-density 69V battery pack. Swap in seconds."
                icon={<Battery className="w-8 h-8" />}
                delay={0.2}
                animate={true}
              />
              <FeatureCard
                title="Motor"
                value={6700}
                suffix="W"
                description="Peak power output that delivers wheelie-popping torque on demand."
                icon={<Zap className="w-8 h-8" />}
                delay={0.3}
                animate={true}
              />
              <FeatureCard
                title="Control"
                value={4.20}
                prefix="V "
                description="Advanced VESC-based firmware. 690hz refresh rate for perfect balance and total tunability."
                icon={<Crosshair className="w-8 h-8" />}
                delay={0.4}
                animate={true}
                decimals={2}
              />
            </div>
          </div>
        </section>

        <WheelieButtonDemo />

        {/* Design / Side Profile Section */}
        <section id="bike" className="py-24 bg-brand-darker relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand/5 skew-x-[-20deg] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="flex-1 text-right">
              <h2 className="text-5xl md:text-6xl font-display font-black italic uppercase mb-6 leading-tight">
                American <br />
                <span className="text-brand"><GlitchText text="Muscle." /></span>
              </h2>
              <p className="text-xl text-gray-400 mb-6 ml-auto max-w-md">
                Hand-welded in the USA. Our robotic TIG welding process ensures perfect beads every time.
                Finished with 67 layers of custom powder coat for a finish that lasts 420 years.
              </p>

              <div className="mb-8 ml-auto max-w-sm">
                <BarPowerMeter />
              </div>

              <div className="flex justify-end gap-4">
                <div className="text-right">
                  <div className="text-3xl font-black text-white">69V</div>
                  <div className="text-xs text-brand font-bold uppercase">System</div>
                </div>
                <div className="w-px h-12 bg-white/20" />
                <div className="text-right">
                  <div className="text-3xl font-black text-white">420%</div>
                  <div className="text-xs text-brand font-bold uppercase">More Fun</div>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <img
                src="bike_muscle.png"
                alt="Angled View of WheelieFunBike"
                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(204,255,0,0.15)]"
              />
            </div>
          </div>
        </section>

        <AccessoryGrid />

        <ColorCustomizer />

      </main>

      <Footer />
    </div>
  );
}

export default App;
