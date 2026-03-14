import "../styles/pagination.css";

const Pagination = ({ currentPage, totalPages, onPageChange }: any) => {

  const pages = [];

  /* Show only first 5 pages like template */
  const maxPages = Math.min(totalPages, 5);

  for (let i = 1; i <= maxPages; i++) {
    pages.push(i);
  }

  return (

    <div className="pagination">

      <button
        className="arrow"
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
      >
        {"<"}
      </button>

      {pages.map((p) => (

        <button
          key={p}
          className={p === currentPage ? "active" : ""}
          onClick={() => onPageChange(p)}
        >
          {p.toString().padStart(2, "0")}
        </button>

      ))}


      <button
        className="arrow"
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
      >
        {">"}
      </button>

    </div>
    

  );

};

export default Pagination;