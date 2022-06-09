import "./App.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter,
  Route,
  Routes,
  HashRouter as Router,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ProjectPage from "./components/ProjectPage";
import Portfolio from "./Pages/Portfolio";
import Publication from "./Pages/Publication";
import PublicationPage from "./components/PublicationPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projectpage/:id" element={<ProjectPage />} />
        <Route path="/publication/:id" element={<PublicationPage />} />
        <Route path="/projects" element={<Portfolio />} />
        <Route path="/publication" element={<Publication />} />
        {/* <Route path="/bss" index element={<Home />} />
        <Route path="/bss/about" element={<About />} />
        <Route path="/bss/projectpage/:id" element={<ProjectPage />} />
        <Route path="/bss/publication/:id" element={<PublicationPage />} />
        <Route path="/bss/projects" element={<Portfolio />} />
        <Route path="/bss/publication" element={<Publication />} /> */}
        {/* <Route path="/" element={<Navigate to="/bss" />} />
        <Route path="/about" element={<Navigate to="/bss/about" />} />
        <Route path="/projects" element={<Navigate to="/bss/projects" />} />
        <Route
          path="/publication"
          element={<Navigate to="/bss/publication" />}
        /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
