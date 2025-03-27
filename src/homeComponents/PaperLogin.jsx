import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaperLogin = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when the component mounts
    }, []);

    return (
        <div className="flex justify-center min-h-screen bg-gray-100 py-10 pb-40">
            <div className="bg-white w-11/12 max-w-[450px] mx-auto p-6 shadow-md rounded-lg">
                {/* Title */}
                <h2 className="text-2xl font-bold text-[#337ab7] text-center">Login</h2>
                <p className="text-gray-600 text-center mt-2">Enter your credentials to continue.</p>

                {/* Form */}
                <form className="mt-5 space-y-4">
                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 font-medium">Email Address</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-[#337ab7] focus:outline-none"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-700 font-medium">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-[#337ab7] focus:outline-none"
                        />
                    </div>

                    {/* Login Button */}
                    <div className="text-center">
                        <button
                            className="bg-[#337ab7] text-white px-5 py-2 rounded-md w-full hover:bg-[#2174bd] transition duration-300"
                        >
                            Login
                        </button>
                    </div>
                </form>

                {/* Links */}
                <div className="mt-5 text-center text-sm">
                    <a href="#" className="text-[#337ab7] hover:underline">Forgot password?</a>
                    <br />
                    <span
                        onClick={() => navigate("/papersignup")}
                        className="text-[#337ab7] hover:underline mt-3 inline-block cursor-pointer"
                    >
                        Create account
                    </span>
                </div>
            </div>
        </div>
    );
};

export default PaperLogin;
