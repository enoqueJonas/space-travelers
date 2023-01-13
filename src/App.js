import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Missions from './pages/Missions.js';
import MyProfile from './pages/MyProfile.js';
import Navbar from './components/Navbar/Navbar.js';

function App() {
  return (
    <div className='wrapper'>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Missions/>}/>
        <Route path='/myprofile' element={<MyProfile/>}/>
      </Routes>
    </div>
  );
}

export default App;
