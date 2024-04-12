import postsData from "../posts.json";
import Article from "../components/Article";
import InputSearch from "../components/InputSearch";
import { useState } from "react";

export default function Homepage() {
  const [posts, setPosts] = useState(postsData);

  const onSearchChange = (value) => {
    const filterData = postsData.filter((data) => data.title.includes(value));
    setPosts(filterData);
  };
  return (
    <div>
      <h1 className="uppercase font-bold text-5xl text-center text-white py-4">
        Simple Blog
      </h1>
      <InputSearch onSearch={onSearchChange} />
      {posts.map((props, index) => {
        return <Article {...props} key={index} />;
      })}
    </div>
  );
}
