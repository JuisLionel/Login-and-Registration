import "../CSS/Login-Style.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { FaFacebookF, FaLinkedin, FaGoogle } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const [validated, setValidated] = useState(false);
  const [correctUser, setCorrectUser] = useState(false);
  const [correctPassword, setCorrectPassword] = useState(false);

  useEffect(() => {
    let storedUsers = localStorage.getItem("userData");

    try {
      storedUsers = storedUsers ? JSON.parse(storedUsers) : [];
      if (!Array.isArray(storedUsers)) storedUsers = [];
    } catch (error) {
      storedUsers = [];
    }

    const foundUser = storedUsers.find(
      (storedUser) => storedUser.username === user || storedUser.email === user
    );

    setCorrectUser(!!foundUser);
    setCorrectPassword(foundUser ? foundUser.password === password : false);
  }, [user, password]);

  const handleLogin = () => {
    setValidated(true);

    if (!user || !password) {
      alert("Please fill in all fields.");
      return;
    }

    if (!correctUser) {
      alert("User or Email does not exist. Please register.");
      return;
    }

    if (!correctPassword) {
      alert("Incorrect password. Please try again.");
      return;
    }

    alert("Login Successful!");
    localStorage.setItem("isLogin?", true);
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="Login">
      <div className="Login-Image">
        <img src="./img/Work.jpg" alt="Work" />
      </div>

      <div className="Login-Info">
        <h1>Login</h1>

        <div className="Login-Input">
          <Input
            placeholder={validated && !user ? "Please enter your username or email" : "Username or Email"}
            size="large"
            prefix={<UserOutlined />}
            style={{ marginTop: "10px" }}
            onChange={(e) => setUser(e.target.value)}
            status={validated && (!user || !correctUser) ? "error" : "default"}
          />

          <Input.Password
            placeholder={validated && !password ? "Please enter your password" : "Password"}
            size="large"
            prefix={<LockOutlined />}
            style={{ marginTop: "10px" }}
            onChange={(e) => setPassword(e.target.value)}
            status={validated && (!password || (correctUser && !correctPassword)) ? "error" : "default"}
          />
        </div>

        <div className="checkbox-group-Login">
          <div className="checkbox">
            <input type="checkbox" id="terms" />
            <p className="ChangeColor">Remember Me</p>
          </div>

          <div className="Forgot-Passwords">
            <a href="/" style={{ color: "gray", marginLeft: "210px" }}>
              Forgot Password
            </a>
          </div>
        </div>

        <button className="Login-Button" onClick={handleLogin}>
          Log In
        </button>

        <div className="line-container">
          <div className="line"></div>
          <span className="line-text">Other log in methods</span>
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
    </div>
  );
};

export default Login;
