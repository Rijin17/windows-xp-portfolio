'use client';

import { useOSStore, AppId } from '@/store/useOSStore';
import { User, Briefcase, Code2, Mail, Globe, Award, Settings, HelpCircle, Search, Play, Monitor, Folder } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function StartMenu() {
    const { isStartMenuOpen, toggleStartMenu, openWindow } = useOSStore();

    if (!isStartMenuOpen) return null;

    const handleAppClick = (id: AppId) => {
        openWindow(id);
        toggleStartMenu();
    };

    return (
        <AnimatePresence>
            {isStartMenuOpen && (
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 30, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="fixed bottom-[40px] left-0 z-[9990] w-[380px] rounded-t-lg shadow-2xl font-sans select-none"
                    style={{
                        boxShadow: '2px 0 10px rgba(0,0,0,0.5)',
                        borderTopLeftRadius: '8px',
                        borderTopRightRadius: '8px',
                        overflow: 'hidden'
                    }}
                >
                    {/* Header */}
                    <div className="h-16 bg-gradient-to-b from-[#1571CD] to-[#3C95E8] flex items-center px-2 gap-3 border-t-2 border-[#5AA8FA] border-x border-[#1C60B0]">
                        <div className="w-10 h-10 bg-white rounded-sm border-2 border-white/40 shadow-md flex items-center justify-center overflow-hidden">
                            <User className="text-[#0055EA] w-8 h-8 opacity-80" />
                        </div>
                        <span className="text-white font-bold text-lg drop-shadow-md">Rijin Stalin</span>
                    </div>

                    {/* Body */}
                    <div className="flex h-[400px] bg-white border-x border-[#1C60B0]">

                        {/* Left Column (Apps) */}
                        <div className="flex-1 bg-white p-1 flex flex-col gap-1">
                            <div className="flex flex-col gap-1 pb-2 border-b border-gray-300">
                                <MenuLink icon={<img src="/icons/internet.png" alt="Internet" className="w-8 h-8" />} title="Internet" subtitle="Internet Explorer" onClick={() => handleAppClick('internet')} bold />
                                <MenuLink icon={<img src="/icons/email.png" alt="Email" className="w-8 h-8" />} title="E-mail" subtitle="Outlook Express" onClick={() => handleAppClick('contact')} bold />
                            </div>

                            <div className="flex flex-col gap-1 pt-1 flex-1">
                                <MenuLink icon={<img src="/icons/computer.png" alt="Profile" className="w-8 h-8" />} title="My Profile" onClick={() => handleAppClick('profile')} />
                                <MenuLink icon={<img src="/icons/briefcase.png" alt="Experience" className="w-8 h-8" />} title="Work Experience" onClick={() => handleAppClick('experience')} />
                                <MenuLink icon={<img src="/icons/folder.png" alt="Projects" className="w-8 h-8" />} title="My Projects" onClick={() => handleAppClick('projects')} />
                                <MenuLink icon={<img src="/icons/documents.png" alt="Skills" className="w-8 h-8" />} title="Tech Stack" onClick={() => handleAppClick('skills')} />
                            </div>

                            <div className="h-8 flex items-center justify-center gap-1 border-t border-gray-300 hover:bg-[#2F71CD] hover:text-white cursor-pointer mt-auto">
                                <span className="font-bold text-sm">All Programs</span>
                                <Play size={10} className="fill-current" />
                            </div>
                        </div>

                        {/* Right Column (System) */}
                        <div className="w-[160px] bg-[#D3E5FA] border-l border-[#95BDEB] p-1 flex flex-col gap-1 py-2 text-[#00136B]">
                            <RightMenuLink icon={<Folder className="text-[#32527D]" />} title="My Documents" bold />
                            <RightMenuLink icon={<Folder className="text-[#32527D]" />} title="My Recent Documents" />
                            <RightMenuLink icon={<Folder className="text-[#32527D]" />} title="My Pictures" />
                            <RightMenuLink icon={<Folder className="text-[#32527D]" />} title="My Music" />
                            <RightMenuLink icon={<Monitor className="text-[#32527D]" />} title="My Computer" bold />

                            <div className="my-1 border-t border-[#A8C8EE] mx-2" />

                            <RightMenuLink icon={<Settings className="text-[#32527D]" />} title="Control Panel" />
                            <RightMenuLink icon={<Settings className="text-[#32527D]" />} title="Printers and Faxes" />

                            <div className="my-1 border-t border-[#A8C8EE] mx-2" />

                            <RightMenuLink icon={<HelpCircle className="text-[#32527D]" />} title="Help and Support" />
                            <RightMenuLink icon={<Search className="text-[#32527D]" />} title="Search" />
                            <RightMenuLink icon={<Play className="text-[#32527D]" />} title="Run..." />
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="h-10 bg-gradient-to-t from-[#1C5BB0] to-[#429CE9] flex items-center justify-end px-4 gap-4 border-b-2 border-[#1C5BB0] border-x border-[#1C60B0]">
                        <button className="flex items-center gap-1 text-white hover:text-white/80 active:translate-y-[1px]">
                            <span className="bg-[#DF943B] p-0.5 rounded shadow-sm border border-white/30"><Settings size={12} className="text-white" /></span>
                            <span className="text-sm">Log Off</span>
                        </button>
                        <button
                            className="flex items-center gap-1 text-white hover:text-white/80 active:translate-y-[1px]"
                            onClick={() => { toggleStartMenu(); window.location.reload(); }}
                        >
                            <span className="bg-[#D33D32] p-0.5 rounded shadow-sm border border-white/30"><Settings size={12} className="text-white" /></span>
                            <span className="text-sm">Turn Off Computer</span>
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

function MenuLink({ icon, title, subtitle, onClick, bold }: any) {
    return (
        <div
            className="flex items-center gap-2 p-1.5 hover:bg-[#316AC5] hover:text-white group cursor-pointer rounded-sm"
            onClick={(e) => { e.stopPropagation(); onClick?.(); }}
        >
            <div className="w-8 h-8 flex flex-shrink-0 items-center justify-center">
                {icon}
            </div>
            <div className="flex flex-col leading-tight">
                <span className={`text-sm ${bold ? 'font-bold' : ''}`}>{title}</span>
                {subtitle && <span className="text-xs text-gray-500 group-hover:text-white/80">{subtitle}</span>}
            </div>
        </div>
    );
}

function RightMenuLink({ icon, title, bold }: any) {
    return (
        <div className="flex items-center gap-2 p-1 hover:bg-[#316AC5] hover:text-white group cursor-pointer rounded-sm text-sm">
            <div className="w-5 h-5 flex flex-shrink-0 items-center justify-center opacity-70 group-hover:opacity-100">
                {icon}
            </div>
            <span className={`${bold ? 'font-bold' : ''}`}>{title}</span>
        </div>
    );
}
