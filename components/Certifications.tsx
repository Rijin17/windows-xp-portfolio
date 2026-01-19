'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certifications = [
    {
        name: 'Databricks Certified Data Engineer Associate',
        issuer: 'Databricks',
        date: '2023',
        link: '#',
    },
    {
        name: 'Google Cloud Professional Data Engineer',
        issuer: 'Google Cloud',
        date: '2023',
        link: '#',
    },
    {
        name: 'Microsoft Certified: Azure Data Scientist Associate',
        issuer: 'Microsoft',
        date: '2022',
        link: '#',
    },
    {
        name: 'Snowflake SnowPro Core Certification',
        issuer: 'Snowflake',
        date: '2022',
        link: '#',
    },
];

export default function Certifications() {
    return (
        <section id="certifications" className="py-20 bg-black/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Certifications</h2>
                    <p className="text-gray-400">Continuous learning and professional validation.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
                        >
                            <Award className="w-8 h-8 text-yellow-500 shrink-0" />
                            <div>
                                <h3 className="font-bold text-lg leading-tight mb-1">{cert.name}</h3>
                                <p className="text-sm text-gray-400 mb-2">{cert.issuer}</p>
                                <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">
                                    Issued: {cert.date}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
