import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

const BarPowerMeter = () => {
    const spring = useSpring(0, { stiffness: 100, damping: 10 });
    const width = useTransform(spring, (value) => `${Math.min(value / 6700 * 100, 100)}%`);
    const displayValue = useTransform(spring, (value) => Math.round(value));
    const [currentVal, setCurrentVal] = useState(0);

    useEffect(() => {
        const unsubscribe = displayValue.on("change", (v) => setCurrentVal(v));

        // Jitter loop
        const interval = setInterval(() => {
            const target = 6700 + (Math.random() - 0.5) * 1000; // Fluctuates between 6200 and 7200
            spring.set(target);
        }, 100);

        return () => {
            unsubscribe();
            clearInterval(interval);
        };
    }, [spring, displayValue]);

    return (
        <div className="w-full bg-brand-darker border border-white/10 p-6 rounded-lg">
            <div className="flex justify-between items-end mb-2">
                <span className="text-brand font-bold uppercase tracking-widest text-xs animate-pulse">Inst. Power</span>
                <span className="text-2xl font-display font-black italic text-white font-mono">
                    {currentVal}<span className="text-sm text-gray-400 not-italic ml-1">W</span>
                </span>
            </div>
            <div className="h-4 bg-black/50 rounded-full overflow-hidden relative">
                {/* Background grid lines */}
                <div className="absolute inset-0 grid grid-cols-10 gap-px pointer-events-none z-10">
                    {[...Array(9)].map((_, i) => (
                        <div key={i} className="border-r border-white/10 h-full col-span-1" />
                    ))}
                </div>

                <motion.div
                    className="h-full bg-gradient-to-r from-brand to-white"
                    style={{ width }}
                />
            </div>
            <div className="flex justify-between text-[10px] text-gray-500 font-mono mt-1">
                <span>0W</span>
                <span>3350W</span>
                <span>6700W</span>
            </div>
        </div>
    );
};

export default BarPowerMeter;
