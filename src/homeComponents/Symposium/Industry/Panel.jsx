import React from "react";
import { panelData } from "./PanelData";

const Panel = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid md:grid-cols-2 gap-8">
                {panelData.map((panel, index) => (
                    <div key={index} className="border-b pb-4">
                        <h2 className="text-xl font-semibold text-blue-600">{panel.title}</h2>
                        <p className="text-gray-700 mt-2">{panel.description}</p>

                        {panel.points && (
                            <ul className="list-disc list-inside mt-2 text-gray-700">
                                {panel.points.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        )}

                        {panel.details && (
                            <div className="mt-2">
                                {panel.details.map((detail, idx) => (
                                    <p key={idx} className="text-gray-700">
                                        <span className="font-semibold">{detail.label} – </span>
                                        {detail.value}
                                    </p>
                                ))}
                            </div>
                        )}

                        {panel.additionalInfo && (
                            <p className="text-gray-700 mt-2">{panel.additionalInfo}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Panel

