import React from "react";
import { panelistData } from "./PanelistData";

const Panelist = () => {
    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Panelist</h2>
            <div className="space-y-8">
                {panelistData.map((panelist, index) => (
                    <div key={index} className="flex space-x-6 border-b pb-6">
                        <img
                            src={panelist.image}
                            alt={panelist.name}
                            className="w-24 h-24 rounded-full object-cover"
                        />
                        <div>
                            <h3 className="text-lg font-semibold text-green-600">{panelist.name}</h3>
                            <p className="text-gray-700 font-semibold">{panelist.designation}</p>
                            <p className="text-gray-600 mt-2">{panelist.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Panelist;
