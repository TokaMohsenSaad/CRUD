import React from "react";

const SearchBar = ({ search }) => {
  return (
    <div className="w-75 mx-auto my-3">
      <input
        type="text"
        id="search-bar"
        className="form-control"
        placeholder="Search products..."
        onChange={search}
      />
    </div>
  );
};

export default SearchBar;
