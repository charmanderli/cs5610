import React from "react";

export default function Post({ post }) {
  return (
    <div className="postContainer">
      <div className="postImg">
        <img src={require("./logo.png")} alt="placeholder" />
      </div>
      <div className="textComment">
        <h2>{post.title}</h2>
        <p>{post.city}</p>
        <p>{post.id}</p>
        <p>{post.body}</p>
        <p>likes: {post.likes}</p>
      </div>
      <div className="section">
        <div className="sectionTag">{post.section}</div>
      </div>
    </div>
  );
}
