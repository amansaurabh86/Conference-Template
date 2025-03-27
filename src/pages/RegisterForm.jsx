import React, { useState } from "react";

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        category: "author",
        registrationType: "conference",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Registration Data:", formData);
        alert("Registration successful!");
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center py-5">
            <section className="bg-white w-10/12 max-w-[720px] mx-auto p-6 shadow-md rounded-lg">
                {/* Title */}
                <h2 className="text-2xl font-bold text-[#337ab7] text-center">Conference Registration</h2>
                <p className="text-lg text-gray-700 text-center mt-2">Fill out the form to complete your registration.</p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-6">
                    {/* First Name */}
                    <div className="mb-4">
                        <label className="block font-medium text-gray-700">First Name</label>
                        <input
                            type="text"
                            name="fname"
                            value={formData.fname}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-[#337ab7] focus:outline-none"
                            placeholder="Enter your first name"
                        />
                    </div>

                    {/* Last Name */}
                    <div className="mb-4">
                        <label className="block font-medium text-gray-700">Last Name</label>
                        <input
                            type="text"
                            name="lname"
                            value={formData.lname}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-[#337ab7] focus:outline-none"
                            placeholder="Enter your last name"
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-[#337ab7] focus:outline-none"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Category */}
                    <div className="mb-4">
                        <label className="block font-medium text-gray-700">Category</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-[#337ab7] focus:outline-none"
                        >
                            <option value="author">Author</option>
                            <option value="academician">Academician</option>
                            <option value="student">Student</option>
                            <option value="non-author">Non-Author</option>
                        </select>
                    </div>

                    {/* Registration Type */}
                    <div className="mb-4">
                        <label className="block font-medium text-gray-700">Registration Type</label>
                        <div className="flex space-x-4 mt-2">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="registrationType"
                                    value="conference"
                                    checked={formData.registrationType === "conference"}
                                    onChange={handleChange}
                                    className="form-radio text-[#337ab7]"
                                />
                                <span className="ml-2">Conference</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="registrationType"
                                    value="workshop"
                                    checked={formData.registrationType === "workshop"}
                                    onChange={handleChange}
                                    className="form-radio text-[#337ab7]"
                                />
                                <span className="ml-2">Workshop</span>
                            </label>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-6 text-center">
                        <button
                            type="submit"
                            className="bg-[#337ab7] text-white px-6 py-2 rounded-lg hover:bg-[#2174bd] transition duration-300 cursor-pointer"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default RegisterForm;
