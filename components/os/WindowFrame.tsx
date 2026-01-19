'use client';

import React from 'react';
import Draggable from 'react-draggable';
import { Minus, X, Maximize2 } from 'lucide-react';
import { useOSStore, AppId } from '@/store/useOSStore';
import { motion, AnimatePresence } from 'framer-motion';

interface WindowFrameProps {
    id: AppId;
    title: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
    defaultPosition?: { x: number; y: number };
    width?: number | string;
    height?: number | string;
}

export default function WindowFrame({
    id,
    title,
    icon,
    children,
    defaultPosition = { x: 50, y: 50 },
    width = 600,
    height = 400
}: WindowFrameProps) {
    const { windows, closeWindow, minimizeWindow, focusWindow } = useOSStore();
    const windowState = windows[id];
    const nodeRef = React.useRef(null);

    if (!windowState.isOpen) return null;

    return (
        <AnimatePresence>
            {!windowState.isMinimized && (
                <Draggable
                    handle=".window-title-bar"
                    defaultPosition={defaultPosition}
                    onMouseDown={() => focusWindow(id)}
                    nodeRef={nodeRef}
                >
                    <motion.div
                        ref={nodeRef}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0, y: 200 }}
                        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                        className="absolute rounded-t-lg shadow-2xl overflow-hidden flex flex-col"
                        style={{
                            zIndex: windowState.zIndex,
                            width: width,
                            height: height,
                            backgroundColor: '#ECE9D8', // XP Window Background
                            border: '3px solid #0055EA', // XP Blue Border
                        }}
                    >
                        {/* Title Bar */}
                        <div
                            className="window-title-bar h-8 bg-gradient-to-r from-[#0058EE] to-[#3A93FF] flex justify-between items-center px-2 cursor-default select-none shadow-sm"
                            onDoubleClick={() => { }} // Could implement maximize?
                        >
                            <div className="flex items-center gap-2 text-white font-bold text-sm drop-shadow-md">
                                {icon && <span className="w-4 h-4">{icon}</span>}
                                <span className="tracking-wide text-shadow">{title}</span>
                            </div>

                            <div className="flex items-center gap-1">
                                <button
                                    onClick={(e) => { e.stopPropagation(); minimizeWindow(id); }}
                                    className="w-5 h-5 bg-[#2A65FF] hover:bg-[#1C51D6] rounded-[3px] flex items-center justify-center border border-white/40 shadow-inner group"
                                >
                                    <Minus size={12} className="text-white group-active:translate-y-[1px]" />
                                </button>
                                <button
                                    className="w-5 h-5 bg-[#2A65FF] hover:bg-[#1C51D6] rounded-[3px] flex items-center justify-center border border-white/40 shadow-inner group opacity-50 cursor-not-allowed"
                                >
                                    <Maximize2 size={10} className="text-white" />
                                </button>
                                <button
                                    onClick={(e) => { e.stopPropagation(); closeWindow(id); }}
                                    className="w-5 h-5 bg-[#E81123] hover:bg-[#C90C1B] rounded-[3px] flex items-center justify-center border border-white/40 shadow-inner group ml-1"
                                >
                                    <X size={12} className="text-white group-active:translate-y-[1px]" />
                                </button>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 overflow-auto bg-white p-1 pb-4 relative">
                            {/* Menu Bar Simulation */}
                            <div className="h-6 bg-[#ECE9D8] border-b border-[#D4D0C8] flex items-center px-2 gap-4 text-xs text-black mb-1">
                                <span className="hover:bg-[#316AC5] hover:text-white px-1 cursor-pointer">File</span>
                                <span className="hover:bg-[#316AC5] hover:text-white px-1 cursor-pointer">Edit</span>
                                <span className="hover:bg-[#316AC5] hover:text-white px-1 cursor-pointer">View</span>
                                <span className="hover:bg-[#316AC5] hover:text-white px-1 cursor-pointer">Help</span>
                            </div>

                            <div className="h-full overflow-y-auto p-4 font-sans text-black">
                                {children}
                            </div>
                        </div>
                    </motion.div>
                </Draggable>
            )}
        </AnimatePresence>
    );
}
