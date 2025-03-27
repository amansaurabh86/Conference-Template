import React from "react";
import upcomingConferences from "../Data/ScheduleData";

const Schedule = () => {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center py-10">
            <section className="p-6 bg-white rounded-lg shadow-md max-w-4xl w-full">
                {/* Section Header */}
                <div className="border-b pb-2">
                    <button className="px-6 py-3 w-full text-center bg-[#327ab7] text-white font-semibold text-lg rounded-t-lg">
                        Upcoming Conferences
                    </button>
                </div>

                {/* Conference List */}
                <div className="mt-4 space-y-4">
                    {upcomingConferences.map((conf, index) => (
                        <div
                            key={index}
                            className="flex items-center bg-white shadow-sm rounded-lg p-4 border border-gray-300 transition hover:shadow-md"
                        >
                            {/* Date Box */}
                            <div className="bg-blue-600 text-white rounded-lg px-5 py-3 text-center w-20 flex flex-col justify-center items-center">
                                <div className="text-2xl font-bold">{conf.date}</div>
                                <div className="text-sm uppercase">{conf.month}</div>
                            </div>

                            {/* Conference Details */}
                            <div className="ml-5">
                                <h3 className="text-lg font-semibold text-gray-800">{conf.title}</h3>
                                {conf.location && (
                                    <p className="text-sm text-gray-600">{conf.location}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Schedule;
