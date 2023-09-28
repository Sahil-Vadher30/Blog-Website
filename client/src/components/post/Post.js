import React from "react";
import "./post.css";
import { Link } from 'react-router-dom'

function Post({post}) {
    const PublicFolder = "http://localhost:5000/images/";

  return (
    <>
      <div className="post">
        {post.photo && (
        <img
          className="postImg"
          src={ PublicFolder + post.photo}
          alt="images"
        />)
        }
        <div className="postInfo">
          <div className="postCats">
            {
              post.categories.map( (cat,id) => {
                return <span className="postCats" key={id} >{ cat }</span>
              })
            }
            {/* postCats : post categories */}
          </div>
          <Link to={`/post/${post._id}`} className="link">
            <span className="postTitle">{ post.title }</span>
          </Link>
          <hr />
          <span className="postDate">{ new Date(post.createdAt).toDateString() }</span>
        </div>
        <p className="postDesc">
          {post.desc}
        </p>
      </div>
    </>
  );
}

export default Post;
