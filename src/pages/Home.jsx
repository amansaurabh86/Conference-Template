import React from "react";
import Hero from "../homeComponents/Hero";
// import Award from "../homeComponents/Aaward";
import SymposiumsBox from "../homeComponents/SymposiumsBox";
import BestPaper from "../homeComponents/BestPaper";
import CallPapers from "../homeComponents/CallPapers";
import IntelligentTech from "../homeComponents/IntelligentTech";

const Home = () => {
    return (
        <div>
            <Hero />
            {/* <Award /> */}
            <SymposiumsBox />
            <BestPaper />
            <CallPapers />
            <IntelligentTech />
        </div>
    );
};

export default Home;



// import React from "react";
// import Hero from "../homeComponents/Hero";
// import Award from "../homeComponents/Aaward";
// import Box from "../homeComponents/Box";
// import BestPaper from "../homeComponents/BestPaper";
// import CallForPapers from "../homeComponents/CallForPapers";
// import IntelligentTech from "../homeComponents/IntelligentTech";

// const Home = () => {
//     return (
//         <div>
//             {/* <Header /> */}
//             <Hero />
//             <Award />
//             <Box />
//             <BestPaper />

//             <CallForPapers />

//             <IntelligentTech />
//         </div>
//     );
// };

// export default Home;
