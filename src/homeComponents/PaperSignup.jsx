import React, { useState } from "react";

const PaperSignup = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        affiliation: "",
        country: "",
        password: "",
        confirmPassword: "",
        agree: false,
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (
            !formData.firstName ||
            !formData.lastName ||
            !formData.email ||
            !formData.affiliation ||
            !formData.country ||
            !formData.password ||
            !formData.confirmPassword
        ) {
            setError("All fields are required.");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        if (!formData.agree) {
            setError("You must agree to the terms.");
            return;
        }

        setError("");
        alert("Form submitted successfully!");
    };

    return (
        <div className="flex justify-center min-h-screen bg-gray-100 pt-10 pb-20">
            <div className="bg-white w-11/12 max-w-[450px] mx-auto p-6 shadow-md rounded-lg">
                {/* Title */}
                <h2 className="text-2xl font-bold text-[#337ab7] text-center">Sign Up</h2>
                <p className="text-gray-600 text-center mt-2">Create an account to submit your paper.</p>

                {/* Error Message */}
                {error && <p className="text-red-600 text-center mt-3">{error}</p>}

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Enter your first name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-[#337ab7] focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Enter your last name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-[#337ab7] focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-[#337ab7] focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Affiliation</label>
                        <input
                            type="text"
                            name="affiliation"
                            value={formData.affiliation}
                            onChange={handleChange}
                            placeholder="Enter your affiliation"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-[#337ab7] focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Country</label>
                        <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-[#337ab7] focus:outline-none"
                        >
                            <option value="">Select Country</option>
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                            <option value="Germany">Germany</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-[#337ab7] focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Re-enter your password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-[#337ab7] focus:outline-none"
                        />
                    </div>

                    {/* Terms Agreement */}
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="agree"
                            checked={formData.agree}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <label className="text-gray-700 text-sm">I agree to the Terms of Service</label>
                    </div>

                    {/* Signup Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-[#337ab7] cursor-pointer text-white px-5 py-2 rounded-md w-full hover:bg-[#2174bd] transition duration-300"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PaperSignup;
