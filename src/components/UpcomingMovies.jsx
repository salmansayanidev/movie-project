import { useState, useEffect } from 'react'
import api from '../api'
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import '../../src/index.css'


const UpcomingMovies = () => {

    const [UpcomingMovies, setUpcomingMovies] = useState([]);

    useEffect(() => {

        const getMovies = async () => {
            const res = await api.get(`/movie/upcoming?language=en-US&page=1`)

            if (res.status === 200) {
                setUpcomingMovies(res.data.results)
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
                            <h2 className='trend-movies-sec-title'>upcoming movies</h2>
                        </div>
                        <div className='col-12'>
                            <div className="row">
                                <div className='popularmovies'>
                                    {UpcomingMovies  && UpcomingMovies.length ? (
                                        UpcomingMovies.map( (UpcomingMovie , index ) => (
                                            <Link key={index} to={`/movie/${UpcomingMovie.id}`}>
                                                <div  className='popularmovie'>
                                                    <img className='img-fluid popularmovie-img' src={"https://image.tmdb.org/t/p/w500/"+UpcomingMovie.poster_path} alt="" />
                                                    <h1 className='trendmovie-title'>{UpcomingMovie.title}{UpcomingMovie.name}</h1>
                                                    <p className='release-date'>{UpcomingMovie.release_date}{UpcomingMovie.first_air_date}</p>
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

export default UpcomingMovies;