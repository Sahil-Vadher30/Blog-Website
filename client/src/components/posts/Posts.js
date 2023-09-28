import React from "react";
import "./Posts.css";
import Post from "../post/Post";

function Posts({posts}) {
  return (
    <div className="posts">
      {/* <h1>posts: {JSON.stringify(posts)}</h1> */}
      {
        posts.map( (p, id) => {

          return <Post key={id} post={p} />
        })
      }
    </div>
  );
}

export default Posts;
