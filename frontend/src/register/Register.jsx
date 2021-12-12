import React from 'react'
import { Link } from 'react-router-dom';
import "./register.css"

function Register() {
  return (
    <div className="register">
      <div className="overlay"></div>
      <span className="registerTitle">Register</span>
      <div className="registerFormContainer">

      <form className="registerForm">
      <label>Username</label>
        <input className="registerInp" type="text" placeholder="enter your userName" required/>
        <label>Email</label>
        <input className="registerInp" type="email" placeholder="enter your email" required/>
        <label>Password</label>
        <input className="registerInp" type="password" placeholder="enter your password" required/>
        <button className="RegisterButton" type="submit">Register</button>
      </form>
      <button className="loginButton">
        <Link to={"/login"} className='link'>Login</Link>
      </button>
      </div>
    </div>
  )
}

export default Register;
