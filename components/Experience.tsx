'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
    {
        role: 'Data Scientist',
        company: 'GTE',
        period: 'Jan 2024 - Present',
        description: 'Architecting ML and data pipelines for real-time risk monitoring and fraud detection. Improved fraud detection accuracy by 20% and cut forecasting latency by 45% using Databricks and Snowflake.',
    },
    {
        role: 'Data Analyst',
        company: 'Amazon Development Center',
        period: 'Sep 2018 - Aug 2022',
        description: 'Built analytics pipelines to optimize logistics network performance. Reduced delivery costs by 10-12% and automated reporting to save 40% manual effort.',
    },
    {
        role: 'Data Analyst / Intern',
        company: 'Syneos Health',
        period: 'Nov 2017 - May 2018',
        description: 'Automated ETL pipelines and dashboards for clinical trial data quality. Reduced manual reporting effort by 40% and improved data integrity by 25%.',
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-black/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Work Experience</h2>
                    <p className="text-gray-400">My professional journey and career highlights.</p>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 h-full w-0.5 bg-gradient-to-b from-blue-500/50 to-purple-500/50" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className={`relative flex items-center justify-between md:justify-normal ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Dot */}
                                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black border-2 border-blue-500 rounded-full z-10 box-content p-0.5" />

                                {/* Spacer for desktop layout */}
                                <div className="hidden md:block w-5/12" />

                                {/* Content Card */}
                                <div className="w-full md:w-5/12 pl-8 md:pl-0">
                                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                                        <div className="flex items-center gap-2 text-blue-400 mb-2 text-sm font-medium">
                                            <Briefcase size={16} />
                                            {exp.company}
                                        </div>
                                        <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                                        <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                                            <Calendar size={14} />
                                            {exp.period}
                                        </div>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
