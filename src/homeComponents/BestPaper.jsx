import React from "react";
import { useNavigate } from "react-router-dom";
import bestPapers from "./BestPaperData";

const BestPaper = () => {
    const navigate = useNavigate();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mt-10 w-full max-w-[1290px] mx-auto">
            {bestPapers.map((paper, index) => (
                <div
                    key={index}
                    className="bg-gradient-to-b from-blue-50 to-blue-100 p-8 rounded-2xl shadow-md w-full 
                    text-center border border-blue-200 hover:to-blue-400 transition-all duration-300 
                    hover:scale-105 hover:shadow-lg cursor-pointer"
                    onClick={() => navigate("/paperlogin")} // ✅ Navigates on click
                >
                    <h2 className="text-xl font-bold text-blue-800">{paper.track}</h2>
                    <p className="mt-3 font-semibold text-gray-700">
                        <span className="text-gray-900">Author Name :</span> {paper.authors}
                    </p>
                    <p className="mt-2 text-gray-700">
                        <span className="font-semibold text-gray-900">Title :</span> {paper.title}
                    </p>
                    <p className="mt-2 text-gray-700">
                        <span className="font-semibold text-gray-900">Affiliation :</span> {paper.affiliation}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default BestPaper;
