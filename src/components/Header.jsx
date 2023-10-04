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
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="dropdown">
                                        <button className="links btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            TV Shows
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link className="dropdown-item" to='/tv/airing-today'>Airing Today</Link>                                                
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to='/tv/on-the-air'>On Tv</Link>                                                
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to='/movie/upcoming'>Popular</Link>                                                
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to='/movie/top-rated'>Top Rated</Link>                                                
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <a className="links" href="#">TV Shows</a>
                                    <Link to="/movie" className="links">TV Shows</Link> */}
                                </li>
                                <li>
                                    <div className="dropdown">
                                        <button className="links btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            People
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link className="dropdown-item" to='/person'>Popular People</Link>                                                
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <a className="links" href="#">People</a>
                                    <Link to="/movie" className="links">People</Link> */}
                                </li>
                                <li>
                                    <div className="dropdown">
                                        <button className="links btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            More
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link className="dropdown-item" to='/movie'>Discussions</Link>                                                
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to='/movie/now-playing'>Leaderboard</Link>                                                
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to='/movie/upcoming'>Support</Link>                                                
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to='/movie/top-rated'>API</Link>                                                
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <a className="links" href="#">More</a>
                                    <Link to="/movie" className="links">More</Link> */}
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