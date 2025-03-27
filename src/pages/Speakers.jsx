import React from "react";
import speakers from "../Data/SpeakerData";

const Speakers = () => {
    return (
        <section className="p-8 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-bold text-center text-[#337ab7] mb-8">Meet Our Speakers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {speakers.map((speaker, index) => (
                    <a
                        key={index}
                        href={speaker.more_info}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block no-underline"
                    >
                        <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all cursor-pointer">
                            <img
                                src={speaker.image}
                                alt={speaker.name}
                                className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-[#337ab7]"
                            />
                            <h3 className="text-xl font-semibold mt-4">{speaker.name}</h3>
                            <p className="text-sm text-gray-600 italic">{speaker.title}</p>
                            <p className="mt-2 text-gray-700">{speaker.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Speakers;
