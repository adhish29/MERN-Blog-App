import React from 'react'
import "./sidebar.css"

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span>ABOUT ME</span>
        <img src="https://images.pexels.com/photos/240561/pexels-photo-240561.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="profile_image" />
      
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, consequuntur ducimus repellendus eum voluptatem non amet architecto possimus voluptas voluptatum quod totam consectetur dolor perspiciatis aut sapiente! Placeat, sint quis?</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Movies</li>
        </ul>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
        <i className="sidebarIcon fab fa-twitter-square"></i>
        <i className="sidebarIcon fab fa-facebook-square"></i>
        <i className="sidebarIcon fab fa-instagram-square"></i>
        <i className="sidebarIcon fab fa-github-square"></i>
        </div>
      </div>
    </div>
  )
}

export default SideBar
