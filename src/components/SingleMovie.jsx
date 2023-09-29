import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import api from '../api'
import "bootstrap/dist/css/bootstrap.css"
import '../../src/index.css'


const SingleMovie = () => {

    const [singleMovie, setSingleMovie] = useState([]);
    const { id } = useParams();

    useEffect(() => {

        const getPopularMovies = async () => {
            const res = await api.get(`/movie/${id}?language=en-US`)

            if (res.status === 200) {
                setSingleMovie(res.data.results)
                console.log(res)

            }
        }
        getPopularMovies();

    }, []);


    return (
        <>
            <section>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-11'>
                            <h2 className='trend-movies-sec-title'>salman</h2>
                        </div>
                        <div className='col-11'>
                            <div className="row">
                                <div className='popularmovies'>
                                    {singleMovie && singleMovie.length ? (
                                        singleMovie.map( (singMovie) => (
                                            <a href="#">
                                                <div key={singMovie} className='popularmovie'>
                                                    <img className='img-fluid popularmovie-img' src={"https://image.tmdb.org/t/p/w500/" +singMovie.poster_path} alt="" />
                                                    <h1 className='trendmovie-title'>{singMovie.homepage}</h1>
                                                    <p className='release-date'>{singMovie.overview}</p>
                                                </div>
                                            </a>
                                        ))
                                        ) : (
                                        <p className='mb-0'>plaese wait....</p>
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

export default SingleMovie;