import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Speakers from "./pages/Speakers";
import Schedule from "./pages/Schedule";
import Registration from "./pages/Registration";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RegisterForm from "./pages/RegisterForm";
import Travel from "./pages/Travel";
import Committee from "./pages/Committee";
import CallForPapers from "./pages/CallForPapers";

import PaperLogin from "./homeComponents/PaperLogin";
import PaperSignup from "./homeComponents/PaperSignup";

import Research from "./homeComponents/Symposium/PhdResearch/Research";
import Head from "./homeComponents/Symposium/Contest/Head";
import StdHead from "./homeComponents/Symposium/StdResearch/StdHead";
import Workshop from "./homeComponents/Symposium/Workshop/WorkHead";
import HackHeader from "./homeComponents/Symposium/Hackathon/HackHeader";
import IndustryHead from "./homeComponents/Symposium/Industry/IndustryHead";


const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Committee" element={<Committee />} />
          <Route path="/CallForPapers" element={<CallForPapers />} />


          <Route path="/speakers" element={<Speakers />} />
          <Route path="/schedule" element={<Schedule />} />

          {/* <Route path="/Research" element={<Research />} /> */}
          <Route path="/Symposium/PhdResearch/Research" element={<Research />} />
          <Route path="/Symposium/Contest/Head" element={<Head />} />
          <Route path="/Symposium/StdResearch/StdHead" element={<StdHead />} />
          <Route path="/Symposium/Workshop/WorkHead" element={<Workshop />} />
          <Route path="/Symposium/Hackathon/HackHeader" element={<HackHeader />} />
          <Route path="/Symposium/Industry/IndustryHead" element={<IndustryHead />} />

          <Route path="/register" element={<Registration />} />
          <Route path="/registerform" element={<RegisterForm />} />

          <Route path="/paperlogin" element={<PaperLogin />} />
          <Route path="/papersignup" element={<PaperSignup />} />

          <Route path="/Travel" element={<Travel />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
