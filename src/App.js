import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import SignIn from "./Components/SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<HeroSection />} />

        {/* ChatBot Page */}
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default App;
