import { useState, useEffect } from 'react'
import api from '../api'
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import '../../src/index.css'
import Loader from "react-js-loader";
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



const PopularMovies = () => {

    const [popularMovies, setPopularMovies] = useState([]);
    // const [displayedProducts, setDisplayedProducts] = useState([])
    // const [visibleProducts, setvisibleProducts] = useState(20)
    // const [productTotal, setproductTotal] = useState(0)




    useEffect(() => {

            const getPopularMovies = async () => {
                const res = await api.get(`/movie/popular?language=en-US&page=1`)
    
                if (res.status === 200) {
                    setPopularMovies(res.data.results)
    
                }
            }
            getPopularMovies();


    }, []);

    return (
        <>
            <section>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-12'>
                            <h2 className='trend-movies-sec-title'>popular movies</h2>
                        </div>
                        <div className='col-12'>
                            <div className="row">
                                <div  className='popularmovies'>
                                    {popularMovies  && popularMovies.length ? (
                                        popularMovies.map( (product , index ) => (
                                            <Link key={index} to={`/movie/${product.id}`}>
                                                <div  className='popularmovie'>
                                                    <img className='img-fluid popularmovie-img' src={"https://image.tmdb.org/t/p/w500/"+product.poster_path} alt="" />
                                                    <h1 className='trendmovie-title'>{product.title}{product.name}</h1>
                                                    <p className='release-date'>{product.release_date}{product.first_air_date}</p>
                                                    <div className='abc'>
                                                        <CircularProgressbar styles={buildStyles({ backgroundColor: "black" })} background backgroundPadding={6}  value={(product.vote_average * 10).toFixed()} text={`${(product.vote_average * 10).toFixed()}%`} />
                                                    </div>
                                                </div>
                                            </Link>
                                        ))
                                        ) : (
                                        <div className="row justify-content-center align-items-center">
                                            <div className="col-3">
                                                <div className={"item"}>
                                                    <Loader type="spinner-circle" bgColor={"black"} color={'black'} size={100} />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PopularMovies;