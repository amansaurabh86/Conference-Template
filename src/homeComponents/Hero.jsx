import React from "react";
import nitj3 from "../images/nitj3.jpg";

const Hero = () => {
    return (
        <header className="relative w-full bg-white shadow-md mb-7">
            {/* Background Image */}
            <img
                src={nitj3}
                alt="Conference Background"
                className="w-full h-[300px] brightness-40 object-cover"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
                <h2 className="text-4xl md:text-5xl font-bold">
                    0<sup>st</sup> NITJ Conference on <br /> Artifical Intelligence and Technology
                </h2>
                <p className="mt-4 text-lg font-bold">
                    Dr B R Ambedkar National Institute of Technology Jalandhar
                </p>
                <p className="mt-2 text-lg font-bold">
                    00<sup>th</sup> - 01<sup>th</sup> January, 2025
                </p>
            </div>
        </header>
    );
};

export default Hero;
