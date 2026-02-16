import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Battery, Zap, Disc, Gauge } from 'lucide-react';

const AccessoryItem = ({ title, price, description, icon, specs }: { title: string, price: string, description: string, icon: any, specs: string }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="bg-brand-darker border border-white/10 p-6 flex flex-col gap-4 group"
    >
        <div className="flex justify-between items-start">
            <div className="p-3 bg-brand/10 text-brand rounded-lg group-hover:bg-brand group-hover:text-black transition-colors">
                {icon}
            </div>
            <span className="font-mono text-brand text-sm">{price}</span>
        </div>

        <div>
            <h3 className="font-display font-black italic text-2xl uppercase mb-2">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>
            <div className="text-xs font-bold text-white/50 border-t border-white/10 pt-4 uppercase tracking-wider">
                {specs}
            </div>
        </div>

        <button className="mt-auto w-full py-3 border border-brand text-brand font-black uppercase hover:bg-brand hover:text-black transition-all text-sm tracking-wider skew-x-[-10deg]">
            <span className="block skew-x-[10deg]">Add to Build</span>
        </button>
    </motion.div>
);

const AccessoryGrid = () => {
    return (
        <section id="accessories" className="py-24 bg-brand-surface relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(204,255,0,0.05),transparent_50%)]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-5xl md:text-7xl font-display font-black italic uppercase mb-6 leading-none">
                            Fully <span className="text-brand">Stacked.</span><br />
                            <span className="text-stroke text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">Modular.</span>
                        </h2>
                        <p className="text-xl text-gray-400">
                            Customize your ride with our premium ecosystem of American-made parts.
                            Everything uses our proprietary 69-pin connector for instant plug-and-play performance.
                        </p>
                    </div>
                    <button className="px-8 py-4 bg-white text-black font-black uppercase tracking-wider hover:bg-brand hover:text-black transition-colors skew-x-[-10deg] shrink-0">
                        <span className="block skew-x-[10deg]">View All 420 Parts</span>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    <AccessoryItem
                        title="Stage 67 Battery"
                        price="$670.00"
                        description="Double your range with our extended lithium-ion pack. Features military-grade casing and thermal management."
                        specs="67V / 42.0Ah / 100% US Cells"
                        icon={<Battery />}
                    />
                    <AccessoryItem
                        title="Warp Motor"
                        price="$420.00"
                        description="Upgrade to the V2 hub motor. Silent, deadly, and capable of melting tires on command."
                        specs="6900W Peak / 420Nm Torque"
                        icon={<Zap />}
                    />
                    <AccessoryItem
                        title="Sticky Ickies"
                        price="$169.00"
                        description="Our proprietary rubber compound inspired by drag racing tech. Maximum grip for maximum send."
                        specs="14x4.20 inch / Soft Compound"
                        icon={<Disc />}
                    />
                    <AccessoryItem
                        title="Pro Controller"
                        price="$69.69"
                        description="Unlock the full potential of your bike. Bluetooth enabled for on-the-fly tuning via our app."
                        specs="690A Phase / Field Weakening"
                        icon={<Gauge />}
                    />
                </div>

                {/* Feature Layout */}
                <div className="bg-brand-darker border border-white/10 p-8 md:p-12 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand/20 to-transparent skew-x-[-20deg] translate-x-20 group-hover:translate-x-10 transition-transform duration-700" />

                    <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                        <div className="flex-1">
                            <div className="flex items-center space-x-2 text-brand mb-4">
                                <Plus className="w-5 h-5" />
                                <span className="font-bold tracking-widest uppercase text-sm">The Ecosystem</span>
                            </div>
                            <h3 className="text-4xl md:text-5xl font-display font-black italic uppercase mb-6">
                                Build Your <br />Dream rig.
                            </h3>
                            <p className="text-gray-400 mb-8 max-w-md">
                                Every WheelieFunBike V1 starts as a blank canvas.
                                With over 420 combinations of colors, parts, and tunes, you can verify your very existent personality.
                                Show them who you really are (a legend).
                            </p>
                            <ul className="space-y-4 mb-8">
                                {['Endless Color Schemes', 'Aerospace Grade Aluminum', 'Carbon Fiber Options'].map(item => (
                                    <li key={item} className="flex items-center text-white font-bold">
                                        <span className="w-2 h-2 bg-brand mr-4 rounded-full" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 w-full">
                            <img
                                src="accessories.png"
                                alt="Modular Parts Kit"
                                className="w-full h-auto drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AccessoryGrid;
