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
        <section id="experience" className="h-full bg-[#ECE9D8] overflow-y-auto p-8 font-[Tahoma,Verdana,sans-serif]">
            {/* Document Header */}
            <div className="max-w-4xl mx-auto mb-10 border-b border-[#A0A0A0] pb-4">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-black mb-2 flex items-center gap-3">
                        <Briefcase className="text-[#E68A00]" size={32} />
                        Work Experience
                    </h2>
                    <p className="text-[#222222]">My professional journey and career highlights.</p>
                </motion.div>
            </div>


            <div className="max-w-4xl mx-auto relative">
                {/* Timeline Line (Classic XP Blue) */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 h-full w-0.5 bg-[#9CB7E3]" />

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                            className={`relative flex items-center justify-between md:justify-normal ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Dot (XP Style) */}
                            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-2 border-[#316AC5] rounded-full z-10 box-content p-0.5 shadow-sm" />

                            {/* Spacer for desktop layout */}
                            <div className="hidden md:block w-5/12" />

                            {/* Content Card (Paper Style) */}
                            <div className="w-full md:w-5/12 pl-8 md:pl-0">
                                <div className="bg-white border-2 border-[#316AC5] p-6 rounded-sm shadow-[4px_4px_0_rgba(0,0,0,0.1)] relative group hover:shadow-[6px_6px_0_rgba(0,0,0,0.15)] transition-shadow">
                                    {/* Folded corner effect CSS could go here, keeping it simple for now */}
                                    <div className="flex items-center gap-2 text-[#316AC5] mb-2 text-sm font-bold uppercase tracking-wider">
                                        {exp.company}
                                    </div>
                                    <h3 className="text-xl font-bold text-black mb-1">{exp.role}</h3>
                                    <div className="flex items-center gap-2 text-[#444444] text-sm mb-4 font-medium">
                                        <Calendar size={14} />
                                        {exp.period}
                                    </div>
                                    <p className="text-black text-base leading-relaxed border-t border-[#E0E0E0] pt-3">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
