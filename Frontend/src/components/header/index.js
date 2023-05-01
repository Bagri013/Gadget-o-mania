// import "./index.css";
import React from "react";

export default function Header() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <div>
      <nav className="navbar navbar-expand-sm fixed-top bg-light py-2">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Gadget-<i className="fa-solid fa-sack-dollar"></i>-Mania
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item ">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/deals">
                  Deals
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/Category"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/Laptop">
                      Laptop
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/Mobile">
                      Mobile Phones
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/Camera">
                      Camera
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/Gaming">
                      Gaming Accessories
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/Watch">
                      Smart Watches
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/Headset">
                      Headsets/Airpods
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/Speaker">
                      Speakers
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <button className="btn btn-outline-primary" onClick={handleLogout}>
              Logout
            </button>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
