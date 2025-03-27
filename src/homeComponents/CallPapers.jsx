import React from "react";
import ImagesSlideshow from "./ImagesSlideshow";

const CallPapers = () => {
    return (
        <div className="flex items-center justify-center w-full p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 max-w-7xl w-full">
                {/* Left Side - Image Slideshow */}
                <div className="flex justify-center">
                    <div className="w-full max-w-lg">
                        <ImagesSlideshow />
                    </div>
                </div>

                {/* Right Side - Text */}
                <div className="text-gray-800 px-6">
                    <h2 className="text-4xl font-bold text-blue-700 md:text-left text-center">
                        Call for Papers
                    </h2>
                    <p className="mt-6 text-justify leading-relaxed text-lg">
                        Since its establishment in 2004, the ICDCT conference series has stood as a
                        prestigious global platform for scholars in Computer Science...
                    </p>
                    <p className="mt-6 text-justify leading-relaxed text-lg">
                        The forthcoming 21st International Conference on Distributed Computing and
                        Intelligent Technology (ICDCIT-2025) is scheduled to convene in Bhubaneswar from
                        January 8 to 11, 2025...
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CallPapers;
