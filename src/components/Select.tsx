import '../styles/select.css'
const SelectComponent= () =>{
    return(
      <div className="container-lg d-flex justify-content-center justify-content-md-start my-4 my-md-5 px-md-5">
        <select className="mx-2 me-md-4" name="" id="">
            <option value="" disabled selected>Filter by Genre</option>
        </select>
        <select name="" className='mx-2 orderby' id="">
            <option value="" disabled selected>Order by</option>
        </select>
      </div>  
    )
}
export default SelectComponent