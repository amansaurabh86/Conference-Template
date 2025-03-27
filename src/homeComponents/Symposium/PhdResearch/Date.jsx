import React from "react";

const Date = () => {
    return (
        <div className="">
            {/* Important Dates Section */}
            <div className="mb-8 pl-35">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Dates</h2>
                <ul className=" text-gray-700">
                    <li className="mb-2">
                        <strong>Last date for submission of the Book Chapter:</strong> <span className="text-black font-semibold">4th January 2025</span>
                    </li>
                    <li className="mb-2">
                        <strong>Book Chapter Acceptance notifications to Authors:</strong> <span className="text-black font-semibold">4th January 2025</span>
                    </li>
                    <li className="mb-2">
                        <strong>Final Submission of the paper for the Book Chapter:</strong> <span className="text-black font-semibold">4th January 2025</span>
                    </li>
                </ul>
            </div>

            {/* Committee Section */}
            <div className="bg-gradient-to-b from-blue-200 to-blur-400 py-8">
                <div className="grid md:grid-cols-3 gap-8 text-gray-800 text-center">
                    {/* Patron */}
                    <div>
                        <h3 className="text-lg font-bold border-b border-gray-600 pb-2">Patron</h3>
                        <img src="/path/to/image.jpg" alt="Prof. Lalatendu Behera" className="w-24 h-24 rounded-full mx-auto mt-3" />
                        <p className="font-semibold mt-2">Prof. Lalatendu Behera</p>
                        <p className="text-sm">NIT-J, India</p>
                    </div>

                    {/* Advisory Committee */}
                    <div>
                        <h3 className="text-lg font-bold border-b border-gray-600 pb-2">Advisory Committee</h3>
                        <p className="mt-2"><strong>Lalatendu Behera</strong>, NITJ, India</p>
                        <p><strong>Lalatendu Behera</strong>, NITJ, India</p>
                        <p><strong>Lalatendu Behera</strong>, NITJ, India</p>
                    </div>

                    {/* Research Symposium Chairs */}
                    <div>
                        <h3 className="text-lg font-bold border-b border-gray-600 pb-2">Research Symposium Chairs</h3>
                        <p className="mt-2"><strong>aman saurabh</strong>, NITJ, India</p>
                        <p><strong>aman saurabh</strong>, NITJ, India</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Date;
