import React from "react";

export default function Post({ post }) {
  let postBody = post.body;
  post.body.length >= 200
    ? (postBody = postBody.slice(0, 200))
    : (postBody = post.body);

  return (
    <div className="postContainer">
      <div className="postImg">
        <img src={require("./logo.png")} alt="placeholder" />
      </div>
      <div className="textPost">
        <h2>{post.title}</h2>
        <p className="city">{post.city}</p>
        <p className="userId">{post.userId}</p>
        <p className="postBody">{postBody}...</p>
        <p>likes: {post.likes}</p>
      </div>

      <div className="section">
        <div className="sectionTag">{post.section}</div>
      </div>
    </div>
  );
}
