import React from 'react';
import workshopData from './Data'; // Corrected import

const Content = () => {
    const { about, resourcePerson, registration } = workshopData;

    return (
        <div className="max-w-6xl mx-auto space-y-6 pt-6">
            {/* About Section */}
            <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
                <h2 className="text-xl font-semibold text-black">{about.title}</h2>
                {about.description && <p className="text-black">{about.description}</p>}
            </div>

            {/* Resource Person Section */}
            <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
                <h2 className="text-xl font-semibold text-black">{resourcePerson.title}</h2>
                {resourcePerson.name && <h3 className="text-lg font-semibold">{resourcePerson.name}</h3>}
                {resourcePerson.credentials && <p className="text-black">{resourcePerson.credentials}</p>}
                <ul className="space-y-2 list-disc pl-5 text-black">
                    {[resourcePerson.experience, resourcePerson.education].filter(Boolean).map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
                {resourcePerson.achievement && <p className="text-black mt-4">{resourcePerson.achievement}</p>}
            </div>

            {/* Registration Section */}
            <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
                <h2 className="text-xl font-semibold text-black">{registration.title}</h2>
                {registration.details && (
                    <ul className="space-y-2 list-disc pl-5 text-black">
                        {registration.details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Content;
