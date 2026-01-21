'use client';

import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: "Programming & Analytics",
        skills: ["Python (Pandas, NumPy, scikit-learn)", "PySpark", "Spark(scale)", "SQL (Advanced)", "Jupyter"]
    },
    {
        title: "ML & Experimentation",
        skills: ["Supervised/Unsupervised Learning", "Time-series Forecasting", "Feature Engineering", "A/B Testing", "MLflow", "Evidently"]
    },
    {
        title: "Data Engineering & Lakehouse",
        skills: ["Databricks (PySpark, Delta)", "Snowflake", "dbt", "Airflow/Prefect", "Kafka/Kinesis", "CDC (Debezium)"]
    },
    {
        title: "Data Quality & Governance",
        skills: ["Great Expectations", "Open Lineage", "Alation/Collibra"]
    },
    {
        title: "MLOps & Serving",
        skills: ["FastAPI", "Docker", "CI/CD (GitHub Actions)", "Datadog"]
    },
    {
        title: "BI & Visualization",
        skills: ["Tableau", "Power BI (DAX)", "Looker"]
    },
    {
        title: "Cloud Platforms",
        skills: ["AWS (S3, Lambda, Redshift, SageMaker)", "GCP (BigQuery)", "Azure (Synapse)"]
    }
];

export default function TechStack() {
    return (
        <section id="tech-stack" className="py-12 bg-black/40 h-full overflow-y-auto">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Tech Stack</h2>
                    <p className="text-gray-300">Tools and technologies making impact.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-colors"
                        >
                            <h3 className="text-xl font-bold text-blue-300 mb-4 border-b border-white/10 pb-2">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-black/30 text-gray-200 rounded-full text-sm border border-white/5 hover:border-blue-400/50 transition-colors cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
