import React from 'react'
import "./singlepost.css"

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="singlePostImg" className="singlePostImg" />
        <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i class="singlePostIcon fas fa-edit"></i>
            <i class="singlePostIcon fas fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author <b>Adhish</b>
          </span>
          <span className="singlePostDate">
            1 hour ago
          </span>
        </div>
        <p className="singlePostDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam non veritatis explicabo esse id. Facere modi dolore corrupti doloribus atque vel in, ratione officiis nemo culpa voluptate autem natus ad dolor saepe iusto sunt sint laboriosam facilis molestiae similique. Quidem eligendi sapiente error similique nemo enim fuga itaque? Blanditiis, et? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt ipsum aut nobis, blanditiis neque vitae totam corrupti libero non facere molestiae illo consequatur doloremque quisquam ducimus aliquam nam! Numquam deleniti ad a est beatae adipisci quo, quam earum enim harum quasi delectus dolores non quas distinctio quisquam, nesciunt sapiente, perferendis facilis nemo suscipit? Possimus aliquam omnis, odit, quam aspernatur laudantium accusamus tempore quia dolorem nostrum reprehenderit placeat. Ullam quaerat hic ipsam nostrum debitis aliquam fugiat aut itaque similique voluptatem ut quas, sapiente, suscipit architecto necessitatibus! Dolores veniam, maiores id porro vero qui aliquid, quaerat, earum cupiditate molestias deserunt nobis accusamus!</p>
      </div>
    </div>
  )
}

export default SinglePost
