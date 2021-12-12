import React from 'react'
import { Link } from 'react-router-dom';
import "./login.css"

function Login() {
  return (
    <div className="login">
      <div className="overlay"></div>
      <span className="loginTitle">Login</span>
      <div className="loginFormContainer">

      <form className="loginForm">
        <label>Email</label>
        <input className="loginInp" type="email" placeholder="enter your email"/>
        <label>Password</label>
        <input className="loginInp" type="password" placeholder="enter your password"/>
        <button className="loginButton_l" type="submit">Login</button>
      </form>
      <button className="RegisterButton_r">
        <Link to={"/register"} className='link'>Register</Link>
      </button>
      </div>
    </div>
  )
}

export default Login;
