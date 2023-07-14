import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <>
      <Router>
        <header>

        </header>
        <Navbar />
        <Sidebar />
      </Router>
    </>
  );
}

export default App;
