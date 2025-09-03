import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Achievements from './Components/Achievements';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import './App.css';
import './index.css';
function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />  
      </div> 
    </Router>
  );
}

export default App;