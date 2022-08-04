import React from "react";
function Nav(){
    return(
        <nav className="navbar navbar-expand-lg bg-dark bg-gradient">
        <div className="container-fluid  ">
          <a className="navbar-brand indiceT" href="#" >Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className=" ">
          <li class="nav-item dropdown ru d-block d-md-block d-lg-none">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa-solid fa-bars"></i>
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Home</a></li>
            <li><a class="dropdown-item" href="#">About</a></li>
            <li><a class="dropdown-item" href="#">Services</a></li>
            <li><a class="dropdown-item" href="#">Contanc</a></li>
          </ul>
        </li>
        </div>




          <div className="collapse navbar-collapse ri " id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item indice1 ">
                <a className="nav-link active " aria-current="page" href="#">Home</a>
              </li>
              <li  className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link ">Contanc</a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    );
}
export default Nav;