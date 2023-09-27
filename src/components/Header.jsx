import "bootstrap/dist/css/bootstrap.css"
import logo from "../images/movie-logo.svg" 
import "../index.css"
// import { Link } from "react-router-dom"



const Header = () => {
    return (
        <>
        <header id="header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-2">
                        <div className="logo">
                            <a href="#"><img src={logo} alt="" /></a>
                        </div>
                    </div>
                    <div className="col-4">
                        <nav className="navigation">
                            <ul className="header-ul">
                                <li>
                                    <a className="links" href="#">moives</a>
                                    {/* <Link to="/" className="links">home</Link> */}
                                </li>
                                <li>
                                     <a className="links" href="#">TV Shows</a>
                                    {/* <Link to="/categories" className="links">categories</Link> */}
                                </li>
                                <li>
                                    <a className="links" href="#">People</a>
                                    {/* <Link to="/womens" className="links">womens</Link> */}
                                </li>
                                <li>
                                    <a className="links" href="#">More</a>
                                    {/* <Link to="/combos" className="links">shop</Link> */}
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