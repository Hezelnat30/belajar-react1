import posts from "../posts.json";
import Article from "../components/Article";
import InputSearch from "../components/InputSearch";

export default function Homepage() {
  return (
    <div>
      <h1 className="uppercase font-bold text-5xl text-center text-white py-4">
        Simple Blog
      </h1>
      <InputSearch />
      {posts.map(({ title, tags, date }) => {
        return <Article title={title} tags={tags} date={date} />;
      })}
    </div>
  );
}
