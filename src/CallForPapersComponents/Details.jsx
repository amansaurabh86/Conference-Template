import React from "react";

const Details = () => {
    return (
        <div className="container mx-auto px-6 py-10">
            {/* Flex container to place two divs side by side */}
            <div className="flex flex-col md:flex-row gap-10">

                {/* Left Column: Topics */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl font-bold text-[#327ab7] mb-4">Distributed Computing</h2>
                    <ul className="list-disc pl-5 text-gray-700">
                        <li>Autonomous Computing, Self-organization and Self-stabilization</li>
                        <li>Blockchain & Its Applications</li>
                        <li>Cloud and Edge Computing</li>
                        <li>Distributed and Cloud Storage</li>
                        <li>Fault-tolerant Algorithms</li>
                        <li>Game-Theoretic Approaches</li>
                        <li>High-Performance, Cluster and Grid Computing</li>
                        <li>Multi-Agent Systems</li>
                        <li>Security in Distributed Computing, Cryptographic Protocols</li>
                        <li>WSN, Mesh and Ad Hoc Networks</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-[#327ab7] mt-6 mb-4">Intelligent Technologies</h2>
                    <ul className="list-disc pl-5 text-gray-700">
                        <li>Affective Computing</li>
                        <li>AI and Formal Verification</li>
                        <li>Automated Vehicles</li>
                        <li>Deep Learning</li>
                        <li>Federated Learning</li>
                        <li>Health Care Systems</li>
                        <li>Machine Learning</li>
                        <li>Natural Language Processing</li>
                        <li>Recommendation Systems</li>
                        <li>Trustworthy Computing</li>
                    </ul>
                </div>

                {/* Right Column: Paper Submission and Other Details */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl font-bold text-[#327ab7] mb-4">Paper Submission</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Authors are invited to submit original research papers in English, adhering to the LNCS format.
                        The maximum length is 16 pages. Papers must be unpublished and not under review elsewhere.
                        Submissions will undergo a peer-review process.
                    </p>

                    <h2 className="text-2xl font-bold text-[#327ab7] mt-6 mb-4">Best Paper Award</h2>
                    <p className="text-gray-700">
                        <strong>Best Paper Award:</strong> INR 50,000 (for both distributed computing and intelligent technology tracks)  <br />
                        <strong>Best Student Paper Award:</strong> INR 25,000 (for both distributed computing and intelligent technology tracks)<br />
                        <strong>Note:</strong> The conference organizers can decide to split the awards between two papers or not decide to award it to anyone as they seem fit.

                    </p>

                    <h2 className="text-2xl font-bold text-[#327ab7] mt-6 mb-4">Submission Guidelines</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Format for paper preparation: <br />
                        <a
                            href="fsnflkengf$"
                            className="text-[#327ab7] underline"
                        >
                            Conference Proceedings Guidelines
                        </a>
                        <br />
                        Papers are to be submitted through Easychair: <br />
                        <a
                            href="eksjgdledsjg$"
                            className="text-[#327ab7] underline"
                        >
                            Submission Link
                        </a>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Details;
