import React from "react";

const TravelInfo = () => {
    return (
        <div className="max-w-6xl mx-auto p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
                Reach Jalandhar
            </h2>

            <div className="flex flex-col md:flex-row gap-10">
                {/* Left Section - Travel Information */}
                <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
                    <p className="text-gray-900 font-semibold leading-relaxed">
                        Jalandhar, a prominent city in Punjab, is located in the northern part of Punjab, India, and is well connected through all modes of transport networks.
                    </p>

                    {/* Air Transport */}
                    <div className="mt-6 border-l-4 border-blue-500 pl-4">
                        <h3 className="text-xl font-semibold text-gray-900">Air Transport</h3>
                        <p className="text-gray-700 mt-2 leading-relaxed">
                            The nearest airport to Jalandhar is
                            <span className="font-medium text-gray-900"> Sri Guru Ram Dass Jee International Airport</span> in Amritsar, which serves both domestic and international flights, connecting it to major Indian cities and global destinations like
                            <span className="font-medium"> Dubai, London, Toronto, and Singapore</span>. From there, efficient rail and road transport options provide seamless connectivity to Jalandhar.
                        </p>
                    </div>

                    {/* Rail Transport */}
                    <div className="mt-6 border-l-4 border-green-500 pl-4">
                        <h3 className="text-xl font-semibold text-gray-900">Rail Transport</h3>
                        <p className="text-gray-700 mt-2 leading-relaxed">
                            Jalandhar is well connected by
                            <span className="font-medium text-gray-900"> Indian Railways</span> to major cities across India. The
                            <span className="font-medium"> Northern Railway zone</span> operates fast and superfast trains linking Jalandhar to key destinations.
                        </p>
                    </div>

                    {/* Road Transport */}
                    <div className="mt-6 border-l-4 border-red-500 pl-4">
                        <h3 className="text-xl font-semibold text-gray-900">Road Transport</h3>
                        <p className="text-gray-700 mt-2 leading-relaxed">
                            Jalandhar is well connected via national highways. The
                            <span className="font-medium text-gray-900"> ISBT Jalandhar</span> is located on
                            <span className="font-medium"> NH-44</span> and is easily accessible, being well linked to the railway station and the nearest airport in Amritsar.
                        </p>
                    </div>
                </div>

                {/* Right Section - Google Map */}
                <div className="w-full md:w-1/2 rounded-lg shadow-md overflow-hidden">
                    <iframe
                        title="Jalandhar Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.6528444703845!2d75.5331666151476!3d31.396134481410893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a51d30c180edf%3A0x5b7633718d17ef33!2sDr.+B+R+Ambedkar+National+Institute+of+Technology!5e0!3m2!1sen!2sin!4v1459333057323"
                        className="w-full h-[350px] md:h-full rounded-lg"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default TravelInfo;
