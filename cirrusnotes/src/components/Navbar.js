import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {}, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/CirrusNotes">
            CirrusNotes
          </Link>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ||
                    location.pathname === "/CirrusNotes" ||
                    location.pathname === "/home"
                  }? "active":""`}
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-info"
                type="submit"
                style={{ marginRight: "3%" }}
              >
                Search
              </button>{" "}
            </form>
            {localStorage.getItem("token") ? (
              <form className=" my-2">
                <button
                  className="btn btn-outline-secondary"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </form>
            ) : (
              <form className="d-flex my-2">
                <Link
                  type="button"
                  className="btn btn-outline-secondary mx-2"
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  type="button"
                  className="btn btn-outline-secondary"
                  to="/signup"
                >
                  Signup
                </Link>
              </form>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
