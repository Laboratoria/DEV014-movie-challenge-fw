import './Pagination.css'

interface PaginationProps { //interface-> me especifica que PaginationProps es un objeto
  currentPage: number;
  totalPages: number;
  onSelectPage: (pageNumber: number) => void;
}



export function Pagination ({ currentPage, totalPages, onSelectPage }: PaginationProps) {
   //arreglo que cuanta desde cero hasta el numero total de pagina, covertir un numero en arreglo
  const pages = []
  for (let i = 1; i <= totalPages; i++){
    pages.push(i)
  }
  const onClick= (page)=>{
    onSelectPage(page)
  }
 return<div>
  {pages.map((page)=> {
    console.log(page, currentPage)
    if(currentPage === page){
      return <button className='currentPage' onClick={()=>onClick(page)}>{page}</button>
    }else {
      return <button className='otherpage'>{page}</button>
    }
    
  })}
 </div>
}




