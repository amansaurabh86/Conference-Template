// Foot.jsx

import React from "react";
import { importantDates, venue, contactDetails } from "./FootData";

const Foot = () => {
    return (
        <div className="bg-gradient-to-b from-blue-200 to-blur-400 py-8">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">

                {/* Important Dates Section */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Dates:</h2>
                    <ul className="text-gray-800 space-y-2">
                        {importantDates.map((item, index) => (
                            <li key={index}>
                                {item.label} : <span className="font-bold">{item.date}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-4 font-bold text-gray-900">Venue:</p>
                    <p className="text-gray-800">{venue}</p>
                </div>

                {/* Contact Details Section */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Details:</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {contactDetails.map((contact, index) => (
                            <div key={index}>
                                <p className="font-semibold text-gray-900">{contact.name}</p>
                                <p className="text-gray-800">email: {contact.email}</p>
                                <p className="text-gray-800">Ph: {contact.phone}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Foot;
