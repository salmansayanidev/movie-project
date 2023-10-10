import { useState, useEffect } from 'react'
import api from '../api'
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import '../../src/index.css'
import Loader from "react-js-loader";
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



const PopularTvShows = () => {

    const [popularTvShows, setPopularTvShows] = useState([]);


    useEffect(() => {

            const getPopularTvShows = async () => {
                const res = await api.get(`/tv/popular?language=en-US&page=1`)
    
                if (res.status === 200) {
                    setPopularTvShows(res.data.results)
                }
            }
            getPopularTvShows();

    }, []);


    return (
        <>
            <section>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-12'>
                            <h2 className='trend-movies-sec-title'>Popular TV Shows</h2>
                        </div>
                        <div className='col-12'>
                            <div className="row">
                                <div className='popularmovies'>
                                    {popularTvShows  && popularTvShows.length ? (
                                        popularTvShows.map( (popularTvShow , index ) => (
                                            <Link key={index} to={`/tv/${popularTvShow.id}`}>
                                                <div  className='popularmovie'>
                                                    <img className='img-fluid popularmovie-img' src={"https://image.tmdb.org/t/p/w500/"+popularTvShow.poster_path} alt="" />
                                                    <h1 className='trendmovie-title'>{popularTvShow.title}{popularTvShow.name}</h1>
                                                    <p className='release-date'>{popularTvShow.release_date}{popularTvShow.first_air_date}</p>
                                                    <div className='abc'>
                                                        <CircularProgressbar styles={buildStyles({ backgroundColor: "black" })} background backgroundPadding={6}  value={(popularTvShow.vote_average * 10).toFixed()} text={`${(popularTvShow.vote_average * 10).toFixed()}%`} />
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
                    </div>
                </div>
            </section>
        </>
    )
}

export default PopularTvShows;