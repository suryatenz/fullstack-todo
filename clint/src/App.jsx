import './App.css'
import React from 'react';
import { BrowserRouter, Navigate , Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './components/Login'
import Home from './components/Home'
import Alllog from './components/Alllog';

const App = () => {

  const log = useSelector(state => state.login);
  return (
    // <BrowserRouter>
    //   <Routes>
    //     {/* {!log ? <Route path="/" element={<Login />} />:<Navigate to="/home" />} */}
    //     <Route path="/"
    //       element={!log ? <Alllog/> : <Navigate to="/home" />}
    //     />
    //     <Route path='/home'
    //      element = {log?<Home/>:<Navigate to='/'></Navigate>}
    //      />
    //     <Route path="/home" element={<Home />} />
    //   </Routes>
    // </BrowserRouter>
    <>
    <Home/>
    </>
  );
};

export default App;
