import React from "react";

const Header = () => {
    return (
        <div className="bg-gradient-to-r from-blue-200 to-blue-400 text-black p-6 shadow-md">
            <div className="max-w-6xl mx-30">
                <h1 className="text-2xl md:text-3xl font-bold">
                    0<sup>th</sup> PhD Research Symposium
                </h1>
                <p className="text-sm md:text-base mt-1">
                    (In conjunction with <strong>21<sup>st</sup> Conference – 2025</strong>)
                </p>
                <div className="mt-3 text-sm md:text-base font-medium">
                    <p><strong>8<sup>th</sup> - 11<sup>th</sup> January 2025</strong></p>
                    <p><strong>Venue:</strong> NITJ Conference Hall,</p>
                    <p>NITJ, Punjab, India</p>
                </div>
            </div>
        </div>
    );
};

export default Header;
