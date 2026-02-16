import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
// Note: In a real scenario, we'd import the generated asset. 
// For now, I'll assume we have a placeholder or the generated file is placed in public.
// I will use a reliable placeholder for now if the local file isn't guaranteed to be in /public yet.
// However, I should try to use the generated one. I'll point to it assuming it's in the assets folder or I'll copy it later.
// For this step, I'll use a relative path and we can move the file in the next step.

const Hero = () => {
    return (
        <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-brand-darker">

            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-darker via-brand-darker/60 to-transparent z-10" />
                <motion.img
                    src="hero_bike_wheelie.png"
                    alt="Wheelie Fun Bike doing a wheelie"
                    className="w-full h-full object-cover object-center opacity-80"
                    animate={{ y: [0, -15, 0] }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-2xl"
                >
                    <div className="flex items-center space-x-2 text-brand mb-4">
                        <Zap className="fill-current w-5 h-5" />
                        <span className="font-bold tracking-widest uppercase text-sm">The Ultimate Wheelie Machine</span>
                    </div>

                    <h1 className="text-7xl md:text-8xl font-display font-black italic uppercase leading-none mb-6">
                        Pop It.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-secondary text-glow">Lock It.</span><br />
                        Send It.
                    </h1>

                    <p className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
                        The world's first e-bike designed specifically for wheelies.
                        Self-balancing technology meets 6700W of raw power.
                    </p>

                    <CountdownButton />
                </motion.div>
            </div>

            {/* Specs Ticker at bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur border-t border-white/10 z-20">
                <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { label: 'Top Speed', value: '67 MPH' },
                        { label: 'Range', value: '69 MILES' },
                        { label: 'Power', value: '6700W' },
                        { label: 'Software', value: 'V 4.20' },
                    ].map((spec) => (
                        <div key={spec.label}>
                            <div className="text-brand font-black text-2xl md:text-3xl font-display italic">{spec.value}</div>
                            <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">{spec.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CountdownButton = () => {
    const [targetDate, setTargetDate] = React.useState<Date>(new Date());
    const [timeLeft, setTimeLeft] = React.useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    // Function to generate a random date ~50 days out (+- 35)
    const generateRandomDate = () => {
        const baseDays = 50;
        const variance = 35;
        const randomDays = baseDays + (Math.random() * variance * 2 - variance);
        const now = new Date();
        const futureDate = new Date(now.getTime() + randomDays * 24 * 60 * 60 * 1000);
        return futureDate;
    };

    // Randomize target date every 10 seconds
    React.useEffect(() => {
        setTargetDate(generateRandomDate()); // Initial set
        const interval = setInterval(() => {
            setTargetDate(generateRandomDate());
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    // Update countdown timer every second
    React.useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            }
        }, 100); // Fast update
        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <button className="group bg-brand text-brand-darker px-8 py-4 font-black uppercase tracking-wider flex items-center gap-4 hover:bg-white transition-all hover:scale-105 skew-x-[-10deg] min-w-[300px]">
            <div className="text-left skew-x-[10deg]">
                <div className="text-xs font-bold opacity-70 mb-1">Estimated Post-Order</div>
                <div className="text-2xl font-mono leading-none">
                    {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                </div>
            </div>
            <ArrowRight className="w-8 h-8 group-hover:translate-x-1 transition-transform skew-x-[10deg] ml-auto" />
        </button>
    );
};

export default Hero;
