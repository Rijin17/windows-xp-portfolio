'use client';

import { useState, useEffect } from 'react';
import { useOSStore } from '@/store/useOSStore';
import { motion, AnimatePresence } from 'framer-motion';
import { User } from 'lucide-react';

export default function BootSequence() {
    const { bootPhase, setBootPhase } = useOSStore();
    const [loadingProgress, setLoadingProgress] = useState(0);

    // BIOS Phase Logic
    const handleTurnOn = () => {
        setBootPhase('LOADING');
    };

    // Loading Phase Logic
    useEffect(() => {
        if (bootPhase === 'LOADING') {
            const interval = setInterval(() => {
                setLoadingProgress((prev) => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        setTimeout(() => setBootPhase('WELCOME'), 500);
                        return 100;
                    }
                    return prev + 2; // Adjust speed here
                });
            }, 50); // Speed of loading bar
            return () => clearInterval(interval);
        }
    }, [bootPhase, setBootPhase]);

    // Sound Effect
    useEffect(() => {
        if (bootPhase === 'WELCOME') {
            const audio = new Audio('https://www.myinstants.com/media/sounds/windows-xp-startup.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.error("Audio play failed", e));
        }
    }, [bootPhase]);


    if (bootPhase === 'DESKTOP') return null;

    return (
        <div className="fixed inset-0 z-[10000] bg-black font-mono text-white overflow-hidden select-none">
            <AnimatePresence mode="wait">

                {/* BIOS SCREEN */}
                {bootPhase === 'BIOS' && (
                    <motion.div
                        key="bios"
                        exit={{ opacity: 0 }}
                        className="w-full h-full flex flex-col items-center justify-center relative p-8"
                    >
                        <div className="absolute top-8 left-8 text-sm space-y-1 opacity-80">
                            <p>Award Modular BIOS v6.00PG, An Energy Star Ally</p>
                            <p>Copyright (C) 1984-2001, Award Software, Inc.</p>
                            <br />
                            <p>PENTIUM 4 CPU at 2.4GHz</p>
                            <p>Memory Test: 1048576K OK</p>
                            <br />
                            <p>Detecting IDE drives...</p>
                        </div>

                        <div className="flex flex-col items-center gap-8 mt-20">
                            <div className="border-4 border-white p-2">
                                <span className="text-xl font-bold bg-white text-black px-2">ENERGY STAR</span>
                            </div>

                            <button
                                onClick={handleTurnOn}
                                className="mt-12 px-8 py-4 border-2 border-white hover:bg-white hover:text-black transition-colors text-xl font-bold animate-pulse"
                            >
                                PRESS ENTER TO START SYSTEM
                            </button>
                        </div>

                        <div className="absolute bottom-4 left-4 text-xs text-gray-400">
                            Press DEL to enter SETUP
                            <br />
                            09/14/2001-i845-W83627Hf-6A69VPRBC-00
                        </div>
                    </motion.div>
                )}

                {/* LOADING SCREEN */}
                {bootPhase === 'LOADING' && (
                    <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="w-full h-full flex flex-col items-center justify-center bg-black"
                    >
                        <div className="flex flex-col items-center gap-8">
                            {/* Simulated XP Logo */}
                            <div className="flex items-start gap-4 mb-4">
                                <div className="grid grid-cols-2 gap-2 transform -skew-x-6">
                                    <div className="w-12 h-12 bg-[#F34F1C] rounded-sm shadow-[inset_-2px_-2px_6px_rgba(0,0,0,0.2)]"></div>
                                    <div className="w-12 h-12 bg-[#7FBA00] rounded-sm shadow-[inset_-2px_-2px_6px_rgba(0,0,0,0.2)]"></div>
                                    <div className="w-12 h-12 bg-[#05A6F0] rounded-sm shadow-[inset_-2px_-2px_6px_rgba(0,0,0,0.2)]"></div>
                                    <div className="w-12 h-12 bg-[#FFB900] rounded-sm shadow-[inset_-2px_-2px_6px_rgba(0,0,0,0.2)]"></div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-4xl font-sans font-bold text-white tracking-tighter">Microsoft</span>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-7xl font-sans font-bold text-white leading-none tracking-tighter">Windows</span>
                                        <span className="text-4xl font-sans font-bold text-[#F34F1C] transform -translate-y-4">XP</span>
                                    </div>
                                    <span className="text-2xl font-sans text-white/80 self-end tracking-widest">Professional</span>
                                </div>
                            </div>

                            {/* Loading Bar */}
                            <div className="w-64 h-4 border-2 border-gray-600 rounded-lg p-[2px] relative overflow-hidden">
                                <motion.div
                                    className="h-full bg-blue-500 w-[40px] shadow-[0_0_10px_#3B82F6]"
                                    animate={{ x: [-40, 260] }}
                                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                                />
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* WELCOME SCREEN */}
                {bootPhase === 'WELCOME' && (
                    <motion.div
                        key="welcome"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="w-full h-full bg-[#003399] relative overflow-hidden"
                    >
                        {/* Top/Bottom Bars */}
                        <div className="absolute top-0 w-full h-16 bg-gradient-to-r from-[#003399] via-[#6487DB] to-[#003399] border-b-2 border-[#F6851F]" />
                        <div className="absolute bottom-0 w-full h-16 bg-gradient-to-r from-[#003399] via-[#6487DB] to-[#003399] border-t-2 border-[#F6851F] flex items-center px-12 gap-6">
                            <button
                                className="flex items-center gap-2 text-white hover:bg-white/10 px-3 py-1 rounded transition-colors"
                                onClick={() => window.location.reload()} // Just resets for fun
                            >
                                <div className="w-8 h-8 bg-[#EF4444] rounded flex items-center justify-center">
                                    <div className="w-4 h-0.5 bg-white"></div>
                                </div>
                                <span className="font-sans font-bold text-lg">Turn Off Computer</span>
                            </button>
                        </div>

                        {/* Center Content */}
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="w-1/2 h-full flex flex-col items-end justify-center pr-8 border-r-2 border-white/20">
                                <div className="flex items-start gap-4 opacity-50 mb-32">
                                    {/* XP Logo again but smaller */}
                                    <div className="transform scale-75 origin-top-right">
                                        <span className="text-5xl font-sans font-bold text-white italic">Windows</span>
                                        <span className="text-3xl font-sans font-bold text-[#F34F1C] ml-2 transform -translate-y-2 inline-block">XP</span>
                                    </div>
                                </div>
                            </div>

                            <div className="w-1/2 h-full flex flex-col items-start justify-center pl-8">
                                <div
                                    className="flex items-center gap-4 group cursor-pointer"
                                    onClick={() => setBootPhase('DESKTOP')}
                                >
                                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded border-2 border-white group-hover:border-yellow-200 shadow-lg flex items-center justify-center">
                                        <User size={40} className="text-white drop-shadow-md" />
                                    </div>
                                    <div className="flex flex-col text-white">
                                        <span className="text-2xl font-bold font-sans group-hover:underline">Rijin Stalin</span>
                                        <span className="text-sm opacity-70">Administrator</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                )}

            </AnimatePresence>
        </div>
    );
}
