import React from "react";

const IntelligentTechnologies = () => {
    const topics = [
        ["Affective Computing", "AI and Formal Verification", "AI Planning", "Authenticity, Honesty & Deception", "Automated Vehicles", "Business Analytics", "Computational Intelligence", "Cyber-Physical Systems", "Deep Learning", "Engineering Intelligent Systems", "Ethics and AI", "Explainability in AI"],
        ["Federated Learning", "Health Care Systems", "Intelligent Manufacturing", "Intelligent Transport Systems", "Knowledge Management", "Knowledge Representation", "Machine Learning", "Machine Vision", "Meta Learning", "Natural Language Processing", "Neuro-symbolic Computing", "Profiling and Social Networking"],
        ["Robots", "Security Systems", "Sentiment Analysis", "Social Memory & Cognition", "Society of Apps", "Speech Technologies", "Topic Detection", "Constraint Satisfaction Problems", "Trustworthy Computing", "Reinforcement Learning", "Recommendation Systems"]
    ];

    return (
        <div className="bg-gray-100 p-8 rounded-lg shadow-md flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold text-center text-brown-700 mb-4">Intelligent Technologies</h2>
            <div className="grid grid-cols-3 gap-15 text-gray-700">
                {topics.map((column, index) => (
                    <ul key={index} className="list-disc list-inside space-y-2">
                        {column.map((topic, i) => (
                            <li key={i}>{topic}</li>
                        ))}
                    </ul>
                ))}
            </div>
        </div>
    );
};

export default IntelligentTechnologies;
