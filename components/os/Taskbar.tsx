'use client';

import { useOSStore, AppId } from '@/store/useOSStore';
import { useState, useEffect } from 'react';
import { Monitor } from 'lucide-react';
import StartMenu from './StartMenu';

export default function Taskbar() {
    const { windows, activeWindow, minimizeWindow, focusWindow, toggleStartMenu, isStartMenuOpen } = useOSStore();
    const [currentTime, setCurrentTime] = useState<Date | null>(null);

    useEffect(() => {
        setCurrentTime(new Date());
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const openWindows = Object.entries(windows).filter(([_, state]) => state.isOpen);

    return (
        <>
            {/* Full screen invisible overlay to close start menu when clicking outside */}
            {isStartMenuOpen && (
                <div
                    className="fixed inset-0 z-[9989]"
                    onClick={() => toggleStartMenu()}
                />
            )}

            <StartMenu />

            <div className="fixed bottom-0 w-full h-[40px] bg-[#245DDA] flex items-center z-[9999] border-t-2 border-[#386DEA] select-none">
                {/* Start Button */}
                <div
                    onClick={() => toggleStartMenu()}
                    className={`
                    h-full pl-0 pr-6 relative flex items-center cursor-pointer hover:brightness-110 active:brightness-90 transition-all rounded-r-[15px] overflow-hidden
                    ${isStartMenuOpen ? 'brightness-90 bg-[#16431C]' : ''}
                `}
                    style={{
                        background: isStartMenuOpen
                            ? 'linear-gradient(180deg, #2D6936 0%, #15451A 100%)' // Darker pushed state
                            : 'linear-gradient(180deg, #3C8747 0%, #1E5C26 5%, #1E5C26 80%, #15451A 100%)',
                        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3)',
                        borderRight: '1px solid #003613'
                    }}
                >
                    <div className="flex items-center gap-1.5 pl-2">
                        <div className="italic font-bold text-white text-lg drop-shadow-md flex items-center gap-1">
                            <span className="bg-white rounded-full p-0.5 w-[18px] h-[18px] flex items-center justify-center border border-[#1E5C26]">
                                <span className="grid grid-cols-2 gap-[1px]">
                                    <span className="w-1.5 h-1.5 bg-[#F34F1C]"></span>
                                    <span className="w-1.5 h-1.5 bg-[#7FBA00]"></span>
                                    <span className="w-1.5 h-1.5 bg-[#05A6F0]"></span>
                                    <span className="w-1.5 h-1.5 bg-[#FFB900]"></span>
                                </span>
                            </span>
                            start
                        </div>
                    </div>
                </div>

                {/* Quick Launch / Separator */}
                <div className="w-[2px] h-[80%] bg-[#082E94] mx-1 border-r border-[#4A7CEE]/40" />

                {/* Active Windows Tabs */}
                <div className="flex-1 flex items-center gap-1 px-1 overflow-x-auto">
                    {openWindows.map(([id, state]) => {
                        const appId = id as AppId;
                        const isActive = activeWindow === appId && !state.isMinimized;
                        return (
                            <button
                                key={id}
                                onClick={() => state.isMinimized || activeWindow !== appId ? focusWindow(appId) : minimizeWindow(appId)}
                                className={`
                    h-[28px] px-3 max-w-[160px] min-w-[120px] rounded-[3px] flex items-center gap-2 text-white text-xs whitespace-nowrap overflow-hidden
                    border border-opacity-40 shadow-sm transition-all
                    ${isActive
                                        ? 'bg-[#1E4EBF] border-[#0E2E7A] shadow-[inset_0_1px_3px_rgba(0,0,0,0.3)]'
                                        : 'bg-[#3C81F3] hover:bg-[#5390F5] border-[#2C62BB]'
                                    }
                `}
                            >
                                {/* Icon Placeholder */}
                                <div className="w-4 h-4 bg-white/20 rounded-sm" />
                                <span className="truncate">{id.charAt(0).toUpperCase() + id.slice(1)}</span>
                            </button>
                        );
                    })}
                </div>

                {/* System Tray */}
                <div className="h-full bg-[#0B96DE] px-3 flex items-center gap-3 border-l-2 border-[#12368C] shadow-[inset_2px_0_5px_rgba(0,0,0,0.2)]">
                    <Monitor size={16} className="text-white/80" />
                    <div className="text-white text-xs font-thin flex flex-col items-end leading-tight min-w-[50px]">
                        <span>{currentTime ? currentTime.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }) : ''}</span>
                    </div>
                </div>
            </div>
        </>
    );
}
