import React from "react";
import { FaTrophy } from "react-icons/fa";

const Prize = () => {
    const prizes = [
        { position: "1st Prize", amount: "Rs. 15,000/-", color: "text-yellow-500" },
        { position: "2nd Prize", amount: "Rs. 10,000/-", color: "text-gray-400" },
        { position: "3rd Prize", amount: "Rs. 7,000/-", color: "text-yellow-700" },
    ];

    return (
        <div className="bg-blue-200 p-6 text-center ">
            <h2 className="text-2xl font-bold mb-4">Prize money</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
                {prizes.map((prize, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center w-64">
                        <FaTrophy className={`${prize.color} text-4xl mb-2`} />
                        <p className="text-lg font-bold">
                            {prize.position}: <span className="text-blue-600">{prize.amount}</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Prize;
