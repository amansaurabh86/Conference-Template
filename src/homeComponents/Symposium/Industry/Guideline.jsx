import React from "react";
import { guidelineData } from "./GuidelineData";

const Guideline = () => {
    return (
        <div className="container mx-auto p-6 bg-white  shadow-md">
            <h2 className="text-2xl font-bold text-blue-700 border-b pb-2 mb-4">{guidelineData.title}</h2>
            <p className="text-gray-700 mb-4">{guidelineData.description}</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {guidelineData.topics.map((topic, index) => (
                    <li key={index} className="p-2 rounded-md">{topic}</li>
                ))}
            </ul>
            <p className="text-gray-700 mt-4">{guidelineData.submissionDetails}</p>
        </div>
    );
};

export default Guideline;
