import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import ProjectPage from './components/ProjectPage';
import Portfolio from './Pages/Portfolio';
import Publication from './Pages/Publication';
import PublicationPage from './components/PublicationPage';



function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home />}/>
        <Route path= "/about" element={<About/>}/>
        <Route path= "/projectpage/:id" element={<ProjectPage/>}/>
        <Route path= "/publication/:id" element={<PublicationPage/>}/>
        <Route path="/projects" element={<Portfolio/>}/>
        <Route path="/publication" element={<Publication/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
