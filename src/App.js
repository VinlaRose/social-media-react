//import Home from "./pages/home/Home";
import React from 'react';
import Topbar from './components/topbar/Topbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Profile from './pages/profilePage/profile';
import Login from './pages/login/login';
import Rightbar from './components/rightbar/Rightbar';


function App() {
  return(
    <>
    <Topbar/>


    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/profile" element={<Profile/>} />
    <Route path="/login" element={<Login/>}/>
    <Route path ="/profile" element={<Profile/>}/>
    <Route path ="/rightbar" element={<Rightbar/>}/>
    
    </Routes>
    </>
  );
}

export default App;
