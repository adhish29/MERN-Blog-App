import React from 'react'
import SideBar from '../../sidebar/SideBar'
import "./settings.css"

function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your account</span>
          <span className="settingsDeleteTitle">Delete your account</span>
        </div>
        <form className="settingsForm">
          <label htmlFor="">Profile Picture</label>
           <div className="settingsPP">
             <img src="https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="settingsPP" />
             <label htmlFor="fileInput">
             <i class="settingsPPIcon far fa-user-circle"></i>
             </label>
             <input type="file" id="fileInput" style={{display: "none"}}/>
           </div>
           <label>Username</label>
           <input type="text" placeholder="enter username"/>
           <label>email</label>
           <input type="email" placeholder="enter email" />
           <label>Password</label>
           <input type="password" placeholder="enter password"/>
           <button className="settingsSubmit" type="submit">Update</button>
        </form>
      </div>
      <SideBar/>
    </div>
  )
}

export default Settings
