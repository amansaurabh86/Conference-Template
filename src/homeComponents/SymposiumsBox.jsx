import React from "react";
import { useNavigate } from "react-router-dom";
import boxData from "./SymposiumsBoxData";
import award from "../images/award.png";

const Box = () => {
    const navigate = useNavigate();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
            {boxData.map((item, index) => (
                <div
                    key={index}
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" }); // Scrolls to the top smoothly
                        navigate(item.path); // Navigates to the respective page
                    }}
                    className={`relative ${item.color} bg-opacity-90 text-white p-8 rounded-2xl shadow-xl 
                                transition-transform transform hover:scale-105 cursor-pointer`}
                >
                    {/* Animated Trophy Icon */}
                    <div className="absolute top-3 left-1/2 transform -translate-x-1/2  p-2">
                        <img src={award} className="w-10 h-10" alt="Award Icon" />
                    </div>

                    {/* Content */}
                    <div className="mt-7 text-center">
                        <h2 className="text-3xl font-extrabold">
                            {item.count}
                            <sup className="text-sm">th</sup>
                        </h2>
                        <p className="text-lg font-semibold mt-2">{item.title}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Box;
