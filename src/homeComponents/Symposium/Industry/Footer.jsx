import React from "react";

const Footer = () => {
    return (
        <div className="bg-gradient-to-b from-blue-200 to-blur-400 py-8 text-center">
            <h2 className="text-xl font-bold text-blue-700 border-b pb-2 inline-block">
                Industry Symposium Chairs
            </h2>
            <div className="flex justify-center mt-4 space-x-16 text-gray-800">
                <div className="text-left">
                    <h3 className="font-bold">Prof. Dr. Lalatendu Behera</h3>
                    <p>NITJ, India</p>
                    <p>Phone No: +91 99999 99999</p>
                    <p>Email: <a href="beheral@nitj.ac.in" className="text-blue-700">beheral@nitj.ac.in</a></p>
                </div>
                <div className="text-left">
                    <h3 className="font-bold">Prof. Dr. Lalatendu Behera</h3>
                    <p>NITJ, India</p>
                    <p>Phone No: +91 99999 99999</p>
                    <p>Email: <a href="beheral@nitj.ac.in" className="text-blue-700">beheral@nitj.ac.in</a></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
