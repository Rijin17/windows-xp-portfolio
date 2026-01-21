'use client';

import React, { useState } from 'react';
import { RefreshCw, X, ArrowLeft, ArrowRight, Home, Search, Star, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useOSStore } from '../../store/useOSStore';

export default function InternetExplorer() {
    const [url, setUrl] = useState('www.rijin-stalin.com/portal');
    const { setWindowOpen, setWindowActive } = useOSStore();

    const openApp = (appId: string) => {
        setWindowOpen(appId as any, true);
        setWindowActive(appId as any);
    };

    return (
        <div className="flex flex-col h-full bg-[#ECE9D8] font-sans text-xs">
            {/* Menu Bar */}
            <div className="flex items-center gap-4 px-2 py-1 border-b border-[#D0D0D0] bg-[#ECE9D8]">
                <span>File</span>
                <span>Edit</span>
                <span>View</span>
                <span>Favorites</span>
                <span>Tools</span>
                <span>Help</span>
                <div className="ml-auto overflow-hidden">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-sm animate-pulse" />
                </div>
            </div>

            {/* Navigation Bar */}
            <div className="flex items-center gap-2 p-1 border-b border-[#D0D0D0] bg-[#ECE9D8]">
                <button className="p-1 hover:bg-black/10 rounded-full text-gray-400"><ArrowLeft size={20} /></button>
                <button className="p-1 hover:bg-black/10 rounded-full text-gray-400"><ArrowRight size={20} /></button>
                <div className="w-[1px] h-6 bg-gray-400 mx-1" />
                <button className="p-1 hover:bg-black/10 rounded-full"><RefreshCw size={18} /></button>
                <button className="p-1 hover:bg-black/10 rounded-full"><X size={18} /></button>
                <button className="p-1 hover:bg-black/10 rounded-full"><Home size={18} /></button>

                <div className="flex-1 flex items-center ml-2 relative">
                    <span className="text-[#666] mr-2">Address</span>
                    <div className="flex-1 bg-white border border-[#7F9DB9] flex items-center px-1 h-6">
                        <img src="/icons/internet.png" alt="ie" className="w-3 h-3 mr-2 opacity-50" />
                        <input
                            type="text"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            className="w-full text-xs outline-none font-sans"
                        />
                        <span className="text-gray-400">Go</span>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto bg-white border-t border-[#7F9DB9]">
                <div className="max-w-4xl mx-auto p-4 md:p-8">

                    {/* Hero Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-gradient-to-r from-[#3974CE] to-[#004696] text-white p-6 rounded-t-lg shadow-md mb-6"
                    >
                        <h1 className="text-2xl font-bold mb-2">Welcome to Rijin's Portal</h1>
                        <p className="text-sm opacity-90 leading-relaxed max-w-2xl">
                            Senior Data Scientist | Data Engineer | Analytics
                        </p>
                        <p className="text-xs opacity-70 mt-2">
                            Using data to drive product and operational excellence.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Sidebar: Navigation */}
                        <div className="md:col-span-1 space-y-4">
                            <div className="bg-[#F1F3F5] border border-[#E1E1E1] p-4 rounded-md">
                                <h3 className="font-bold text-[#003399] border-b border-[#ccc] pb-1 mb-2">Site Map</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <button onClick={() => openApp('profile')} className="text-blue-600 underline hover:text-red-500 text-left flex items-center gap-1">
                                            Read Full Profile
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => openApp('projects')} className="text-blue-600 underline hover:text-red-500 text-left flex items-center gap-1">
                                            View Projects
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => openApp('skills')} className="text-blue-600 underline hover:text-red-500 text-left flex items-center gap-1">
                                            Tech Stack & Tools
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => openApp('experience')} className="text-blue-600 underline hover:text-red-500 text-left flex items-center gap-1">
                                            Experience Timeline
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => openApp('contact')} className="text-blue-600 underline hover:text-red-500 text-left flex items-center gap-1">
                                            Contact Me
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Main Content: Highlights */}
                        <div className="md:col-span-2 space-y-4">
                            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-sm">
                                <h2 className="text-lg font-bold text-[#333] mb-2 flex items-center">
                                    <Star size={16} fill="orange" stroke="orange" className="mr-2" />
                                    Featured Content
                                </h2>
                                <p className="mb-2">
                                    Check out the <b>Tech Stack</b> app to see my proficiency in Python, Databricks, and Snowflake.
                                </p>
                                <p>
                                    Visit the <b>Experience</b> timeline to see my work history at GTE and Amazon.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white border p-3 hover:bg-gray-50 cursor-pointer" onClick={() => openApp('projects')}>
                                    <h4 className="font-bold text-blue-800 mb-1">Projects</h4>
                                    <p className="text-gray-500">Explore my data science and engineering portfolio.</p>
                                </div>
                                <div className="bg-white border p-3 hover:bg-gray-50 cursor-pointer" onClick={() => openApp('profile')}>
                                    <h4 className="font-bold text-blue-800 mb-1">My Resume</h4>
                                    <p className="text-gray-500">Read my professional summary and education.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Status Bar */}
            <div className="border-t border-[#7F9DB9] bg-[#ECE9D8] px-2 py-0.5 flex items-center justify-between text-[11px] text-[#333]">
                <div className="flex items-center gap-2">
                    <img src="/icons/internet.png" alt="ie" className="w-3 h-3 grayscale" />
                    <span>Done</span>
                </div>
                <div>Local Intranet</div>
            </div>
        </div>
    );
}
