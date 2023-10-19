import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import logo from "../images/movie-logo.svg";
import "../index.css";
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Header = () => {

  const [ showMenu , setShowMenu] = useState(false)
  
  const handleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <>
      <header id="header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-5 col-md-4 col-lg-3">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-5 col-6">
              <nav className={showMenu ? "navigation active" : "navigation"}>
                <ul className="header-ul">
                  <li>
                    <div className="dropdown">
                      <button
                        className="links btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        movies
                      </button>
                      <ul className="dropdown-menu">
                        <li onClick={handleMenu}>
                          <Link className="dropdown-item" to="/movie">
                            Popular
                          </Link>
                        </li>
                        <li onClick={handleMenu}>
                          <Link
                            className="dropdown-item"
                            to="/movie/now-playing"
                          >
                            Now Playing
                          </Link>
                        </li>
                        <li onClick={handleMenu}>
                          <Link className="dropdown-item" to="/movie/upcoming">
                            Upcoming
                          </Link>
                        </li>
                        <li onClick={handleMenu}>
                          <Link className="dropdown-item" to="/movie/top-rated">
                            Top Rated
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown">
                      <button
                        className="links btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        TV Shows
                      </button>
                      <ul className="dropdown-menu">
                        <li onClick={handleMenu}>
                          <Link className="dropdown-item" to="/tv/airing-today">
                            Airing Today
                          </Link>
                        </li>
                        <li onClick={handleMenu}>
                          <Link className="dropdown-item" to="/tv/on-the-air">
                            On Tv
                          </Link>
                        </li>
                        <li onClick={handleMenu}>
                          <Link className="dropdown-item" to="/tv">
                            Popular
                          </Link>
                        </li>
                        <li onClick={handleMenu}>
                          <Link className="dropdown-item" to="/tv/top-rated">
                            Top Rated
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown">
                      <button
                        className="links btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        People
                      </button>
                      <ul className="dropdown-menu">
                        <li onClick={handleMenu}>
                          <Link className="dropdown-item" to="/person">
                            Popular People
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* <a className="links" href="#">People</a>
                                    <Link to="/movie" className="links">People</Link> */}
                  </li>
                  <li>
                    <div className="dropdown">
                      <button
                        className="links btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        More
                      </button>
                      <ul className="dropdown-menu">
                        <li onClick={handleMenu}>
                          <Link className="dropdown-item" to="/movie">
                            Discussions
                          </Link>
                        </li>
                        <li onClick={handleMenu}>
                          <Link
                            className="dropdown-item"
                            to="/movie/now-playing"
                          >
                            Leaderboard
                          </Link>
                        </li>
                        <li onClick={handleMenu}>
                          <Link className="dropdown-item" to="/movie/upcoming">
                            Support
                          </Link>
                        </li>
                        <li onClick={handleMenu}>
                          <Link className="dropdown-item" to="/movie/top-rated">
                            API
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </nav>
              <div className="menu-btn-area">
                <div className="menu-btn" onClick={handleMenu}>
                  {showMenu ?  (
                    <FontAwesomeIcon icon={faXmark} />
                  ) : (
                    <FontAwesomeIcon icon={faBars} />

                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
