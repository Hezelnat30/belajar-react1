import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function detailPost() {
  const params = useParams();
  const [post, setPost] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then(
      (res) => res.json().then((data) => setPost(data))
    );
  }, []);

  return (
    <div>
      <div className="bg-indigo-800 flex justify-center items-center flex-col px-10 py-6">
        <h2 className="text-white text-5xl font-bold">{post?.title}</h2>
        <p className="text-white font-medium text-xl">{post?.body}</p>
      </div>
    </div>
  );
}

export default detailPost;
