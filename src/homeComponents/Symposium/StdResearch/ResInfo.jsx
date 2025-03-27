import React from "react";
import ResInfoData from "./ResInfoData";

const ResInfo = () => {
    return (
        <div className="p-6 bg-gray-100">
            <div className="max-w-4xl ml-30"> {/* Ensuring the same width as Hero */}
                <h2 className="text-2xl font-bold mb-6">Research Topics</h2>
                <div className="space-y-6">
                    {ResInfoData.map((topic, index) => (
                        <div key={index} className="p-4 bg-white shadow-md rounded-md">
                            <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
                            {topic.description ? (
                                <p className="text-gray-700">{topic.description}</p>
                            ) : (
                                <ul className="list-disc list-inside text-gray-700">
                                    {topic.guidelines.map((guideline, i) => (
                                        <li key={i}>{guideline}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ResInfo;
