import React from "react";
import committeeData from "../Data/CommitteeData";
import CommitteeIncharge from "../Data/CommitteeIncharge";

const Committee = () => {
    return (
        <div className="bg-gray-100 py-12 px-4 flex flex-col items-center">
            <h1 className="text-3xl font-bold text-center text-blue-600">Conference Committee</h1>

            {/* Committee Incharge Section */}
            <CommitteeIncharge />

            {/* Committee Details */}
            <div className="mt-8 bg-white p-8 rounded-lg shadow-md w-full max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {committeeData.map((committee, index) => (
                        <div key={index}>
                            <h3 className="text-lg font-semibold text-gray-900">{committee.title}</h3>
                            <ul className="mt-2 text-gray-700 text-sm leading-relaxed">
                                {committee.members.map((member, idx) => (
                                    <li key={idx}>{member}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Committee;