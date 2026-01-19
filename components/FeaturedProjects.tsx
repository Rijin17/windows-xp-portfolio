'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

const projects = [
    {
        title: 'Fraud Detection Platform',
        description: 'Architected real-time risk monitoring pipelines using Databricks and Snowflake. Improved fraud detection accuracy by 20% and reduced false positives by 30%.',
        tags: ['PySpark', 'MLflow', 'Snowflake', 'dbt'],
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1600',
        github: 'https://github.com',
        demo: '#',
        featured: true,
    },
    {
        title: 'Transportation Analytics',
        description: 'Built analytics pipelines for logistics optimization. Reduced delivery costs by 10-12% and automated data ingestion with Airflow.',
        tags: ['Python', 'SQL', 'Redshift', 'Tableau'],
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1600',
        github: 'https://github.com',
        demo: '#',
        featured: false,
    },
    {
        title: 'Clinical Trial Dashboard',
        description: 'Automated ETL pipelines for clinical data. Reduced manual reporting effort by 40% and improved data integrity by 25%.',
        tags: ['SQL', 'Power BI', 'Python', 'ETL'],
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1600',
        github: 'https://github.com',
        demo: '#',
        featured: false,
    },
];

export default function FeaturedProjects() {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="text-blue-400 font-medium tracking-wider text-sm uppercase">Portfolio</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2">Featured Projects</h2>
                </motion.div>

                <div className="space-y-24">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-center`}
                        >
                            <div className="w-full lg:w-1/2 relative group">
                                <div className="absolute inset-0 bg-blue-500/10 rounded-2xl -rotate-1 group-hover:rotate-0 transition-transform duration-300" />
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="rounded-2xl shadow-2xl w-full object-cover aspect-video relative z-10 border border-white/10"
                                />
                            </div>

                            <div className="w-full lg:w-1/2">
                                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                    {project.title}
                                    {project.featured && (
                                        <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                                            Featured
                                        </span>
                                    )}
                                </h3>
                                <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors"
                                    >
                                        <Github size={18} /> Code
                                    </Link>
                                    <Link
                                        href={project.demo}
                                        target="_blank"
                                        className="flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full font-medium hover:bg-white/10 transition-colors"
                                    >
                                        <ExternalLink size={18} /> Live Demo
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
