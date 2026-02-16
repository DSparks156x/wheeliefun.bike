import { useState } from 'react';
import { motion } from 'framer-motion';
import { Power } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { BikeModel } from './BikeModel';

const WheelieButtonDemo = () => {
    const [isWheelie, setIsWheelie] = useState(false);

    const handlePress = () => {
        setIsWheelie(true);
    };

    const handleRelease = () => {
        setIsWheelie(false);
    };

    return (
        <section className="py-24 bg-brand-surface relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">

                {/* Interactive Bike Visual */}
                <div className="flex-1 w-full flex justify-center items-center relative min-h-[400px] md:min-h-[600px] bg-white/5 rounded-3xl overflow-hidden border border-white/10">
                    {/* Angle Indicator */}
                    <motion.div
                        animate={{ opacity: isWheelie ? 1 : 0 }}
                        className="absolute top-10 right-10 text-brand font-mono font-bold text-xl"
                    >
                        {isWheelie ? '45.0°' : '0.0°'}
                    </motion.div>

                    <Canvas shadows className="w-full h-full" style={{ position: 'absolute', top: 0, left: 0 }}>
                        <BikeModel isWheelie={isWheelie} />
                    </Canvas>
                </div>

                {/* Controls */}
                <div className="flex-1 text-left">
                    <div className="flex items-center space-x-2 text-brand mb-4">
                        <Power className={`w-5 h-5 ${isWheelie ? 'animate-pulse' : ''}`} />
                        <span className="font-bold tracking-widest uppercase text-sm">Mode: {isWheelie ? 'ACTIVE' : 'STANDBY'}</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-display font-black italic uppercase mb-6 leading-none">
                        Push Button. <br />
                        <span className="text-white">Get Vertical.</span>
                    </h2>

                    <p className="text-xl text-gray-400 mb-10 max-w-md">
                        Our proprietary IMU Stabilization Control monitors pitch 1000 times per second.
                        Just hold the button to lock into the perfect angle without looping out.
                    </p>

                    <div className="flex flex-col items-start gap-4">
                        <button
                            onMouseDown={handlePress}
                            onMouseUp={handleRelease}
                            onMouseLeave={handleRelease}
                            onTouchStart={handlePress}
                            onTouchEnd={handleRelease}
                            className={`
                    relative group px-10 py-6 font-black uppercase tracking-widest text-xl
                    transition-all duration-100 transform active:scale-95 skew-x-[-10deg]
                    ${isWheelie ? 'bg-brand text-brand-darker shadow-[0_0_40px_rgba(204,255,0,0.6)]' : 'bg-white text-black hover:bg-gray-100'}
                `}
                        >
                            <span className="block skew-x-[10deg] flex items-center gap-3">
                                {isWheelie ? 'WHEELIE ENGAGED' : 'HOLD TO WHEELIE'}
                            </span>
                        </button>
                        <p className="text-xs text-gray-500 font-mono uppercase tracking-widest mt-2 ml-2">
                            * Simulated Experience. Do not attempt without helmet.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WheelieButtonDemo;
