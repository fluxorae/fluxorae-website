'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const Hero = ({ title, subtitle }: { title: string; subtitle: string }) => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10 text-center px-4"
            >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                    {title}
                </h1>
                <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto">
                    {subtitle}
                </p>
            </motion.div>
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1)_0%,rgba(2,6,23,1)_100%)]" />
        </section>
    );
};
