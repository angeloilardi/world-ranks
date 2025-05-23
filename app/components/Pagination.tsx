import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  totalItems,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 10;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={
            i === currentPage && endPage > 1 ? "border-b border-b-accent" : ""
          }
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="flex gap-4 flex-col pb-4">
      {totalItems > 0 && (
        <span className="text-gray-600">
          Showing {(currentPage - 1) * 10 + 1} -{" "}
          {Math.min(currentPage * 10, totalItems)} of {totalItems} results
        </span>
      )}
      <div className="flex gap-2.5 md:gap-4 max-w-fit">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="px-4 py-2 mb-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
        >
          <span>&lt;</span>
        </button>
        {renderPageNumbers()}
        <button
          onClick={handleNext}
          className="px-4 py-2 mb-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          <span>&gt;</span>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
