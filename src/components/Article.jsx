function Article(props) {
  const handleClick = () => {
    alert("Button diklik!");
  };

  return (
    <div className="p-4 my-2 text-white flex flex-col items-start gap-2">
      <div>
        <h1 className="font-medium">{props.title}</h1>
        <p>Date : {props.date}</p>
        <p>Tags : {props.tags.join(", ")} </p>
      </div>
      <button
        onClick={handleClick}
        className="py-1 px-6 bg-teal-600 text-slate-200 rounded-md cursor-pointer hover:bg-teal-500 transition-all duration-100"
      >
        Detail
      </button>
    </div>
  );
}

export default Article;
