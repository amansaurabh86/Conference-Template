import React from "react";
import committeeInchargeData from "./CommitteeInchargeData";

const CommitteeIncharge = () => {
    return (
        <div className="flex justify-evenly items-center w-full">
            {committeeInchargeData.map((incharge, index) => (
                <div key={index} className="mt-6 text-center">
                    <h2 className="text-xl font-semibold text-gray-800">{incharge.role}</h2>
                    <img
                        src={incharge.image}
                        alt={incharge.role}
                        className="w-28 h-28 rounded-full mx-auto mt-3 shadow-md"
                    />
                    <p className="mt-2 font-medium text-gray-700">{incharge.name}</p>
                    <a href={`mailto:${incharge.email}`} className="text-blue-600 hover:underline">
                        {incharge.email}
                    </a>
                </div>
            ))}
        </div>
    );
};

export default CommitteeIncharge;
