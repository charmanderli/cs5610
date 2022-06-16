import React from "react";

export default function SearchBar() {
  return (
    <form action="/" method="GET" className="searchBar">
      <input
        type="text"
        id="search"
        placeholder="  search for posts"
        name="s"
        className="searchInput"
      />
      <button type="submit" className="Button">
        Search
      </button>
    </form>
  );
}
