export const phaseData = {
    title: "Hackathon Phases",
    description: "The hackathon will be held in two phases:",

    phases: [
        {
            id: 1,
            title: "Phase I",
            details: [
                "The students should register by forming a team of 1-4 members consisting of a faculty mentor with the following link:",
                {
                    type: "link",
                    text: "Registration Form",
                    url: "https://forms.gle/dUGXD8fbiAnSWVjr8",
                },
                "They should select sub-themes from the above five sub-themes and submit an AI-powered innovative idea/concept note in MS Teams latest by 10th Dec 2024.",
                "The concept note should consist of:",
                [
                    "Problem Statement Title",
                    "Sub-Theme",
                    "Team Name",
                    "Category: Hardware/Software",
                    "Proposed Solution (Describe your Idea/Solution/Prototype)",
                    "Explanation of the proposed solution",
                    "How it addresses the problem",
                    "Innovation and uniqueness of the solution",
                    "Technologies to be used (e.g. programming languages, frameworks, hardware)",
                ],
            ],
        },
        {
            id: 2,
            title: "Phase II",
            details: [
                "The selected teams will be given 48 hours during the event to develop their innovative solutions with a few surprise requirements for their selected concept note.",
                "The teams have to demonstrate and present their solutions in the final round to the jury members.",
            ],
        },
    ],

    note: {
        title: "Note:",
        description: "The AI-powered innovative solutions are not limited to any programming languages and platforms.",
    },

    judgingCriteria: {
        title: "Judging Criteria",
        criteria: [
            "Quality of the Idea",
            "Technological Implementation",
            "Potential Impact and Benefits",
            "Feasibility and Viability",
            "Novelty of the Work",
        ],
    },
};
