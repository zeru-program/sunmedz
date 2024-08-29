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

  return (
    <>
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="/">Logo</a>
        <button className="navbar-toggler" onClick={HandleNavClick} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className={`bi nav-span-bi bg-secondary ${logoNav}`} />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item d-flex flex-column px-3 pb-3 w-100">
              <a className="nav-link" aria-current="page" href="#">Check order</a>
              <button className='btn btn-block btn-primary text-light'>Login / Register</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar