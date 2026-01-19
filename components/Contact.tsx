'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 rounded-3xl p-10 md:p-20 text-center relative overflow-hidden"
                >
                    {/* Background flourish */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -z-10" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] -z-10" />

                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Let&apos;s Work Together</h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
                        I&apos;m currently available for freelance projects and open to full-time opportunities.
                        If you have a project in mind or just want to say hi, feel free to reach out!
                    </p>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                        <Link
                            href="mailto:hello@example.com"
                            className="flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-100 transition-colors"
                        >
                            <Mail size={20} />
                            Say Hello
                        </Link>
                        <div className="flex items-center gap-2 text-gray-400 bg-white/5 px-6 py-4 rounded-full border border-white/10">
                            <MapPin size={20} />
                            Based in Philadelphia, PA (Open to Remote)
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
