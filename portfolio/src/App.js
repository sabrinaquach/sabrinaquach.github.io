import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Work from "./components/works/work";
import About from "./components/about/about";
import ProjectOne from "./components/works/project one/projectOne";
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
          <Route path="/AdobeFlux" element={<ProjectOne />} />
          {/* <Route path="/SpartanSync" element={<ProjectTwo />} />
          <Route path="/Aura" element={<ProjectThree />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
