import React from "react";

const Hero = () => {
    return (
        <section className="bg-gradient-to-r from-blue-200 to-blue-400 text-gray-900 py-10 px-6">
            <div className="max-w-4xl mb-8 pl-30 ">
                <h1 className="text-3xl md:text-4xl font-bold">
                    0<sup>th</sup> Student Research Symposium
                </h1>
                <p className="mt-2 text-lg">
                    (in conjunction with <strong>21<sup>st</sup> NITJ - 2025</strong>)
                </p>
                <p className="mt-4 text-lg font-semibold">
                    8<sup>th</sup> – 11<sup>th</sup> MAY 2025
                </p>
                <p className="text-md font-medium">
                    Dr B R Ambedkar National Institute of Technology Jalandhar,
                    Punjab, India
                </p>
                <div className="mt-6">
                    <a
                        href="#"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg inline-flex items-center transition duration-200 ease-in-out"
                    >
                        Submission Link
                    </a>
                </div>
            </div>
            <div className="mt-8  bg-teal-300 text-gray-900 py-4 px-6 rounded-lg max-w-4xl ml-30">
                <p className="italic font-medium text-lg">
                    Theme: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.,
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat dignissimos consectetur,
                    pariatur quas velit deserunt?
                    "
                </p>
            </div>
        </section>
    );
};

export default Hero;
