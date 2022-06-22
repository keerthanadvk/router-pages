import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Navbar';
import Login from './Login';
import Dashboard from './Dashboard';
import About from './About';

const App = () => {
  return (
     <Router>
       <div> 
       <Navbar />
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
        </div>
      </Router>
 
  )
}

export default App