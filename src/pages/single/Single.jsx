import React from 'react'
import SideBar from '../../sidebar/SideBar'
import SinglePost from '../../singlePost/SinglePost'
import "./single.css"

function Single() {
  return (
    <div className="single">
      <SinglePost/>
      <SideBar/>
    </div>
  )
}

export default Single
