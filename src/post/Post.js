import React from "react";
import "./post.css";

function Post() {
  return (
    <>
      <div className="post">
        <img
          className="postImg"
          src="https://www.google.com/imgres?imgurl=https%3A%2F%2Ffreepngimg.com%2Fsave%2F22514-sport-clipart%2F590x405&tbnid=uY-fhMcSH9v_wM&vet=12ahUKEwj9iKGYm_iAAxXyoOkKHfMSBgEQMygaegQIARBt..i&imgrefurl=https%3A%2F%2Ffreepngimg.com%2Fpng%2F22514-sport-clipart%2Fdownload&docid=xm0m1ZmbpN_c_M&w=590&h=405&q=sports%20image%20in%20jpg&ved=2ahUKEwj9iKGYm_iAAxXyoOkKHfMSBgEQMygaegQIARBt"
          alt="images"
        />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCats">Music</span>
            <span className="postCats">Life</span>
            {/* postCats : post categories */}
          </div>
          <span className="postTitle">Lorem ipsum dolor sit amet.</span>
          <hr />
          <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
          commodi ratione sit eaque animi id suscipit minus laboriosam dicta
          repellat!
        </p>
      </div>
    </>
  );
}

export default Post;
