import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

const AnimatedCounter = ({ value, duration = 2, decimals = 0 }: { value: number, duration?: number, decimals?: number }) => {
    const spring = useSpring(0, { duration: duration * 1000, bounce: 0 });
    const display = useTransform(spring, (latest) => latest.toFixed(decimals));
    const [displayValue, setDisplayValue] = useState<string | number>(0);

    useEffect(() => {
        const unsubscribe = display.on("change", (v) => {
            setDisplayValue(v);
        });

        // Initial animation
        spring.set(value);

        // Continuous fluctuation (Brain-hurting mode)
        const interval = setInterval(() => {
            const jitter = (Math.random() - 0.5) * (value * 0.05); // 5% jitter
            spring.set(value + jitter);
        }, 200);

        return () => {
            unsubscribe();
            clearInterval(interval);
        };
    }, [value, spring, display]);

    return <span>{displayValue}</span>;
};

export default AnimatedCounter;
