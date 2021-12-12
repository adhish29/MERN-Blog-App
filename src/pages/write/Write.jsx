import React from 'react'
import "./write.css"

function Write() {
  return (
    <div className="write">
      <img src="https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="writeImg" className="writeImg" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
          <i class="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{display:"none"}}/>
          <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
        </div>
        <div className="writeFormGroup">
          <textarea placeholder="tell your story..." cols="30" rows="10" className="writeInput writeText"></textarea>
        </div>
        <button className="submit">Publish</button>
      </form>
    </div>
  )
}

export default Write
