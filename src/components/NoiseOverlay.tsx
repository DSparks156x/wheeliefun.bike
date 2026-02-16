import React from 'react';

const NoiseOverlay = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay overflow-hidden">
            <div className="absolute inset-[-200%] w-[400%] h-[400%] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] animate-noise opacity-100 brightness-100 contrast-150" />
        </div>
    );
};

export default NoiseOverlay;
