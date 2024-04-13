import React from "react";
import { useState } from "react";

function InputSearch(props) {
  const [search, setSearch] = useState("");

  const changeSearch = (e) => {
    setSearch(e.target.value);
    props.onSearch(e.target.value);
  };

  return (
    <div className="p-2 flex max-w-md mx-auto flex-wrap gap-3 items-center justify-center">
      <label htmlFor="search" className="text-white text-lg">
        Cari Artikel :
      </label>
      <input
        onChange={changeSearch}
        type="text"
        className="px-2 py-1 rounded bg-slate-100 outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
      />
      <small className="text-white text-base">
        Ditemukan {props.totalPosts} data dengan kata pencarian {search}
      </small>
    </div>
  );
}

export default InputSearch;
