import React from 'react';
import { speakerData } from './SpeakerData'; // ✅ Use named import

const Speaker = () => {
    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Keynote Speaker</h2>
            <div className="space-y-8">
                {speakerData.map((speaker, index) => ( // ✅ Use correct variable name
                    <div key={index} className="flex space-x-6 border-b pb-6">
                        <img src={speaker.image} alt={speaker.name} className="w-24 h-24 rounded-full object-cover" />
                        <div>
                            <h3 className="text-lg font-semibold text-green-600">{speaker.name}</h3>
                            <p className="text-gray-700 font-semibold">{speaker.designation}</p>
                            <p className="text-gray-600 mt-2">{speaker.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Speaker;
