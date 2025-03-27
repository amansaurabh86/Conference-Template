import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import curve from "../images/curve.png";

const languages = [
    `ਡਾ. ਬੀ ਆਰ ਅੰਬੇਡਕਰ ਨੇਸ਼ਨਲ ਇੰਸਟਿਟਿਊਟ ਆਫ ਟੈਕਨੋਲੋਜੀ<br /> ਜਲੰਧਰ, ਪੰਜਾਬ (ਭਾਰਤ)`,
    `Dr B R AMBEDKAR NATIONAL INSTITUTE OF TECHNOLOGY <br /> JALANDHAR, PUNJAB (INDIA)`,
    `डॉ बी आर अम्बेडकर राष्ट्रीय प्रौद्योगिकी संस्थान<br /> जालंधर, पंजाब (भारत)`
];

const Navbar = () => {
    const [indexLeft, setIndexLeft] = useState(0);
    const [indexRight, setIndexRight] = useState(1);
    const [scrolled, setScrolled] = useState(false);
    const lastScrollTop = useRef(0); // Track last scroll position
    const scrollThreshold = 80; // Change navbar only after scrolling 100px

    useEffect(() => {
        const interval = setInterval(() => {
            setIndexLeft((prev) => (prev + 1) % languages.length);
            setIndexRight((prev) => (prev + 1) % languages.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            let scrollTop = window.scrollY;

            if (Math.abs(scrollTop - lastScrollTop.current) > scrollThreshold) {
                setScrolled(scrollTop > lastScrollTop.current);
                lastScrollTop.current = scrollTop;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`sticky top-0 pb-0 w-full bg-white shadow-md z-50 transition-all duration-500 ${scrolled ? "py-1 mt-[-10px]" : "py-4 pb-[-70px]"}`}>

            {/* Top Bar - Institute Name */}
            <div className={` flex justify-center items-center text-black text-center font-bold transition-all duration-500 
                ${scrolled ? "text-xs sm:text-sm" : "text-sm sm:text-lg"}`}>
                <div className="flex flex-col sm:flex-row justify-between w-full max-w-7xl text-center space-y-1 sm:space-y-0 sm:space-x-5">
                    <span dangerouslySetInnerHTML={{ __html: languages[indexLeft] }} />
                    <span dangerouslySetInnerHTML={{ __html: languages[indexRight] }} />
                </div>
            </div>

            {/* Logo & Navigation */}
            <div className={` relative flex justify-center items-center transition-all duration-500 
                            ${scrolled ? "mt-[-40px] mb-[-38px]" : "mt-[-70px] mb-[-42px]"}`}>
                <img
                    src={logo}
                    alt="NITJ Logo"
                    className={`z-10 transition-all duration-500 ${scrolled ? "h-[70px] sm:h-[80px]" : "h-[100px] sm:h-[130px]"}`}
                />
            </div>



            {/* Navbar */}
            <div className="relative w-full bg-blue-900  text-white flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 py-2 transition-all duration-500">
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
                    <h1 className={`text-cyan-200 font-bold transition-all duration-500 ${scrolled ? "text-sm sm:text-base" : "text-lg sm:text-xl"}`}>
                        <Link to="/">NITJ Conference</Link>
                    </h1>
                    {["Home", "About", "Committee", "CallForPapers"].map((item) => (
                        <Link
                            key={item}
                            to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                            className="hover:text-yellow-300 font-bold transition-all duration-500 text-xs sm:text-sm"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                <div className="hidden sm:flex space-x-4 md:space-x-6">
                    {["Speakers", "Schedule", "Register", "Travel", "Contact"].map((item) => (
                        <Link
                            key={item}
                            to={`/${item.toLowerCase()}`}
                            className="hover:text-yellow-300 font-bold transition-all duration-500 text-xs sm:text-sm"
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            </div>

            <div className={` block absolute left-1/2 transform -translate-x-1/2 transition-all duration-500 
                            ${scrolled ? "mt-[-43px] w-[185px] h-[43px]" : "mt-[-44.5px] w-[180px] h-[43.5px]"}`}>
                <img src={curve} alt="Decorative Curve" className="w-full h-full object-cover" />
            </div>




        </nav>
    );
};

export default Navbar;
