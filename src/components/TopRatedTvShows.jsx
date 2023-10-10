import { useState, useEffect } from 'react'
import api from '../api'
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import '../../src/index.css'
import Loader from "react-js-loader";
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



const TopRatedTvShows = () => {

    const [topRatedTvShows, setTopRatedTvShows] = useState([]);
    const [page, setPage] = useState(1);
    function pageControl (){
        setPage(page + 1)
    }
    useEffect(() => {

            const getTopRatedTvShows = async () => {
                const res = await api.get(`/tv/top_rated?language=en-US&page=${page}`)
    
                if (res.status === 200) {
                    setTopRatedTvShows([...topRatedTvShows, ...res.data.results])
                }
            }
            getTopRatedTvShows();

    }, [page]);


    return (
        <>
            <section>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-12'>
                            <h2 className='trend-movies-sec-title'>Top Rated TV Shows</h2>
                        </div>
                        <div className='col-12'>
                            <div className="row">
                                <div className='popularmovies'>
                                    {topRatedTvShows  && topRatedTvShows.length ? (
                                        topRatedTvShows.map( (topRatedTvShow , index ) => (
                                            <Link key={index} to={`/tv/${topRatedTvShow.id}`}>
                                                <div  className='popularmovie'>
                                                    <img className='img-fluid popularmovie-img' src={"https://image.tmdb.org/t/p/w500/"+topRatedTvShow.poster_path} alt="" />
                                                    <h1 className='trendmovie-title'>{topRatedTvShow.title}{topRatedTvShow.name}</h1>
                                                    <p className='release-date'>{topRatedTvShow.release_date}{topRatedTvShow.first_air_date}</p>
                                                    <div className='abc'>
                                                        <CircularProgressbar styles={buildStyles({ backgroundColor: "black" })} background backgroundPadding={6}  value={(topRatedTvShow.vote_average * 10).toFixed()} text={`${(topRatedTvShow.vote_average * 10).toFixed()}%`} />
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
                        <div className='col-12'>
                            <div className='load-more-btn'>
                                <button type='button' onClick={() => pageControl()}>Load More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TopRatedTvShows;