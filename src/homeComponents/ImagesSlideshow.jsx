import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ss1 from "../images/slide1.jpeg";
import ss2 from "../images/slide2.jpeg";
import ss3 from "../images/slide3.jpg";

const images = [ss1, ss2, ss3];

const ImagesSlideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    const nextImage = () => {
        setIsFading(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            setIsFading(false);
        }, 200); // 300ms fade duration
    };

    const prevImage = () => {
        setIsFading(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
            setIsFading(false);
        }, 300);
    };

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(nextImage, 4000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="relative flex flex-col items-center">
            {/* Image Display */}
            <div className="relative w-96 h-64 overflow-hidden">
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className={`w-full h-full object-cover rounded-lg shadow-lg transition-opacity duration-300
                         ${isFading ? "opacity-0" : "opacity-100"
                        }`}
                />

                {/* Navigation Buttons */}
                <button
                    onClick={prevImage}
                    className="absolute top-1/2 -left-2 transform -translate-y-1/2 bg-gray-100 hover:bg-[#575757] 
               cursor-pointer text-white px-0.5 py-1 flex items-center justify-center shadow-md"
                >
                    <ChevronLeft size={22} />
                </button>



                <button
                    onClick={nextImage}
                    className="absolute top-1/2 -right-2 transform -translate-y-1/2 bg-gray-200 hover:bg-[#575757]
                               cursor-pointer text-white  px-0.5 py-1 flex items-center justify-center shadow-md"
                >
                    <ChevronRight size={22} />
                </button>
            </div>

            {/* Dots for Navigation */}
            <div className="mt-4 flex space-x-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-blue-500 scale-125" : "bg-gray-300"
                            }`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default ImagesSlideshow;
