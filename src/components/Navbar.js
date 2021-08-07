import React from 'react'
import PropTypes from "prop-types"

 function Navbar(props) {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark blackk">
  <a className="navbar-brand ml-3" href="#">
  <i class="fab fa-github-square"></i>
  </a>
 
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNavDropdown"
    aria-controls="navbarNavDropdown"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
  
  
    <span className="navbar-toggler-icon" />
  </button>
  
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
  <form className="form-inline">
  <input
    className="form-control "
    type="search"
    placeholder="Search or jump to..."
    aria-label="Search"
  />

</form>
    <ul className="navbar-nav">
      <li className="nav-item ">
        <a className="nav-link" href="#">
       <span className="spaan"> Pull requests </span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
        <span className="spaan">Issues</span>
          

        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
        <span className="spaan">Marketplace
        </span>
 

        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
       <span className="spaan"> Explore</span>
        </a>
      </li>
      
    </ul>
    
    
  </div>
  <a className="mr-3" href="#"><i class="fas fa-bell"></i></a>
<a className="mr-3"  href="#">  <i class="fas fa-plus"></i></a>
  <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
        <i class="fas fa-portrait"></i>
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">
            Action
          </a>
          <a className="dropdown-item" href="#">
            Another action
          </a>
          <a className="dropdown-item" href="#">
            Something else here
          </a>
        </div>
      </li>
</nav>

        </div>
    )
}


export default Navbar;
