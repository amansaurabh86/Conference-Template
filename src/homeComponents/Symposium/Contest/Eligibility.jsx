import React from "react";

const Eligibility = () => {
    return (
        <section className="container mx-auto py-8 px-8">
            <h2 className="text-2xl font-bold text-gray-900">Eligibility</h2>
            <ul className="mt-4 list-disc pl-5 text-gray-700">
                <li>A team must comprise of not more than 3 members (2 students + 1 advisor/mentor/guide).</li>
                <li>Students can be from any stream of B.E / B.Tech / MTech / MCA / MSc / MBA / BCA / BBA / MBBS / BSc (Comp. Science) and Diploma.</li>
                <li>Each team must have an advisor/mentor/guide.</li>
                <li>Members of a team must be affiliated with the same educational institute.</li>
                <li>The project has to be recommended by the Head of the Institute/Department.</li>
            </ul>

            <h2 className="mt-6 text-2xl font-bold text-gray-900">Submission</h2>
            <ul className="mt-4 list-disc pl-5 text-gray-700">
                <li>Soft copy of the project template must be submitted through the provided link.</li>
                <li>Only selected projects will be called for the presentation and will be notified via their provided email ID.</li>
                <li>Contestants must meet the following requirements at the time of the final contest presentation:
                    <ul className="mt-2 list-disc pl-6">
                        <li>Be enrolled as a student at an accredited educational institution.</li>
                        <li>Not be involved in any part of the contest administration.</li>
                        <li>Not already be part of another team with a different project.</li>
                    </ul>
                </li>
            </ul>

            <h2 className="mt-6 text-2xl font-bold text-gray-900">Evaluation Criteria</h2>
            <ul className="mt-4 list-disc pl-5 text-gray-700">
                <li>Each project will be evaluated by at least two reviewers.</li>
                <li>Evaluation is based on the following key aspects:
                    <ul className="mt-2 list-disc pl-6">
                        <li>Innovation</li>
                        <li>Societal contribution</li>
                        <li>Technology adopted</li>
                        <li>Cost incurred</li>
                        <li>Commercial implications</li>
                        <li>Compliance with any two of the 17 Sustainable Development Goals (SDGs)</li>
                    </ul>
                </li>
            </ul>

            <h2 className="mt-6 text-2xl font-bold text-gray-900">Facilities</h2>
            <ul className="mt-4 list-disc pl-5 text-gray-700">
                <li>Hostel accommodation will be provided to participants of selected projects (maximum 3 members per team).</li>
                <li>To-and-fro fare (only Sleeper Class) will be provided to participants traveling from outside.</li>
            </ul>
        </section>
    );
};

export default Eligibility;
