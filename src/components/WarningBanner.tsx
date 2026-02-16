import { AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const WarningBanner = () => {
    return (
        <div className="bg-brand text-black py-3 px-6 fixed top-0 left-0 right-0 overflow-hidden z-[120]">
            {/* Subtle moving noise/texture behind */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

            <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 relative z-10 text-center">
                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="hidden sm:block"
                >
                    <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                </motion.div>

                <p className="text-sm md:text-base font-bold tracking-tight uppercase italic leading-tight">
                    We have been made aware of a knock off "wheelie fun bike" website.
                    <span className="block lg:inline lg:ml-2">
                        This is the official website for the
                        <span className="inline-block px-2 py-0.5 bg-black text-brand mx-2 rounded font-black not-italic tracking-tighter shadow-xl transform skew-x-[-10deg]">
                            ORIGINAL WHEELIEFUN
                        </span>
                        BIKE
                    </span>
                </p>

                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    className="hidden sm:block"
                >
                    <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                </motion.div>
            </div>

            {/* Scanning light effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-1/2 -skew-x-[45deg]"
                animate={{ x: ['-200%', '300%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 2 }}
            />
        </div>
    );
};

export default WarningBanner;
