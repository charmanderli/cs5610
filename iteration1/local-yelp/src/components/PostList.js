import React, { useEffect, useState } from "react";
import Post from "./Post";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:3000/posts");
        if (!res.ok) {
          throw Error("fetch failed");
        }
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);

  return posts.length > 0 ? (
    <>
      {posts.map((item) => (
        <Post key={item.id} post={item} />
      ))}
    </>
  ) : (
    <li>nothing here!</li>
  );
}
