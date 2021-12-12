import React from 'react'
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
      <span className="headerTitleSm">React & Node</span>
      <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src="https://images.pexels.com/photos/341013/pexels-photo-341013.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="blogPhoto" />

    </div>
  )
}

export default Header
