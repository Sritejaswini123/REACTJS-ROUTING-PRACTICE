import React from 'react';
import './App.css';
import { BrowserRouter  , Link, Routes, Route } from "react-router-dom";
import Header from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
     <Routes>
      <Route  path="/" element={<Home/>} />
      <Route  path="/about" element={<About/>} />
      <Route  path="/contact" element={<Contact/>} />
      <Route path = "*" element={<NotFound/>} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
