import React from "react";

const Date = () => {
    return (
        <section className="container mx-auto py-8 px-8">
            <h2 className="text-2xl font-bold text-gray-900">Important Dates</h2>
            <ul className="mt-4 list-disc pl-5 text-gray-700">
                <li>Last date for submission of the Book Chapter: <strong>25th October 2024</strong></li>
                <li>Book Chapter Acceptance notifications to Authors: <strong>20th November 2024</strong></li>
                <li>Final Submission of the paper for the Book Chapter: <strong>30th November 2024</strong></li>
            </ul>
        </section>
    );
};

export default Date;
