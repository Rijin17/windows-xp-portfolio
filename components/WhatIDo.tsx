'use client';

import { motion } from 'framer-motion';
import { Brain, Database, BarChart3, ShieldCheck } from 'lucide-react';

const services = [
    {
        icon: <Brain className="w-8 h-8 text-blue-400" />,
        title: 'Machine Learning & AI',
        description: 'Developing predictive models for fraud detection, forecasting, and recommendations using PyTorch and Scikit-learn.',
    },
    {
        icon: <Database className="w-8 h-8 text-purple-400" />,
        title: 'Data Engineering',
        description: 'Architecting scalable ETL/ELT pipelines on Databricks and Snowflake with dbt and Airflow.',
    },
    {
        icon: <BarChart3 className="w-8 h-8 text-pink-400" />,
        title: 'Analytics & Visualization',
        description: 'Transforming complex data into executive-ready insights using Tableau, Power BI, and advanced SQL.',
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-green-400" />,
        title: 'MLOps & Governance',
        description: 'Implementing CI/CD for ML, drift monitoring, and data quality frameworks with Great Expectations and MLflow.',
    },
];

export default function WhatIDo() {
    return (
        <section id="what-i-do" className="py-20 bg-black/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">What I Do</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Leveraging cutting-edge technologies to solve complex problems and deliver tangible business value.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all group"
                        >
                            <div className="mb-6 p-4 rounded-xl bg-white/5 w-fit group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
