import React from 'react';
import BottomData from './BottomData';

const Bottom = () => {
    return (
        <div className="max-w-6xl mx-auto pt-6 pb-6">
            <h2 className="text-2xl font-semibold text-black mb-6 text-center">Workshop Co-chairs</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {BottomData.map((chair, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-black">{chair.name}</h3>
                        <p className="text-black mt-2">{chair.department}</p>
                        <div className="flex items-center mt-2 text-black">
                            {/* <span className="material-icons w-4 h-4 mr-2">mail</span> */}
                            <a
                                href={`mailto:${chair.email}`}
                                className="text-blue-600 hover:text-blue-800 text-sm break-all"
                            >
                                {chair.email}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bottom;
