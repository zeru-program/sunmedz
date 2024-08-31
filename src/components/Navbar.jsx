import React, {useState} from 'react'
import "./Nav.css"

function Navbar() {
  const [logoNav, setLogoNav] = useState("bi-list")
  const [isClicked, setIsClicked] = useState(false);

  const HandleNavClick = () => {
    if (isClicked) {
      setLogoNav("bi-list");
    } else {
      setLogoNav("bi-x");
    }
    setIsClicked(!isClicked); // Toggle the state of isClicked
  };

  const HandleMode = () => {
    return 1
  } 

  return (
    <>
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="/">Logo</a>
        <div className="d-flex">
          <button className='btn btn-secondary text-primary btn-mode-ms' onClick={HandleMode}><i class="bi fw-bold bg-transparent bi-moon"></i></button>
          <button className="navbar-toggler" onClick={HandleNavClick} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className={`bi nav-span-bi bg-secondary ${logoNav}`} />
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
           <button className='btn btn-secondary text-primary btn-mode-xs' onClick={HandleMode}><i class="bi fw-bold bg-transparent bi-moon"></i></button>
           <a className="nav-link order-text" aria-current="page" href="#">Check order</a>
           <button className='btn btn-primary text-light btn-login'>Login / Register</button>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar