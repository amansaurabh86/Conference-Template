import React from "react";

const Info = () => {
    return (
        <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Call for Papers Section */}
            <div className="md:col-span-2 bg-[#f3f4f6] text-black p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-[#327ab7]">Call for Papers</h2>
                <p className="text-justify text-md leading-relaxed text-gray-700">
                    Since its establishment in 2004, the ICDICT conference series has stood as a prestigious global platform
                    for scholars in Computer Science. It serves as a conduit for the exchange of research findings and ideas about
                    the principles and applications of Distributed Computing and Intelligent Technology. The rapid ascendancy and
                    integration of Artificial Intelligence across scientific and engineering domains have prompted the incorporation
                    of ‘Intelligent Technology’ within the conference’s purview. Undoubtedly, these technologies play an indispensable
                    role for individuals and organizations engaged in the design, development, and implementation of large-scale
                    systems featuring AI-based components and subsystems.
                </p>
                <p className="mt-4 text-justify text-md leading-relaxed text-gray-700">
                    The forthcoming 21st International Conference on Distributed Computing and Intelligent Technology (ICDCIT-2025)
                    is scheduled to convene in Bhubaneswar from January 8 to 11, 2025. Hosted by the Kalinga Institute of Industrial
                    Technology (KIIT) in Bhubaneswar, India, the event aims to facilitate discussions and advancements in the field.
                    Continuing the tradition, Springer intends to publish the conference proceedings in the esteemed Lecture Notes
                    series in Computer Science, a practice upheld in previous editions.
                </p>
            </div>

            {/* Important Dates Section */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-[#327ab7] mb-4">Important Dates</h2>
                <hr className="border-gray-300 mb-4" />
                <ul className="text-gray-700 text-md space-y-2">
                    <li><strong>Abstract Submission, Anywhere on Earth (AoE)</strong><br /><span className="text-blue-700 font-semibold">August 8, 2024</span></li>
                    <li><strong>Abstract Deadline Extension:</strong><br /> August 15, 2024</li>
                    <li><strong>Submission of full papers (AoE):</strong><br /><span className="text-blue-600 font-semibold">August 15, 2024</span></li>
                    <li><strong>Full Paper Deadline Extension:</strong><br /> August 25, 2024</li>
                    <li><strong>Paper acceptance notification to authors:</strong><br /> <span className="text-blue-600 font-semibold">October 15, 2024</span> → <span className="text-blue-600 font-semibold">October 20, 2024</span></li>
                    <li><strong>Final camera-ready paper submission due:</strong><br /> <span className="text-blue-600 font-semibold">October 22, 2024</span> → <span className="text-blue-600 font-semibold">October 25, 2024</span></li>
                    <li><strong>Conference Date:</strong><br /> <span className="font-bold">January 8th - 11th 2025</span></li>
                </ul>
            </div>
        </div>
    );
};

export default Info;
