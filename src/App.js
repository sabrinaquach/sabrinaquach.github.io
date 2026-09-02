import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Work from "./components/works/work";
import About from "./components/about/about";
import ProjectOne from "./components/works/project one/projectOne";
import ProjectTwo from "./components/works/project two/projectTwo";
import ProjectThree from "./components/works/project three/projectThree";
import ProjectFour from "./components/works/project four/projectFour";
import ProjectFive from "./components/works/project five/projectFive";
import Footer from "./components/footer/footer";
import ScrollToHashElement from "./utilities/ScrollToHashElement";
import './styles/styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToHashElement />
        <Navbar />
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/Pip" element={<ProjectOne />} />
          <Route path="/AdobeFlux" element={<ProjectTwo />} />
          <Route path="/Aura" element={<ProjectThree />} />
          <Route path="/RealityCheck" element={<ProjectFour />} />
          <Route path="/Spacescan" element={<ProjectFive />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
