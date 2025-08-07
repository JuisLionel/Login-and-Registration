import "../CSS/Navbar-style.css";

import { useEffect, useState } from 'react';


function Navbar() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isLogin?")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  const logout = () => {localStorage.removeItem('isLogin?'); window.location.reload();};

  return (
    <div className="Navbar">
      <div className="Navbar-Logo">
        <a href="/Easter">
          <h1>HomeWork</h1>
        </a>
      </div>

      <input type="checkbox" id="sidebar-activate" />
      <label htmlFor="sidebar-activate" className="Open-Button">
        <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#ffffff">
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </label>

      <label id="overlay" htmlFor="sidebar-activate"></label>
      
      <div className="Links">
        <label htmlFor="sidebar-activate" className="Close-Button">
          <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#ffffff">
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </label>


        {!isLogin ? (
          <>
            <a href="/Login">Login</a>
            <a href="/Register">Register</a>
          </>
        ) : (
          <>
            <a href="/">Home</a>
            <a href="/Profile">Profile</a>
            <a href="/Login" onClick={logout}>logout</a>
          </>
        )}


      </div>
    </div>
  );
}

export default Navbar;