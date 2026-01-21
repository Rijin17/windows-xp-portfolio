'use client';

import React from 'react';

export default function NotepadProfile() {
    return (
        <div className="font-mono text-sm leading-6 selection:bg-[#316AC5] selection:text-white p-1">
            <h1 className="font-bold text-lg mb-4">Rijin Stalin - Data Scientist</h1>

            <div className="mb-6">
                <p className="font-bold border-b border-gray-300 mb-2">Professional Summary</p>
                <div className="pl-2 space-y-2 text-gray-800">
                    <p>• Data Scientist with ~6 years across data science, data engineering, and analytics.</p>
                    <p>• Deliver applied ML in fraud, recommendations, forecasting, and operations, aligned to clear product/ops KPIs.</p>
                    <p>• End-to-end workflow: problem framing, data prep, modeling (scikit-learn/PyTorch), A/B testing, deployment (FastAPI/Docker), and monitoring (MLflow/Evidently).</p>
                    <p>• Build reliable pipelines on Databricks (PySpark/Delta/Unity Catalog) and Snowflake with dbt for transformations and documentation.</p>
                    <p>• Implement data quality and governance using Great Expectations, data contracts, and basic lineage/observability.</p>
                    <p>• Use SQL/Python daily; produce executive-ready insights with Power BI (DAX) and Tableau.</p>
                    <p>• Practice CI/CD with GitHub Actions and versioned artifacts; maintain runbooks and on-call procedures to meet SLOs.</p>
                    <p>• Experience in e-commerce/transportation logistics (Amazon) and financial services/risk (GTE).</p>
                    <p>• Work cross-functionally with Product, Engineering, and Operations; write clear documentation and mentor junior teammates.</p>
                    <p>• Primary focus as a Data Scientist; also experienced contributing as a Data Engineer or Senior Data Analyst.</p>
                    <p>• Developed predictive credit scoring and loss forecasting models across installment loans, revolving credit lines, and BNPL portfolios.</p>
                </div>
            </div>

            <div className="mb-6">
                <p className="font-bold border-b border-gray-300 mb-2">Education</p>
                <div className="pl-2 space-y-1">
                    <p>• Master’s in Business Analytics, St. Francis College</p>
                    <p>• Bachelor’s in Electronics and Communication Engineering</p>
                </div>
            </div>

            <div className="mb-6">
                <p className="font-bold border-b border-gray-300 mb-2">Certifications</p>
                <div className="pl-2 space-y-1">
                    <p>• Databricks Certified Data Engineer Associate</p>
                    <p>• Google Cloud Professional Data Engineer</p>
                    <p>• Microsoft Certified: Azure Data Scientist Associate</p>
                    <p>• Snowflake SnowPro Core Certification</p>
                </div>
            </div>

            <br />
            <p className="text-gray-400 text-xs text-center">
                -- End of file --
            </p>
        </div>
    );
}
