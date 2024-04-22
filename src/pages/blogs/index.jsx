import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function Blog() {
  const externalPost = useLoaderData();
  return (
    <div className="external-post p-4 bg-orange-200">
      <h2 className="text-3xl font-semibold">My Blog Post</h2>
      {externalPost.slice(0, 20).map((item, index) => (
        <div key={index}>
          <Link to={`/blog/${item.id}`}>- {item.title}</Link>
        </div>
      ))}
    </div>
  );
}

export default Blog;
