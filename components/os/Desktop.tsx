'use client';

import { useOSStore, AppId } from '@/store/useOSStore';
import WindowFrame from './WindowFrame';
import Taskbar from './Taskbar';
import { User, Briefcase, Code2, Mail, Globe, Award } from 'lucide-react';
import NotepadProfile from '../apps/NotepadProfile';
import ExplorerProjects from '../apps/ExplorerProjects';
import Experience from '../Experience';
import TechStack from '../TechStack';
import Contact from '../Contact';
import Certifications from '../Certifications';

// Application Definitions
// Application Definitions
const APPS = [
    { id: 'profile', title: 'My Profile', icon: <img src="/icons/computer.png" alt="My Computer" className="w-8 h-8 drop-shadow-md" />, component: <NotepadProfile /> },
    { id: 'experience', title: 'Experience', icon: <img src="/icons/briefcase.png" alt="briefcase" className="w-8 h-8 drop-shadow-md" />, component: <Experience /> },
    { id: 'projects', title: 'My Projects', icon: <img src="/icons/folder.png" alt="folder" className="w-8 h-8 drop-shadow-md" />, component: <ExplorerProjects /> },
    { id: 'skills', title: 'Tech Stack', icon: <img src="/icons/documents.png" alt="documents" className="w-8 h-8 drop-shadow-md" />, component: <TechStack /> },
    { id: 'internet', title: 'Internet', icon: <img src="/icons/internet.png" alt="internet" className="w-8 h-8 drop-shadow-md" />, component: <div className="p-4">External Links...</div> },
    { id: 'contact', title: 'Contact Me', icon: <img src="/icons/email.png" alt="email" className="w-8 h-8 drop-shadow-md" />, component: <Contact /> },
    { id: 'recycle', title: 'Recycle Bin', icon: <img src="/icons/recycle_bin.png" alt="recycle bin" className="w-8 h-8 drop-shadow-md" />, component: <div className="p-4">Recycle Bin Empty</div> },
];

export default function Desktop() {
    const { openWindow } = useOSStore();

    return (
        <div
            className="w-full h-screen overflow-hidden relative select-none font-sans"
            style={{
                backgroundImage: 'url("/wallpaper.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Desktop Icons Grid (Main Apps) */}
            <div className="absolute top-0 left-0 p-4 m-2 grid grid-flow-col grid-rows-[repeat(auto-fill,100px)] gap-6 z-0">
                {APPS.filter(app => app.id !== 'recycle').map((app) => (
                    <div
                        key={app.id}
                        onDoubleClick={() => openWindow(app.id as AppId)}
                        className="w-[80px] flex flex-col items-center gap-1 group cursor-pointer"
                    >
                        <div className="w-[48px] h-[48px] flex items-center justify-center drop-shadow-2xl transition-transform group-active:scale-95">
                            <div className="w-full h-full bg-contain bg-no-repeat relative">
                                <div className="w-full h-full flex items-center justify-center bg-white/10 rounded-lg border border-white/20 shadow-lg backdrop-blur-sm">
                                    {app.icon}
                                </div>
                            </div>
                        </div>
                        <span className="text-white text-xs text-center px-1 py-0.5 rounded-sm drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] group-hover:bg-[#0055EA]/40">
                            {app.title}
                        </span>
                    </div>
                ))}
            </div>

            {/* Recycle Bin (Bottom Right) */}
            <div className="absolute bottom-12 right-4 p-4 m-2 z-0">
                {APPS.filter(app => app.id === 'recycle').map((app) => (
                    <div
                        key={app.id}
                        onDoubleClick={() => openWindow(app.id as AppId)}
                        className="w-[80px] flex flex-col items-center gap-1 group cursor-pointer"
                    >
                        <div className="w-[48px] h-[48px] flex items-center justify-center drop-shadow-2xl transition-transform group-active:scale-95">
                            <div className="w-full h-full bg-contain bg-no-repeat relative">
                                <div className="w-full h-full flex items-center justify-center bg-white/10 rounded-lg border border-white/20 shadow-lg backdrop-blur-sm">
                                    {app.icon}
                                </div>
                            </div>
                        </div>
                        <span className="text-white text-xs text-center px-1 py-0.5 rounded-sm drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] group-hover:bg-[#0055EA]/40">
                            {app.title}
                        </span>
                    </div>
                ))}
            </div>

            {/* Windows Layer */}
            {APPS.map((app, index) => (
                <WindowFrame
                    key={app.id}
                    id={app.id as AppId}
                    title={app.title}
                    icon={app.icon}
                    defaultPosition={{ x: 100 + index * 30, y: 50 + index * 30 }}
                    width={app.id === 'projects' || app.id === 'experience' ? 900 : 700}
                    height={app.id === 'projects' || app.id === 'experience' ? 600 : 500}
                >
                    {app.component}
                </WindowFrame>
            ))}

            {/* Taskbar */}
            <Taskbar />
        </div>
    );
}
