import postsData from "../posts.json";
import Article from "../components/Article";
import InputSearch from "../components/InputSearch";
import { useState } from "react";

export default function Homepage() {
  const [posts, setPosts] = useState(postsData);
  const [totalPosts, setTotalPosts] = useState(0);

  const onSearchChange = (value) => {
    const filterData = postsData.filter((data) => data.title.includes(value));
    setPosts(filterData);
    setTotalPosts(value.length === 0 ? 0 : filterData.length);
  };

  const handleShow = (isNew) => {
    const filteredData = postsData.filter((data) => data.isNew === isNew);
    setPosts(filteredData);
    setTotalPosts(filteredData.length);
  };

  return (
    <div>
      <h1 className="uppercase font-bold text-5xl text-center text-white py-4">
        Hezelnat Blog
      </h1>
      <div className="option flex gap-2 justify-center my-2">
        <button
          onClick={() => handleShow(true)}
          className="py-2 w-20 hover:scale-95 hover:bg-indigo-500 text-white px-5 rounded bg-indigo-600"
        >
          New
        </button>
        <button
          onClick={() => handleShow(false)}
          className="py-2 w-20 hover:scale-95 hover:bg-indigo-500 text-white px-5 rounded bg-indigo-600"
        >
          Old
        </button>
      </div>
      <InputSearch onSearch={onSearchChange} totalPosts={totalPosts} />
      {posts.map((props, index) => {
        return <Article {...props} key={index} />;
      })}
    </div>
  );
}
