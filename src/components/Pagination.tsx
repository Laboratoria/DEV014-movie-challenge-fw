import "./Pagination.css";

interface PaginationProps {
  //interface-> me especifica que PaginationProps es un objeto
  currentPage: number;
  totalPages: number;
  onSelectPage: (pageNumber: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onSelectPage,
}: PaginationProps) {
  //arreglo que cuanta desde cero hasta el numero total de pagina, covertir un numero en arreglo
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  const onClick = (page) => {
    onSelectPage(page);
  };
  const onBack = () => {
    onSelectPage(currentPage - 1);
  };
  const onNext = () => {
    onSelectPage(currentPage + 1);
  }
  return (
    <div className="containerButton">
      <button disabled={currentPage === 1} onClick={onBack}>
      &lt;Anterior
      </button>

      {pages.map((page) => {
        if (currentPage === page) {
          return (
            <button className="currentPage" onClick={() => onClick(page)} key={page}>
              {page}
            </button>
          );
        } else {
          return (
            <button className="otherpage" onClick={() => onClick(page)} key={page}>
              {page}
            </button>
          );
        }
      })}
      <button disabled={totalPages === currentPage} onClick={onNext}>Siguiente &gt;</button>
    </div>
  );
}
