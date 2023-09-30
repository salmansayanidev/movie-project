import { useState, useEffect } from 'react'
import api from '../api'
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import '../../src/index.css'
import Loader from "react-js-loader";
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



const NowPlaying = () => {

    const [nowPlaying, setNowPlaying] = useState([]);
    const [done, setDone] = useState(undefined);


    useEffect(() => {

        setTimeout(() => {
            const getMovies = async () => {
                const res = await api.get(`/movie/now_playing?language=en-US&page=1`)
    
                if (res.status === 200) {
                    setNowPlaying(res.data.results)
                    setDone(true)
                }
            }
            getMovies();
        }, 1500)

    }, []);


    return (
        <>
            <section>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-12'>
                            <h2 className='trend-movies-sec-title'>now playing movies</h2>
                        </div>
                        {!done ? (
                            <div className="row justify-content-center align-items-center">
                                <div className="col-3">
                                    <div className={"item"}>
                                        <Loader type="spinner-circle" bgColor={"black"}  color={'black'} size={100} />
                                    </div>
                                </div>
                            </div>
                        ) : (
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
                                                    <div className='abc'>
                                                        <CircularProgressbar styles={buildStyles({ backgroundColor: "black" })} background backgroundPadding={6}  value={(nowPlay.vote_average * 10).toFixed()} text={`${(nowPlay.vote_average * 10).toFixed()}%`} />
                                                    </div>
                                                </div>
                                            </Link>
                                        ))
                                        ) : (
                                        <div className={"item"}>
                                            <Loader type="spinner-circle" bgColor={"black"}  color={'black'} size={150} />
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>
                        )

                        }
                        {/* <div className='col-12'>
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
                                        <div className={"item"}>
                                            <Loader type="spinner-default" bgColor={"black"} title={"spinner-default"} color={'black'} size={150} />
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>  */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default NowPlaying;