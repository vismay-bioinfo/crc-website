import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Progress from "./pages/Progress";
import Publications from "./pages/Publications";
import Training from "./pages/Training";
import ScientificEngagement from "./pages/ScientificEngagement";
import CRCRegistry from "./pages/CRCRegistry";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/training" element={<Training />} />
        <Route path="/scientific-engagement" element={<ScientificEngagement />} />
        <Route path="/crc-registry" element={<CRCRegistry />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;