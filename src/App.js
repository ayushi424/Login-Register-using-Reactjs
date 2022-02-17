import React from 'react';
import './App.css';
import Home from './components/home';
import LoginRegister from './components/loginregister';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
     
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login-register" element={<LoginRegister/>}/>
        </Routes>
    </Router> 
       </div>
   
  );
}

export default App;


