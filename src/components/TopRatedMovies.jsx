import { useState, useEffect } from 'react'
import api from '../api'
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import '../../src/index.css'


const TopRatedMovies = () => {

    const [TopRatedMovies, setTopRatedMovies] = useState([]);

    useEffect(() => {

        const getMovies = async () => {
            const res = await api.get(`/movie/top_rated?language=en-US&page=1`)

            if (res.status === 200) {
                setTopRatedMovies(res.data.results)
            }
        }
        getMovies();

    }, []);


    return (
        <>
            <section>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-12'>
                            <h2 className='trend-movies-sec-title'>top rated movies</h2>
                        </div>
                        <div className='col-12'>
                            <div className="row">
                                <div className='popularmovies'>
                                    {TopRatedMovies  && TopRatedMovies.length ? (
                                        TopRatedMovies.map( (TopRatedMovie , index ) => (
                                            <Link key={index} to={`/movie/${TopRatedMovie.id}`}>
                                                <div  className='popularmovie'>
                                                    <img className='img-fluid popularmovie-img' src={"https://image.tmdb.org/t/p/w500/"+TopRatedMovie.poster_path} alt="" />
                                                    <h1 className='trendmovie-title'>{TopRatedMovie.title}{TopRatedMovie.name}</h1>
                                                    <p className='release-date'>{TopRatedMovie.release_date}{TopRatedMovie.first_air_date}</p>
                                                </div>
                                            </Link>
                                        ))
                                        ) : (
                                        <p>plaese wait</p>
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

export default TopRatedMovies;