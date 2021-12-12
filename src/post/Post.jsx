import React from 'react'
import "./post.css"

function Post() {
  return (
    <div className="post">
      <img className="postImg" src="https://images.pexels.com/photos/1010519/pexels-photo-1010519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="post_img" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit, amet</span>
        <hr />
        <span className="postDate">1 Hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe facilis expedita inventore perferendis error vitae quis natus obcaecati veritatis sequi voluptate placeat sapiente iusto doloribus quisquam, qui mollitia itaque dicta. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione quibusdam laborum quisquam sit eius possimus autem, eum molestiae nihil? Recusandae amet tempora adipisci est esse illo expedita reprehenderit modi fugiat?m20
      </p>
    </div>
  )
}

export default Post
