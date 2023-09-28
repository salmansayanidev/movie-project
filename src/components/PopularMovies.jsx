import { useState, useEffect } from 'react'
import api from '../api'
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import '../../src/index.css'


const PopularMovies = () => {

    const [popularMovies, setPopularMovies] = useState([]);
    const [displayedProducts, setDisplayedProducts] = useState([])
    const [visibleProducts, setvisibleProducts] = useState(20)
    const [productTotal, setproductTotal] = useState(0)




    useEffect(() => {

        const getPopularMovies = async () => {
            const res = await api.get(`/movie/popular?language=en-US&page=${visibleProducts}`)

            if (res.status === 200) {
                setPopularMovies(res.data.results)
                setproductTotal(res.total_pages)

            }
        }
        getPopularMovies();
        setDisplayedProducts(popularMovies.slice(0, visibleProducts));

    }, [popularMovies, visibleProducts]);

    const handleShowMoreProducts = () => {
        setvisibleProducts(prevCount => prevCount + 20);
      };

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
                                    {displayedProducts  && displayedProducts.length ? (
                                        displayedProducts.map( (product , index ) => (
                                            <Link key={index} to={`/movie/${product.id}`}>
                                                <div  className='popularmovie'>
                                                    <img className='img-fluid popularmovie-img' src={"https://image.tmdb.org/t/p/w500/"+product.poster_path} alt="" />
                                                    <h1 className='trendmovie-title'>{product.title}{product.name}</h1>
                                                    <p className='release-date'>{product.release_date}{product.first_air_date}</p>
                                                </div>
                                            </Link>
                                        ))
                                        ) : (
                                        <p>plaese wait</p>
                                    )}

                                    <div className="col-2">
                                        {productTotal > popularMovies.length ? (
                                            <>
                                                <button className="load-more" onClick={handleShowMoreProducts}>Load More</button>
                                            </>
                                            ) :
                                            
                                            <p className="loading-para">no more movies</p>
                                        }
                                    </div>
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