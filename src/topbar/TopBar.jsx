import React from 'react'
import { Link } from 'react-router-dom';
import "./topbar.css";


function TopBar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
      <i className="fab fa-twitter-square"></i>
      <i className="fab fa-facebook-square"></i>
      <i className="fab fa-instagram-square"></i>
      <i className="fab fa-github-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topCenteritems">
          <li className="topCenteritem">
            <Link to={"/"} className='link'>HOME</Link>
          </li>
          <li className="topCenteritem">
          <Link to={"/"} className='link'>ABOUT</Link>
          </li>
          <li className="topCenteritem">
          <Link to={"/"} className='link'>CONTACT</Link>
          </li>
          <li className="topCenteritem">
          <Link to={"/write"} className='link'>WRITE</Link>
          </li>
          <li className="topCenteritem">
          {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ?
          (
            <img src={process.env.PUBLIC_URL + "/images/Profile-Photo-Wallpaper.jpg"} alt="" />
          ):
          (
            <ul className='topCenteritems'>
              <li className="topCenteritem">
                
              <Link to={"/login"} className='link'>LOGIN</Link>
              </li>
              <li className="topCenteritem">

              <Link to={"/register"} className='link'>REGISTER</Link>
              </li>
            </ul>
          )
        }
        <i className="fas fa-search"></i>
      </div>
    </div>
  )
}

export default TopBar
