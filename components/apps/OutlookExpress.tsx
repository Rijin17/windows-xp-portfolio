'use client';

import React, { useState } from 'react';
import { Mail, Send, Inbox, Trash2, FileText, User, Star, Paperclip, X } from 'lucide-react';

export default function OutlookExpress() {
    const [view, setView] = useState<'inbox' | 'compose'>('inbox');
    const [selectedMail, setSelectedMail] = useState<number | null>(0);

    const emails = [
        { id: 0, from: "Recruiter Assistant", subject: "Welcome to Rijin's Portfolio!", date: "Today", body: "Thanks for visiting! Feel free to browse the projects and check out the resume in the Internet Explorer app. Click 'New Mail' to send a message." },
        { id: 1, from: "FAQ Bot", subject: "Are you open to freelance?", date: "Yesterday", body: "Yes! Rijin is currently available for freelance projects and full-time opportunities. Use the contact form to discuss your project." },
        { id: 2, from: "System", subject: "Tech Stack Highlights", date: "Yesterday", body: "Rijin works with Python, SQL, Databricks, Snowflake, and AWS. Check out the 'Internet' app for the full list." }
    ];

    return (
        <div className="flex flex-col h-full bg-[#ECE9D8] font-sans text-xs">
            {/* Toolbar */}
            <div className="flex items-center gap-1 p-1 border-b border-[#D0D0D0]">
                <button
                    onClick={() => setView('compose')}
                    className="flex flex-col items-center px-3 py-1 hover:bg-white/50 border border-transparent hover:border-[#aaa] rounded-sm"
                >
                    <Mail size={24} className="text-[#333]" />
                    <span>New Mail</span>
                </button>
                <div className="w-[1px] h-8 bg-[#999] mx-1" />
                <button
                    onClick={() => setView('inbox')}
                    className="flex flex-col items-center px-3 py-1 hover:bg-white/50 border border-transparent hover:border-[#aaa] rounded-sm"
                >
                    <Inbox size={24} className="text-[#333]" />
                    <span>Inbox</span>
                </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex overflow-hidden">
                {/* Sidebar (Folders) */}
                <div className="w-40 bg-white border border-[#7F9DB9] m-1 mr-0 flex flex-col">
                    <div className="p-2 font-bold bg-[#E1E1E1] border-b border-[#ccc]">Local Folders</div>
                    <div className="flex-1 p-2 space-y-1">
                        <div onClick={() => setView('inbox')} className={`flex items-center gap-2 cursor-pointer px-2 py-1 ${view === 'inbox' ? 'bg-[#316AC5] text-white' : 'hover:bg-[#E1E1E1]'}`}>
                            <Inbox size={14} />
                            <span>Inbox (3)</span>
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer px-2 py-1 hover:bg-[#E1E1E1] text-gray-500">
                            <Send size={14} />
                            <span>Outbox</span>
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer px-2 py-1 hover:bg-[#E1E1E1] text-gray-500">
                            <FileText size={14} />
                            <span>Sent Items</span>
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer px-2 py-1 hover:bg-[#E1E1E1] text-gray-500">
                            <Trash2 size={14} />
                            <span>Deleted</span>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex-1 flex flex-col m-1">

                    {view === 'inbox' ? (
                        <>
                            {/* Mail List */}
                            <div className="h-1/2 bg-white border border-[#7F9DB9] mb-1 overflow-y-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-[#ECE9D8] sticky top-0">
                                        <tr>
                                            <th className="border-r border-b px-2 py-1 font-normal w-6">!</th>
                                            <th className="border-r border-b px-2 py-1 font-normal w-6">@</th>
                                            <th className="border-r border-b px-2 py-1 font-normal w-1/4">From</th>
                                            <th className="border-r border-b px-2 py-1 font-normal">Subject</th>
                                            <th className="border-b px-2 py-1 font-normal w-24">Received</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {emails.map((mail) => (
                                            <tr
                                                key={mail.id}
                                                onClick={() => setSelectedMail(mail.id)}
                                                className={`cursor-pointer ${selectedMail === mail.id ? 'bg-[#316AC5] text-white' : 'hover:bg-gray-50 odd:bg-white even:bg-gray-50'}`}
                                            >
                                                <td className="px-2 py-0.5 border-r border-[#eee] text-center"><Mail size={10} fill={selectedMail === mail.id ? "white" : "#aaa"} /></td>
                                                <td className="px-2 py-0.5 border-r border-[#eee] text-center"><Paperclip size={10} className="opacity-0" /></td>
                                                <td className="px-2 py-0.5 border-r border-[#eee] truncate">{mail.from}</td>
                                                <td className="px-2 py-0.5 border-r border-[#eee] truncate">{mail.subject}</td>
                                                <td className="px-2 py-0.5">{mail.date}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Preview Pane */}
                            <div className="flex-1 bg-white border border-[#7F9DB9] p-4 overflow-y-auto">
                                {selectedMail !== null ? (
                                    <div>
                                        <div className="bg-[#ECE9D8] p-2 mb-4 border-b border-[#ccc]">
                                            <h3 className="font-bold text-lg mb-1">{emails[selectedMail].subject}</h3>
                                            <div className="text-[#555]">From: <span className="text-black">{emails[selectedMail].from}</span></div>
                                        </div>
                                        <p className="text-sm leading-relaxed">{emails[selectedMail].body}</p>
                                    </div>
                                ) : (
                                    <div className="h-full flex items-center justify-center text-gray-400">Select an email to preview</div>
                                )}
                            </div>
                        </>
                    ) : (
                        /* Compose View (Contact Form) */
                        <div className="flex-1 bg-white border border-[#7F9DB9] flex flex-col p-4">
                            <div className="flex items-center justify-between mb-4 border-b pb-2">
                                <h2 className="text-xl font-bold flex items-center gap-2"><Mail size={20} /> New Message</h2>
                                <button onClick={() => setView('inbox')} className="hover:bg-red-100 p-1 rounded"><X size={16} color="red" /></button>
                            </div>

                            <form className="flex flex-col gap-3 h-full">
                                <div className="flex items-center gap-2">
                                    <label className="w-16 text-right text-gray-600">To:</label>
                                    <div className="flex-1 px-2 py-1 bg-gray-100 border border-gray-300">Rijin Stalin &lt;rijinstal365@gmail.com&gt;</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <label className="w-16 text-right text-gray-600">From:</label>
                                    <input type="email" placeholder="your.email@example.com" className="flex-1 px-2 py-1 border border-gray-300 focus:outline-none focus:border-blue-400" required />
                                </div>
                                <div className="flex items-center gap-2">
                                    <label className="w-16 text-right text-gray-600">Subject:</label>
                                    <input type="text" placeholder="Project Inquiry..." className="flex-1 px-2 py-1 border border-gray-300 focus:outline-none focus:border-blue-400" required />
                                </div>

                                <textarea className="flex-1 mt-2 p-3 border border-gray-300 resize-none focus:outline-none focus:border-blue-400 font-sans" placeholder="Type your message here..."></textarea>

                                <div className="flex justify-end gap-2 mt-2">
                                    <button type="button" onClick={() => setView('inbox')} className="px-4 py-1 border border-gray-400 bg-[#ECE9D8] hover:bg-[#E0E0E0]">Cancel</button>
                                    <button type="submit" className="px-4 py-1 border border-[#003C74] bg-[#ECE9D8] hover:bg-white flex items-center gap-2 shadow-sm font-bold">
                                        <Send size={14} /> Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                </div>
            </div>

            {/* Status Bar */}
            <div className="px-2 py-0.5 border-t border-[#ccc] text-gray-500">
                {view === 'inbox' ? '3 message(s), 0 unread' : 'Composing...'}
            </div>
        </div>
    );
}
