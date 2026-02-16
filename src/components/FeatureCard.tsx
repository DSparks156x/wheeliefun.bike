import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';

interface FeatureCardProps {
    title: string;
    value: string | number;
    prefix?: string;
    suffix?: string;
    description: string;
    icon: React.ReactNode;
    delay?: number;
    animate?: boolean;
    decimals?: number;
}

const FeatureCard = ({ title, value, prefix = '', suffix = '', description, icon, delay = 0, animate = false, decimals = 0 }: FeatureCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className="p-8 border border-white/10 bg-brand-surface hover:border-brand/50 transition-colors group relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 text-brand">
                {icon}
            </div>

            <div className="text-brand font-bold uppercase tracking-widest text-sm mb-2">{title}</div>
            <div className="text-4xl md:text-5xl font-display font-black italic text-white mb-4 group-hover:text-glow-blue transition-all">
                {animate && typeof value === 'number' ? (
                    <>
                        {prefix}<AnimatedCounter value={value} decimals={decimals} />{suffix}
                    </>
                ) : (
                    <>
                        {prefix}{value}{suffix}
                    </>
                )}
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
                {description}
            </p>
        </motion.div>
    );
};

export default FeatureCard;
