import "../CSS/Register-style.css";
import { FaFacebookF, FaLinkedin, FaGoogle } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { MdOutlineMail } from "react-icons/md";

const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const [terms, setTerms] = useState(false);
  const [validated, setValidated] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const [usernameExists, setUsernameExists] = useState(false);
  const [emailError, setEmailError] = useState(false);

  useEffect(() => {
    let storedUsers = localStorage.getItem("userData");

    try {
      storedUsers = storedUsers ? JSON.parse(storedUsers) : [];
      if (!Array.isArray(storedUsers)) storedUsers = [];
    } catch (error) {
      storedUsers = [];
    }

    setEmailExists(storedUsers.some((user) => user.email === email));
    setUsernameExists(storedUsers.some((user) => user.username === username));
  }, [email, username]);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegister = () => {
    setValidated(true);
    setEmailError(!validateEmail(email));

    if (!username || !email || !password || !confirmPassword) return;

    if (emailError) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!terms) {
      alert("You must accept the Terms of Service to register.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (usernameExists) {
      alert("Username is already registered.");
      return;
    }

    if (emailExists) {
      alert("Email is already registered.");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters long."); 
      return;
    }

    let storedUsers = localStorage.getItem("userData");

    try {
      storedUsers = storedUsers ? JSON.parse(storedUsers) : [];
      if (!Array.isArray(storedUsers)) storedUsers = [];
    } catch (error) {
      storedUsers = [];
    }

    storedUsers.push({ username, email, password });
    localStorage.setItem("userData", JSON.stringify(storedUsers));

    alert("Account successfully created!");
    navigate("/login");
  };

  return (
    <div className="Register">
      <div className="Register-Info">
        <h1>Create account</h1>

        <div className="Register-Input">
          <Input
            placeholder={validated && !username ? "Please enter your username" : "Username"}
            size="large"
            prefix={<UserOutlined />}
            style={{ marginTop: "10px" }}
            onChange={(e) => setUsername(e.target.value)}
            status={
              validated && (!username || usernameExists) ? "error" : "default"
            }
          />

           <Input
            placeholder={validated && !email ? "Please enter your email" : "Email"}
            size="large"
            type="email"
            prefix={<MdOutlineMail size={17} />}
            style={{ marginTop: "10px" }}
            onChange={(e) => setEmail(e.target.value)}
            status={
              validated && (!email || emailExists || emailError) ? "error" : "default"
            }
          />

          <Input.Password
            placeholder={validated && !password ? "Please enter your password" : "Password"}
            size="large"
            prefix={<LockOutlined />}
            style={{ marginTop: "10px" }}
            onChange={(e) => setPassword(e.target.value)}
            status={validated && (!password || password !== confirmPassword || password.length < 8 ) ? "error" : "default"}
          />

          <Input.Password
            placeholder={validated && !confirmPassword ? "Please confirm your password" : "Confirm password"}
            size="large"
            prefix={<LockOutlined />}
            style={{ marginTop: "10px" }}
            onChange={(e) => setConfirmPassword(e.target.value)}
            status={validated && (!confirmPassword || password !== confirmPassword || password.length < 8) ? "error" : "default"}
          />
        </div>

        <div className="checkbox-group">
          <input type="checkbox" onChange={(e) => setTerms(e.target.checked)} />
          <p>I agree to the</p>
          <a href="/"> Terms of Service </a>
        </div>

        <button className="Register-Button" onClick={handleRegister}>
          Register
        </button>

        <div className="line-container">
          <div className="line"></div>
          <span className="line-text">Other Register methods</span>
          <div className="line"></div>
        </div>

        <div className="icon-container">
          <a href="/" className="icon Facebook">
            <div className="icon-wrapper">
              <FaFacebookF size={30} />
            </div>
          </a>

          <a href="/" className="icon Linkedin">
            <div className="icon-wrapper">
              <FaLinkedin size={30} />
            </div>
          </a>

          <a href="/" className="icon Google">
            <div className="icon-wrapper">
              <FaGoogle size={30} />
            </div>
          </a>
        </div>
      </div>

      <div className="Register-Image">
        <img src="/img/Work.jpg" alt="Work" />
      </div>
    </div>
  );
};

export default Register;
