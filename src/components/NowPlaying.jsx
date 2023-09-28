import { useState, useEffect } from 'react'
import api from '../api'
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import '../../src/index.css'


const NowPlaying = () => {

    const [nowPlaying, setNowPlaying] = useState([]);

    useEffect(() => {

        const getMovies = async () => {
            const res = await api.get(`/movie/now_playing?language=en-US&page=1`)

            if (res.status === 200) {
                setNowPlaying(res.data.results)
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
                            <h2 className='trend-movies-sec-title'>now playing movies</h2>
                        </div>
                        <div className='col-12'>
                            <div className="row">
                                <div className='popularmovies'>
                                    {nowPlaying  && nowPlaying.length ? (
                                        nowPlaying.map( (nowPlay , index ) => (
                                            <Link key={index} to={`/movie/${nowPlay.id}`}>
                                                <div  className='popularmovie'>
                                                    <img className='img-fluid popularmovie-img' src={"https://image.tmdb.org/t/p/w500/"+nowPlay.poster_path} alt="" />
                                                    <h1 className='trendmovie-title'>{nowPlay.title}{nowPlay.name}</h1>
                                                    <p className='release-date'>{nowPlay.release_date}{nowPlay.first_air_date}</p>
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

export default NowPlaying;