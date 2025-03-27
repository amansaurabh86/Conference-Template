import React from "react";

const Hero = () => {
    return (
        <div className="bg-gradient-to-r from-blue-200 to-blue-400 text-black p-6 rounded-lg shadow-md">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-2xl md:text-3xl font-bold">
                    Securing the Future: Lorem ipsum dolor sit amet.
                </h1>
                <hr className="my-4 border-black" />
                <p className="italic text-lg">
                    (0th Workshop, in conjunction with NITJ 2025)
                </p>
                <p className="text-lg font-bold mt-4">0th – 0th May, 2025</p>
                <div className="mt-6">
                    <p className="font-semibold">Organized by:</p>
                    <p className="font-bold">NITJ, Punjab, India</p>
                    <p className="font-bold">Nitj, Punjab, India</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
