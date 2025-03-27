import React from 'react';

const Heading = () => {
    return (
        <div className="bg-gradient-to-r from-blue-200 to-blue-400 text-black p-6 rounded-lg shadow-md">
            <div className="max-w-6xl mx-28">
                <h1 className="text-2xl md:text-3xl font-bold">
                    15<sup>th</sup> Industry Symposium – 2025
                </h1>
                <p className="text-sm mt-1">Lorem ipsum dolor sit amet 1<sup>st</sup> NITJ-C – 2025</p>
                <div className="mt-3 text-sm md:text-base">
                    <p><strong>Date & Time:</strong> 8<sup>th</sup> January 2025, 09 AM</p>
                    <p><strong>Venue:</strong> Dr B R Ambedkar National Institute of Technology Jalandhar</p>
                    <p><strong>Location:</strong> JAlandhar, Punjab, India</p>
                </div>
                <div className="mt-4">
                    <button className="bg-blue-600 cursor-pointer hover:bg-blue-800 text-white px-4 py-2 rounded flex items-center gap-2 shadow-md">
                        Program Schedule
                        <span className="text-lg">📤</span>
                    </button>
                </div>
            </div>
            <div className="bg-teal-300 text-black p-3 mt-4 rounded-lg shadow-sm mx-auto w-[1230px]">
                <p className="font-semibold text-center">Theme: Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    );
};

export default Heading;
