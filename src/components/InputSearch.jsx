import React from "react";
import { useState } from "react";

function InputSearch(props) {
  const [search, setSearch] = useState("");

  const handleSearch = () => props.onSearch(search);

  const searchKeyDown = (e) => {
    e.key === "Enter" ? handleSearch() : "";
  };

  return (
    <div className="p-2 flex max-w-md mx-auto flex-wrap gap-3 items-center justify-center">
      <div className="form-search flex">
        <label htmlFor="search" className="text-white me-2 text-lg">
          Cari Artikel :
        </label>
        <input
          onKeyDown={searchKeyDown}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="px-2 py-1 rounded-l bg-slate-100 outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
        />
        <button
          onClick={handleSearch}
          className="px-2 py-1 rounded-r transition-all duration-100 bg-indigo-500 text-white hover:bg-indigo-400"
        >
          Cari
        </button>
      </div>
      <small className="text-white text-base">
        Ditemukan {props.totalPosts} data dengan kata pencarian {search}
      </small>
    </div>
  );
}

export default InputSearch;
