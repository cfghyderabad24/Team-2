import React, { useState, useContext } from 'react';
import axios from 'axios';
import './Login.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const Login = () => {
  const [rightPanelActive, setRightPanelActive] = useState(false);
  const [signUpData, setSignUpData] = useState({ username: '', email: '', password: '' });
  const [signInData, setSignInData] = useState({ email: '', password: '' });
  const { login } = useContext(AuthContext);

  const handleSignInClick = () => {
    setRightPanelActive(false);
  };

  const handleSignUpClick = () => {
    setRightPanelActive(true);
  };

  const handleInputChange = (e, setState, state) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  
  const navigate = useNavigate();

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    console.log('Sign up data:', signUpData); // Log request data
    try {
      const response = await axios.post('http://localhost:8080/registration', signUpData);
      console.log('Sign up response:', response.data);
      setRightPanelActive(false); // Switch to the sign-in form after successful sign-up
    } catch (error) {
      console.error('Error during sign up:', error);
    }
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    console.log('Sign in data:', signInData); // Log request data
    try {
      const response = await axios.post('http://localhost:8080/login', signInData);
      console.log('Sign in response:', response.data);
      login(); // Update the auth context to reflect the logged-in state
      navigate("/home")
    } catch (error) {
      console.error('Error during sign in:', error);
    }
  };

  return (
    <div className="login-container">
      <div className={`container ${rightPanelActive ? 'right-panel-active' : ''}`}>
        <div className="container__form container--signup">
          <form className="form" onSubmit={handleSignUpSubmit}>
            <h2 className="form__title">Sign Up</h2>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={signUpData.username}
              onChange={(e) => handleInputChange(e, setSignUpData, signUpData)}
              className="input"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={signUpData.email}
              onChange={(e) => handleInputChange(e, setSignUpData, signUpData)}
              className="input"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={signUpData.password}
              onChange={(e) => handleInputChange(e, setSignUpData, signUpData)}
              className="input"
            />
            <button className="btn">Sign Up</button>
          </form>
        </div>

        <div className="container__form container--signin">
          <form className="form" onSubmit={handleSignInSubmit}>
            <h2 className="form__title">Sign In</h2>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={signInData.email}
              onChange={(e) => handleInputChange(e, setSignInData, signInData)}
              className="input"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={signInData.password}
              onChange={(e) => handleInputChange(e, setSignInData, signInData)}
              className="input"
            />
            <button className="btn">Sign In</button>
          </form>
        </div>

        <div className="container__overlay">
          <div className="overlay">
            <div className="overlay__panel overlay--left">
              <button className="btn" onClick={handleSignInClick}>
                Sign In
              </button>
            </div>
            <div className="overlay__panel overlay--right">
              <button className="btn" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
