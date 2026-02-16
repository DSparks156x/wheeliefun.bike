import { useState } from 'react';
import { motion } from 'framer-motion';
import { Palette } from 'lucide-react';

const ColorCustomizer = () => {
    const [hue, setHue] = useState(0);

    return (
        <section id="personalization" className="py-24 bg-brand-darker relative overflow-hidden">
            {/* Background Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-5 select-none">
                <h2 className="text-[20vw] font-display font-black italic uppercase leading-none text-white whitespace-nowrap">
                    YOUR STYLE
                </h2>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center space-x-2 text-brand mb-4">
                        <Palette className="w-5 h-5" />
                        <span className="font-bold tracking-widest uppercase text-sm">Personalization</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-display font-black italic uppercase mb-6">
                        Very Existent <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-white">Personality.</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        With our advanced spectrum technology, you can choose any color as long as it's on the visible spectrum.
                        Slide to match your vibe. 420+ shades available.
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    {/* Bike Image Container */}
                    <div className="relative w-full max-w-2xl flex items-center justify-center mb-8">
                        {/* Glow effect behind the bike matching the hue */}
                        <div
                            className="absolute inset-0 blur-[80px] opacity-20 transition-colors duration-100"
                            style={{ backgroundColor: `hsl(${hue}, 100%, 50%)` }}
                        />

                        <motion.img
                            src="color_customizer_bike.png"
                            alt="Custom Color WheelieFunBike"
                            className="w-full h-auto drop-shadow-2xl relative z-10"
                            style={{ filter: `hue-rotate(${hue}deg)` }}
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        />
                    </div>

                    {/* Controls */}
                    <div className="w-full max-w-xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl relative z-20">
                        <div className="flex justify-between items-center mb-4">
                            <label className="text-white font-bold uppercase tracking-wider">Hue Shift</label>
                            <span className="font-mono text-brand">{hue}°</span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="360"
                            value={hue}
                            onChange={(e) => setHue(Number(e.target.value))}
                            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brand"
                        />
                        <div className="flex justify-between mt-2 text-xs text-gray-500 font-mono">
                            <span>0</span>
                            <span>90</span>
                            <span>180</span>
                            <span>270</span>
                            <span>360</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ColorCustomizer;
