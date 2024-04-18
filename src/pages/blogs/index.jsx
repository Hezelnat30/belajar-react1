import { useState, useEffect } from "react";
function Blog() {
  const [externalPost, setExternalPost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
      res.json().then((data) => setExternalPost(data))
    );
  }, []);
  return (
    <div className="external-post p-4 bg-orange-200">
      <h2 className="text-3xl font-semibold">My Blog Post</h2>
      {externalPost.slice(0, 20).map((item, index) => (
        <div key={index}> -{item.title} </div>
      ))}
    </div>
  );
}

export default Blog;
