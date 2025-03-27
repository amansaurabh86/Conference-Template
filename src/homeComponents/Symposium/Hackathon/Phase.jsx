import React from 'react';
import { phaseData } from './PhaseData';

const Phase = () => {
    return (
        <div className="max-w-6xl mx-auto p-6">
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900">{phaseData.title}</h2>
                <p className="text-gray-700">{phaseData.description}</p>

                <div className="space-y-6 mt-4">
                    {phaseData.phases.map((phase) => (
                        <div key={phase.id} className="p-4 bg-blue-50 border-l-4 border-gray-900 rounded-lg">
                            <p className="text-xl font-semibold text-gray-900">{phase.title}</p>
                            <ul className="list-disc ml-4 space-y-2 text-gray-700">
                                {phase.details.map((detail, index) => (
                                    <li key={index}>
                                        {typeof detail === "string" ? (
                                            detail
                                        ) : Array.isArray(detail) ? (
                                            <ul className="ml-4 space-y-1 list-disc">
                                                {detail.map((subDetail, subIndex) => (
                                                    <li key={subIndex}>{subDetail}</li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <a
                                                href={detail.url}
                                                className="text-blue-600 hover:text-blue-800 underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {detail.text}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Judging Criteria Section */}
                <div className="mt-6 p-4 bg-blue-50 border-l-4 border-gray-900 rounded-lg">
                    <p className="font-semibold text-gray-900">{phaseData.judgingCriteria.title}</p>
                    <ul className="list-disc ml-4 text-gray-700">
                        {phaseData.judgingCriteria.criteria.map((criterion, index) => (
                            <li key={index}>{criterion}</li>
                        ))}
                    </ul>
                </div>

                {/* Note Section */}
                <div className="mt-6 p-4 bg-blue-50 border-l-4 border-gray-900 rounded-lg">
                    <p className="font-semibold text-gray-900">{phaseData.note.title}</p>
                    <p className="text-gray-700">{phaseData.note.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Phase;
