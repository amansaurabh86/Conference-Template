import React from "react";
import herobg from "../images/callPaperbg.jpeg";

const Header = () => {
    return (
        <div
            className="w-full bg-cover bg-center text-white p-12 text-center shadow-lg relative"
            style={{ backgroundImage: `url(${herobg})` }}
        >
            {/* Overlay for better text visibility */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-4">📢 Call for Papers</h2>
                <p className="text-lg font-semibold">
                    21<sup>st</sup> International Conference on Distributed Computing and Intelligent Technology
                </p>
                <p className="mt-2 text-md">08th - 11th January, 2025</p>
                <p className="font-bold mt-2">
                    Kalinga Institute of Industrial Technology <br />
                    Deemed to be University, Bhubaneswar, Odisha, India
                </p>
                <hr className="my-4 border-gray-300 opacity-50" />
                <p className="text-sm italic">
                    We invite researchers and practitioners to submit their original work in the areas of
                    Distributed Computing, Artificial Intelligence, Machine Learning, and more.
                </p>
            </div>
        </div>
    );
};

export default Header;
