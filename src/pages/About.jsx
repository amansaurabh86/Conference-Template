import React from "react";
import about from "../images/about.jpg";
import AboutData from "../Data/AboutData";

const About = () => {
    return (
        <section className="p-6 pt-5 bg-gray-100 flex justify-center ">
            <div className="border border-[#337ab7] w-11/12 max-w-[1180px] shadow-md rounded-lg overflow-hidden">
                <div className="bg-[#337ab7] text-white text-center py-3 text-xl font-bold ">
                    About Us
                </div>

                <div className="p-6 bg-white shadow-md mt-4">
                    <h3 className="text-2xl font-bold text-[#3b78ad] text-center">{AboutData.aboutNITJ.title}</h3>
                    <p className="mt-4 text-lg text-justify">{AboutData.aboutNITJ.content}</p>
                    <div className="mt-6 flex justify-center brightness-80">
                        <img src={about} alt={AboutData.aboutNITJ.imageAlt} className="rounded-sm shadow-lg w-[100%] h-[300px] object-cover" />
                    </div>
                </div>

                <div className="p-6 bg-white shadow-md mt-4">
                    <h3 className="text-2xl font-bold text-[#3b78ad] text-center">{AboutData.aboutCCE.title}</h3>
                    {AboutData.aboutCCE.content.map((paragraph, index) => (
                        <p key={index} className="mt-2 text-lg text-justify">{paragraph}</p>
                    ))}
                </div>

                <div className="p-6 bg-white shadow-md mt-4">
                    <h3 className="text-2xl font-bold text-[#3b78ad] text-center">{AboutData.vision.title}</h3>
                    <p className="mt-4 text-lg italic">{AboutData.vision.content}</p>
                </div>

                <div className="p-6 bg-white shadow-md mt-4">
                    <h3 className="text-2xl font-bold text-[#3b78ad] text-center">{AboutData.mission.title}</h3>
                    <p className="mt-4 text-lg text-justify">{AboutData.mission.content}</p>
                </div>
            </div>
        </section>
    );
};

export default About;
