import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Admissions from './pages/Admissions';
import Staff from './pages/Staff';
import Resources from './pages/Resources';
import './index.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/mission" element={<About />} />
          <Route path="/about/staff" element={<Staff />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/counselor" element={<Resources />} />
          <Route path="/resources/parents" element={<Resources />} />
          <Route path="/resources/newsletters" element={<Resources />} />
          <Route path="/resources/doe" element={<Resources />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
