import React from "react";

const Bottom = () => {
    return (
        <div className="bg-gradient-to-b from-blue-200 to-blur-400 py-6 pl-6 text-black">
            <div className="max-w-6xl ml-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* SRS Chair Section */}
                <div>
                    <h2 className="text-xl font-bold">NITJ Chair</h2>
                    <hr className="my-2" />
                    <p className="font-bold">Dr. Lalatendu Behera</p>
                    <p>NITJ, India</p>
                    <p>Phone: +91 9999999999</p>
                    <p>Mail Id: laalalalla@nitj.ac.in</p>
                    <p className="font-bold mt-4">Dr. Lalatendu Behera</p>
                    <p>NITJ, India</p>
                    <p>Phone: 9999999999</p>
                    <p>Mail Id: aman.amanaman@nitj.ac.in</p>
                </div>

                {/* Advisory Committee Section */}
                <div>
                    <h2 className="text-xl font-bold">Advisory Committee</h2>
                    <hr className="my-2" />
                    <p className="font-bold">Dr. Lalatendu</p>
                    <p>NITJ, Punjab, India</p>
                    <p className="font-bold mt-4">Dr. Lalatendu Behera</p>
                    <p>NITJ, Punjab, India</p>
                </div>

                {/* Additional Members */}
                <div>
                    <h2 className="text-xl font-bold">&nbsp;</h2>
                    <hr className="my-2 invisible" />
                    <p className="font-bold">Dr. Lalatendu Behera</p>
                    <p>Asociate Professor, NITJ</p>
                    <p className="font-bold mt-4">Dr. Lalatendu Behera</p>
                    <p>NITJ, Dean, NITJ</p>
                </div>
            </div>
        </div>
    );
};

export default Bottom;
