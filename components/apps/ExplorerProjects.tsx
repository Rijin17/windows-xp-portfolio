'use client';

import React, { useState } from 'react';
import { Folder, ArrowLeft, ArrowRight, Search, LayoutGrid, List as ListIcon, ChevronDown, Monitor } from 'lucide-react';
import { AppId } from '@/store/useOSStore';

// Mock Project Data
const PROJECTS = [
    { id: 1, title: 'AI Resume Optimizer', type: 'Python Application', size: '2.4 MB', date: '10/24/2024' },
    { id: 2, title: 'Fraud Detection Pipeline', type: 'Data Pipeline', size: '15.2 MB', date: '09/15/2023' },
    { id: 3, title: 'E-commerce Forecasting', type: 'Jupyter Notebook', size: '840 KB', date: '01/12/2025' },
    { id: 4, title: 'Customer Churn Analysis', type: 'SQL Report', size: '12 KB', date: '11/05/2024' },
    { id: 5, title: 'Real-time Analytics Dashboard', type: 'React App', size: '5.1 MB', date: '08/30/2024' },
];

export default function ExplorerProjects() {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [selectedId, setSelectedId] = useState<number | null>(null);

    return (
        <div className="flex flex-col h-full bg-[#ECE9D8] font-sans text-xs">
            {/* Toolbar */}
            <div className="bg-[#ECE9D8] border-b border-[#D4D0C8] p-1 flex items-center gap-2">
                <div className="flex items-center gap-1 pr-2 border-r border-[#D4D0C8]">
                    <button className="p-1 hover:bg-[#B5B5B5]/40 rounded-full disabled:opacity-30"><ArrowLeft size={16} color="#555" /></button>
                    <button className="p-1 hover:bg-[#B5B5B5]/40 rounded-full disabled:opacity-30"><ArrowRight size={16} color="#555" /></button>
                    <button className="p-1 hover:bg-[#B5B5B5]/40 rounded-full"><Monitor size={16} color="#555" /></button>
                </div>

                <div className="flex items-center gap-2 px-2 bg-white border border-[#7F9DB9] flex-1 h-6">
                    <Folder size={14} className="text-[#E68A00]" />
                    <span className="text-gray-600">Address</span>
                    <input type="text" value="C:\My Documents\My Projects" readOnly className="flex-1 outline-none text-black" />
                    <ChevronDown size={12} />
                </div>

                <div className="flex items-center gap-1 pl-2 border-l border-[#D4D0C8]">
                    <button className="p-1 hover:bg-[#B5B5B5]/40 rounded-sm"><Search size={16} color="#555" /></button>
                    <button className="p-1 hover:bg-[#B5B5B5]/40 rounded-sm"><Folder size={16} color="#555" /></button>
                    <button
                        className={`p-1 hover:bg-[#B5B5B5]/40 rounded-sm ${viewMode === 'grid' ? 'bg-[#B5B5B5]/40' : ''}`}
                        onClick={() => setViewMode('grid')}
                    >
                        <LayoutGrid size={16} color="#555" />
                    </button>
                    <button
                        className={`p-1 hover:bg-[#B5B5B5]/40 rounded-sm ${viewMode === 'list' ? 'bg-[#B5B5B5]/40' : ''}`}
                        onClick={() => setViewMode('list')}
                    >
                        <ListIcon size={16} color="#555" />
                    </button>
                </div>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar (Common Tasks) */}
                <div className="w-[180px] bg-gradient-to-b from-[#7BA2CE] to-[#6375D6] p-3 flex flex-col gap-4 text-white overflow-y-auto">

                    {/* Panel 1 */}
                    <div className="bg-white/0 rounded overflow-hidden">
                        <div className="bg-gradient-to-r from-white/30 to-white/0 px-2 py-1 font-bold flex justify-between items-center cursor-pointer">
                            <span>Project Tasks</span>
                            <ChevronDown size={14} className="opacity-70" />
                        </div>
                        <div className="bg-[#D6DFF7] text-[#00136B] p-2 flex flex-col gap-1.5 border border-white/40">
                            <span className="hover:underline cursor-pointer flex items-center gap-1">• View project details</span>
                            <span className="hover:underline cursor-pointer flex items-center gap-1">• Run demo</span>
                            <span className="hover:underline cursor-pointer flex items-center gap-1">• Copy to floppy</span>
                        </div>
                    </div>

                    {/* Panel 2 */}
                    <div className="bg-white/0 rounded overflow-hidden">
                        <div className="bg-gradient-to-r from-white/30 to-white/0 px-2 py-1 font-bold flex justify-between items-center cursor-pointer">
                            <span>Details</span>
                            <ChevronDown size={14} className="opacity-70" />
                        </div>
                        <div className="bg-[#D6DFF7] text-[#00136B] p-3 border border-white/40 min-h-[100px]">
                            {selectedId ? (
                                <div className="flex flex-col gap-1">
                                    <span className="font-bold">{PROJECTS.find(p => p.id === selectedId)?.title}</span>
                                    <span>{PROJECTS.find(p => p.id === selectedId)?.type}</span>
                                    <span className="text-[10px] mt-2">Size: {PROJECTS.find(p => p.id === selectedId)?.size}</span>
                                </div>
                            ) : (
                                <span className="text-[10px]">Select an item to view its description.</span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 bg-white p-4 overflow-y-auto">
                    {viewMode === 'grid' ? (
                        <div className="grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] gap-4">
                            {PROJECTS.map((project) => (
                                <div
                                    key={project.id}
                                    onClick={() => setSelectedId(project.id)}
                                    className={`
                                        flex flex-col items-center gap-1 p-2 border border-transparent rounded-sm cursor-pointer group
                                        ${selectedId === project.id ? 'bg-[#316AC5] text-white border-[#316AC5] border-opacity-20' : 'hover:bg-[#E8F0FF] hover:border-[#E8F0FF]'}
                                    `}
                                >
                                    <div className="w-12 h-12 relative flex items-center justify-center">
                                        <img src="/icons/folder.png" alt="Folder" className="w-10 h-10 object-contain drop-shadow-sm" />
                                    </div>
                                    <span className="text-center leading-tight line-clamp-2 w-full break-words">
                                        {project.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="text-gray-500 border-b border-[#D4D0C8]">
                                    <th className="font-normal pl-2 pb-1">Name</th>
                                    <th className="font-normal pb-1">Type</th>
                                    <th className="font-normal pb-1">Size</th>
                                    <th className="font-normal pb-1">Date Modified</th>
                                </tr>
                            </thead>
                            <tbody>
                                {PROJECTS.map((project) => (
                                    <tr
                                        key={project.id}
                                        onClick={() => setSelectedId(project.id)}
                                        className={`cursor-pointer ${selectedId === project.id ? 'bg-[#316AC5] text-white' : 'hover:bg-[#E8F0FF] text-black'}`}
                                    >
                                        <td className="pl-2 py-0.5 flex items-center gap-2">
                                            <img src="/icons/folder.png" alt="Folder" className="w-4 h-4 object-contain" />
                                            {project.title}
                                        </td>
                                        <td>{project.type}</td>
                                        <td>{project.size}</td>
                                        <td>{project.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>

            {/* Status Bar */}
            <div className="bg-[#ECE9D8] border-t border-[#D4D0C8] px-2 py-0.5 text-black flex gap-4">
                <span>{PROJECTS.length} objects</span>
                {selectedId && <span>{PROJECTS.find(p => p.id === selectedId)?.size}</span>}
                <span className="flex-1"></span>
                <span>My Computer</span>
            </div>
        </div>
    );
}
