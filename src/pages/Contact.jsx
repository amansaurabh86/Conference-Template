import React from "react";
import { FaEnvelope, FaGlobe, FaPhone } from "react-icons/fa";
import contactIcon from "../images/speaker.jpg";
import ContactData from "../Data/ContactData";

// Reusable Contact Card Component
const ContactCard = ({ name, position, department, email, phone }) => {
    return (
        <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-2xl md:w-[500px]">
            {/* Left Side - Image */}
            <img
                src={contactIcon}
                alt={`${name} Profile`}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#327ab7] p-2 shadow-md"
            />

            {/* Right Side - Contact Information */}
            <div className="ml-6 text-center md:text-left">
                <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
                <p className="text-gray-700 mt-2 leading-relaxed text-sm">
                    {position} <br />
                    {department} <br />
                    Dr. B R Ambedkar National Institute of Technology <br />
                    Jalandhar, Punjab - 144011, India
                </p>
                <div className="mt-4 text-gray-700 space-y-1">
                    <p className="flex items-center gap-2">
                        <FaPhone className="text-black" /> {phone}
                    </p>
                    <p className="flex items-center gap-2">
                        <FaEnvelope className="text-black" />
                        <a href={`mailto:${email}`} className="text-blue-600 hover:underline">
                            {email}
                        </a>
                    </p>
                    <p className="flex items-center gap-2">
                        <FaGlobe className="text-black" />
                        <a href="https://www.nitj.ac.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            www.nitj.ac.in
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

// Main Contact Component
const Contact = () => {
    return (
        <div className="bg-white p-8 md:p-12 flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Contact Us</h1>
            <div className="flex flex-wrap justify-center gap-10">
                {ContactData.map((contact, index) => (
                    <ContactCard key={index} {...contact} />
                ))}
            </div>
        </div>
    );
};

export default Contact;
