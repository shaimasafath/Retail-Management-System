import React from "react";

const SortDropdown = ({ sortBy, sortOrder, onChange }) => {
  const handleSortByChange = (e) => onChange({ sortBy: e.target.value, page: 1 });
  const handleOrderChange = (e) => onChange({ sortOrder: e.target.value, page: 1 });

  return (
    <div className="sort-dropdown">
      <select value={sortBy} onChange={handleSortByChange}>
        <option value="date">Date (Newest First)</option>
        <option value="quantity">Quantity</option>
        <option value="customerName">Customer Name (A–Z)</option>
      </select>
      <select value={sortOrder} onChange={handleOrderChange}>
        <option value="desc">Desc</option>
        <option value="asc">Asc</option>
      </select>
    </div>
  );
};

export default SortDropdown;
