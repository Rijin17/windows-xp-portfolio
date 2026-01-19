'use client';

import { motion } from 'framer-motion';

const technologies = [
    'Python', 'SQL', 'PySpark', 'Databricks',
    'Snowflake', 'dbt', 'AWS', 'Tableau',
    'Power BI', 'Docker', 'Airflow', 'MLflow'
];

export default function TechStack() {
    return (
        <section id="tech-stack" className="py-20">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Tech Stack</h2>
                    <p className="text-gray-400">Technologies I work with to bring ideas to life.</p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-lg font-medium hover:bg-white/10 hover:border-blue-500/50 hover:text-blue-300 transition-all cursor-default"
                        >
                            {tech}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
