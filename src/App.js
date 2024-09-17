import './App.css';
import Signin from './components/Signin';
import RegisterEmployee from './components/RegisterEmployee';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={<Signin/>} />
        <Route exact path='/signin' element={<Signin/>} />
        <Route exact path='/employee' element={<RegisterEmployee/>}/>
      </Routes>
    </Router>
  );
}

export default App;
