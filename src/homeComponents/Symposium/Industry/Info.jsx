import React from "react";
import { infoData } from "./InfoData";

const IndusInfo = () => {
    return (
        <div className="container mx-auto p-6  rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{infoData.title}</h2>
            <div className="space-y-4">
                {infoData.description.map((paragraph, index) => (
                    <p key={index} className="text-gray-700">{paragraph}</p>
                ))}
            </div>
        </div>
    );
};

export default IndusInfo;
