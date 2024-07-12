import React from "react";

interface PaginatorProps {
  currentPage: number;
  totalPages: number;
  onSelectPage: (page: number) => void;
}

const Pagination: React.FC<PaginatorProps> = ({
  currentPage,
  totalPages,
  onSelectPage,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onSelectPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onSelectPage(currentPage + 1);
    }
  };
  // Número de casillas a mostrar
  const renderPaginationButtons = () => {
    const pagesToShow = 20;
    const halfPagesToShow = Math.floor(pagesToShow / 2);
    let startPage = Math.max(1, currentPage - halfPagesToShow);
    let endPage = startPage + pagesToShow - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - pagesToShow + 1);
    }

    const pageNumbers = [];

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li key={i}>
          <button
            onClick={() => onSelectPage(i)}
            className={currentPage === i ? "active" : ""}
          >
            {i}
          </button>
        </li>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="pagination">
      <ul>
        {currentPage > 1 && (
          <li>
            <button onClick={handlePrevious}>Back</button>
          </li>
        )}
        {renderPaginationButtons()}
        {currentPage !== totalPages && (
          <li>
            <button onClick={handleNext}>Next</button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
