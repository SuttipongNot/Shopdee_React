import './App.css';
import Signin from './components/Signin';
import Signup from './components/Signup';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/signin' element={<Signin/>} />
        <Route exact path='/signup' element={<Signup/>}/>
      </Routes>
    </Router>
  );
}

export default App;
