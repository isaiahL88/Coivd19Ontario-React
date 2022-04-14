import './App.css';
import React from 'react'
import Home from './Home.js';
import Nav from './Nav.js'
import styles from './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav></Nav>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
