import React from "react";

const PaginationControls = ({ page, totalPages, onChangePage }) => {
  const handlePrev = () => {
    if (page > 1) onChangePage(page - 1);
  };
  const handleNext = () => {
    if (page < totalPages) onChangePage(page + 1);
  };

  return (
    <div className="pagination">
      <button onClick={handlePrev} disabled={page <= 1}>
        Previous
      </button>
      <span>
        Page {page} of {totalPages}
      </span>
      <button onClick={handleNext} disabled={page >= totalPages}>
        Next
      </button>
    </div>
  );
};

export default PaginationControls;
