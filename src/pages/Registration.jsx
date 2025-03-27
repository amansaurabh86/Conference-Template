import React from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center py-10 pt-1">
            <section className="p-8 bg-white max-w-4xl w-full mx-auto shadow-lg rounded-lg">
                {/* Registration Header */}
                <h3 className="text-2xl font-bold text-[#327ab7] mb-4 border-b pb-2">
                    Registration Guidelines
                </h3>

                {/* Guidelines List */}
                <ul className="text-lg text-gray-700 leading-relaxed list-disc pl-6">
                    <li>
                        Every accepted paper must have at least one <strong>author registration</strong>.
                    </li>
                    <li>
                        Student authors can opt for student registration <strong>only if</strong> one of
                        their co-authors has already registered.
                    </li>
                    <li>
                        Registration covers the presentation of up to two papers if the registrant is an
                        author of both.
                    </li>
                    <li>All papers must be presented in person.</li>
                    <li>Attendees without a paper may register as non-authors.</li>
                    <li>Workshops and tutorials require additional registration.</li>
                    <li>
                        All registration deadlines are: <strong>4th March</strong>.
                    </li>
                    <li>Conference registration includes a banquet dinner.</li>
                </ul>

                {/* Register Button */}
                <div className="mt-6 flex justify-center">
                    <button
                        className="bg-[#4d87bb] text-white font-semibold text-lg px-6 py-3 rounded-md shadow-sm hover:shadow-md hover:bg-[#2174bd] transition"
                        onClick={() => navigate("/RegisterForm")}
                    >
                        Register Now
                    </button>
                </div>

                {/* Contact Info */}
                <p className="mt-4 text-sm text-gray-600 italic text-center">
                    **For any issues with registration or receipts, please contact{" "}
                    <strong>nitj.conference@nitj.ac.in</strong>.
                </p>
            </section>
        </div>
    );
};

export default Registration;




{/* Conference Registration */ }

{/* <h3 className="text-2xl font-bold text-[#f75a5a] mt-6">Registration:</h3>
            <p className="text-lg mt-2">All amounts are in Indian Rupees (₹) and 18% GST will be charged additionally.</p>

            <div className="overflow-x-auto mt-4">
                <table className="w-full border border-collapse border-gray-400">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border p-2">Category</th>
                            <th className="border p-2">IEEE Member</th>
                            <th className="border p-2">Non-IEEE Member</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border p-2">Organization & Author</td>
                            <td className="border p-2">₹ 12,000</td>
                            <td className="border p-2">₹ 15,000</td>
                        </tr>
                        <tr>
                            <td className="border p-2">Academician</td>
                            <td className="border p-2">₹ 10,000</td>
                            <td className="border p-2">₹ 12,000</td>
                        </tr>
                        <tr>
                            <td className="border p-2">Student</td>
                            <td className="border p-2">₹ 5,000</td>
                            <td className="border p-2">₹ 8,000</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p className="mt-2 text-sm text-gray-700 italic">
                *Applicable only if the paper is covered by full registration from other author(s) or the student is a non-author.
            </p> */}


{/* Workshop and Tutorials Registration */ }

{/* <h3 className="text-2xl font-bold text-[#f75a5a] mt-6">Workshop and Tutorials only Registration:</h3>
            <ul className="mt-2 text-lg text-justify list-disc list-inside">
                <li>Only if the registrant has <strong>not</strong> registered for the main conference.</li>
                <li>All amounts are in Indian Rupees (₹) and 18% GST will be charged additionally.</li>
                <li>Workshop and tutorial registration gives access to all tutorials and workshops.</li>
            </ul>

            <div className="overflow-x-auto mt-4">
                <table className="w-full border border-collapse border-gray-400">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border p-2">Category</th>
                            <th className="border p-2">IEEE Member</th>
                            <th className="border p-2">Non-IEEE Member</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border p-2">Full</td>
                            <td className="border p-2">₹ 4,000</td>
                            <td className="border p-2">₹ 5,000</td>
                        </tr>
                        <tr>
                            <td className="border p-2">Student</td>
                            <td className="border p-2">₹ 2,000</td>
                            <td className="border p-2">₹ 3,000</td>
                        </tr>
                    </tbody>
                </table>
            </div> */}