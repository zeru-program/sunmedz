import React from 'react'
import "./App.css"

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Logo</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item d-flex flex-column px-3 pb-3 w-100">
              <a className="nav-link" aria-current="page" href="#">Check order</a>
              <button className='btn btn-block btn-primary'>Login / Register</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar