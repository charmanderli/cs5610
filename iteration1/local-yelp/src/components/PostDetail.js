import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch("http://localhost:5000/posts/${postId}");

        if (!res.OK) {
          throw Error("fetch failed");
        }

        const data = await res.json();
        console.log(data);
        setPost(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchPost();
  }, [postId]);

  return <post post={post} />;
}
