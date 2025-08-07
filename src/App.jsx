import Register from './Page/Register';
import Profile from './Page/Profile';
import NoPage from './Page/NoPage';
import Login from './Page/Login';
import Home from './Page/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from "react";

import './App.css'; 

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isLogin?")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>

          {!isLogin ? (
            <>
              <Route path='/' element={<Login />} />
              <Route path='/Login' element={<Login />} />
              <Route path='/Register' element={<Register />} />
            </>
          ) : (
            <>
              <Route path='/' element={<Home />} />
              <Route path='/Profile' element={<Profile />} />
            </>
          )}

          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;

