import React from "react";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search-bar">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by customer name or phone..."
      />
    </div>
  );
};

export default SearchBar;
