import React from 'react';
import { ThemeData } from './ThemeData'; // Correctly import the data using curly braces

const Theme = () => {
    return (
        <div className="max-w-6xl mx-auto p-6">
            <h2 className="text-2xl font-bold  text-gray-900 mb-6">Hackathon Sub-Themes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ThemeData.map((theme) => (  // Use ThemeData (corrected)
                    <div key={theme.id} className="bg-white hover:shadow-lg transition-shadow rounded-lg p-4">
                        <div className="mb-4">
                            <h3 className="text-lg font-bold text-gray-800">Sub-Theme-{theme.id}</h3>
                            <h4 className="text-gray-700 font-semibold">{theme.title}</h4>
                        </div>
                        <div>
                            <ul className="space-y-3">
                                {theme.challenges.map((challenge, index) => (
                                    <li key={index} className="text-gray-600 leading-relaxed">
                                        • {challenge}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Theme;
