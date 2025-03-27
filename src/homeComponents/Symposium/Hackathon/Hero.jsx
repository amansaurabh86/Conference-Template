const Hero = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-gradient-to-b from-blue-200 to-blue-400 text-black">
            <div className="max-w-6xl mx-auto p-6">
                {/* Main Title */}
                <h1 className="text-4xl font-bold mb-6">
                    2nd Hackathon Compilation
                </h1>

                {/* Subtitle */}
                <div className="space-y-4 mb-8">
                    <h2 className="text-2xl font-semibold">
                        Title: Artificial Intelligence (AI) for Sustainable Healthcare
                    </h2>
                    <p className="text-gray-800">
                        (In conjunction with 21<sup>st</sup> ICDCIT – 2025)
                    </p>
                </div>

                {/* Organization Info */}
                <div className="mb-8">
                    <p className="font-medium">Organized by:</p>
                    <p className="text-lg font-semibold">Kalinga Institute of Industrial Technology,</p>
                    <p className="text-lg">Deemed to be University, Bhubaneswar, Odisha, India</p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button
                        className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center"
                        onClick={() => scrollToSection('submission')}
                    >
                        Submission Link
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6l6 6-6 6" />
                        </svg>
                    </button>

                    <button
                        className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center"
                        onClick={() => scrollToSection('results')}
                    >
                        Compilation Result
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6l6 6-6 6" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
