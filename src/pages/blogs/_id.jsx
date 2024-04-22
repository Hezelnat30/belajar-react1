import { useLoaderData } from "react-router-dom";

function detailPost() {
  const post = useLoaderData();
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
