import '../styles/navBar.css'; 

const Navbar = () => {
  return (
    <div className="navbar mx-2 mx-md-5 my-2">
      <div className="navbar__left">
        <h1 className='spectral-extrabold'>DevFlix</h1>
      </div>
      <div className="navbar__right d-flex justify-content-center">
        <button className="navbar__button mx-2 mx-md-4">Premium Trial</button>
        <div className="navbar__icons d-flex justify-content-center">
          <div ><img className='div-icons me-2 me-md-4' src="/lupa.png" alt="lupa"/></div>  
          <div ><img className='div-icons' src="user.png" alt="user" /></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;