'use client';

import React from 'react';

export default function NotepadProfile() {
    return (
        <div className="font-mono text-sm leading-6 selection:bg-[#316AC5] selection:text-white">
            <p className="mb-4">
                Hi, my name is <span className="font-bold">Rijin Stalin</span>.
            </p>
            <p className="mb-4">
                I am a Data Scientist and Engineer.
            </p>
            <p className="mb-4">
                I specialize in building robust data pipelines, machine learning models, and scalable applications.
                My passion lies in transforming raw data into actionable insights and creating efficient, user-centric solutions.
            </p>
            <p className="mb-4">
                Currently, I am focused on exploring advanced AI agents and their application in modern software engineering.
            </p>
            <br />
            <p className="text-gray-500">
                -- End of file --
            </p>
        </div>
    );
}
