import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from './components/Login'
import Register from "./components/Register"
import Dashboard from "./components/Dashboard"
import Navbar from "./components/Navbar"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/dashboard" element={<><Navbar/><Dashboard /></>} />
      </Routes>
    </Router>
  );
}

export default App;
