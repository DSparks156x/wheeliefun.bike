import React, { useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

const AnimatedCounter = ({ value, duration = 2, decimals = 0 }: { value: number, duration?: number, decimals?: number }) => {
    const spring = useSpring(0, { duration: duration * 1000, bounce: 0 });
    const display = useTransform(spring, (latest) => latest.toFixed(decimals));

    useEffect(() => {
        // Initial animation
        spring.set(value);

        // Continuous fluctuation (Brain-hurting mode)
        const interval = setInterval(() => {
            const jitter = (Math.random() - 0.5) * (value * 0.05); // 5% jitter
            spring.set(value + jitter);
        }, 200);

        return () => {
            clearInterval(interval);
        };
    }, [value, spring]);

    return <motion.span>{display}</motion.span>;
};

export default AnimatedCounter;
