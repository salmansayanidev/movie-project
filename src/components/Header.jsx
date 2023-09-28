import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import logo from "../images/movie-logo.svg" 
import "../index.css"
import { Link } from "react-router-dom"



const Header = () => {
    return (
        <>
        <header id="header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-2">
                        <div className="logo">
                            <Link to='/'>
                                <img src={logo} alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-5">
                        <nav className="navigation">
                            <ul className="header-ul">
                                <li>
                                    {/* <a className="links" href="#">movies</a> */}
                                    {/* <Link to="/movie" className="links">movies</Link> */}
                                    <div className="dropdown">
                                        <button className="links btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            movies
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link className="dropdown-item" to='/movie'>Popular</Link>                                                
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to='/movie/now-playing'>Now Playing</Link>                                                
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to='/movie/upcoming'>Upcoming</Link>                                                
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to='/movie/top-rated'>Top Rated</Link>                                                
                                            </li>
                                            {/* <li><a class="dropdown-item" href="#">Now Playing</a></li> */}
                                            {/* <li><a class="dropdown-item" href="#">Upcoming</a></li> */}
                                            {/* <li><a class="dropdown-item" href="#">Upcoming</a></li> */}
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                     {/* <a className="links" href="#">TV Shows</a> */}
                                    <Link to="/movie" className="links">TV Shows</Link>
                                </li>
                                <li>
                                    {/* <a className="links" href="#">People</a> */}
                                    <Link to="/movie" className="links">People</Link>
                                </li>
                                <li>
                                    {/* <a className="links" href="#">More</a> */}
                                    <Link to="/movie" className="links">More</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        </>
    );
    }



export default Header;