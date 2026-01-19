'use client';

import { useOSStore, AppId } from '@/store/useOSStore';
import WindowFrame from './WindowFrame';
import Taskbar from './Taskbar';
import { User, Briefcase, Code2, Mail, Globe, Award } from 'lucide-react';
import Hero from '../Hero';
import Experience from '../Experience';
import TechStack from '../TechStack';
import FeaturedProjects from '../FeaturedProjects';
import Contact from '../Contact';
import Certifications from '../Certifications';

// Application Definitions
const APPS = [
    { id: 'profile', title: 'My Profile', icon: <User className="text-[#2B60DE]" />, component: <Hero /> },
    { id: 'experience', title: 'Experience', icon: <Briefcase className="text-[#E68A00]" />, component: <Experience /> },
    { id: 'projects', title: 'My Projects', icon: <Code2 className="text-[#339933]" />, component: <FeaturedProjects /> },
    { id: 'skills', title: 'Tech Stack', icon: <Award className="text-[#A000A0]" />, component: <TechStack /> },
    { id: 'internet', title: 'Internet', icon: <Globe className="text-[#0099CC]" />, component: <div className="p-4">External Links...</div> },
    { id: 'contact', title: 'Contact Me', icon: <Mail className="text-[#CC3300]" />, component: <Contact /> },
];

export default function Desktop() {
    const { openWindow } = useOSStore();

    return (
        <div
            className="w-full h-screen overflow-hidden relative select-none font-sans"
            style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1506501139174-099022df5260?auto=format&fit=crop&q=80&w=2671")', // Bliss-like wallpaper
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Desktop Icons Grid */}
            <div className="absolute top-0 left-0 p-4 m-2 grid grid-flow-col grid-rows-[repeat(auto-fill,100px)] gap-6 z-0">
                {APPS.map((app) => (
                    <div
                        key={app.id}
                        onDoubleClick={() => openWindow(app.id as AppId)}
                        className="w-[80px] flex flex-col items-center gap-1 group cursor-pointer"
                    >
                        <div className="w-[48px] h-[48px] flex items-center justify-center drop-shadow-2xl transition-transform group-active:scale-95">
                            {/* Simulated Icon Art */}
                            <div className="w-full h-full bg-contain bg-no-repeat relative">
                                {/* Placeholder for actual XP icons, using Lucide for now but styled */}
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
