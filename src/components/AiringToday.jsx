import { useState, useEffect } from 'react'
import api from '../api'
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import '../../src/index.css'
import Loader from "react-js-loader";
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



const AiringToday = () => {

    const [airingTodays, setAiringTodays] = useState([]);
    const [page, setPage] = useState(1);
    function pageControl (){
        setPage(page + 1)
    }


    useEffect(() => {

            const getAiringToday = async () => {
                const res = await api.get(`/tv/airing_today?language=en-US&page=${page}`)
    
                if (res.status === 200) {
                    setAiringTodays([...airingTodays , ...res.data.results])
                }
            }
            getAiringToday();

    }, [page]);


    return (
        <>
            <section>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-12'>
                            <h2 className='trend-movies-sec-title'>TV Shows Airing Today</h2>
                        </div>
                        <div className='col-12'>
                            <div className="row">
                                <div className='popularmovies'>
                                    {airingTodays  && airingTodays.length ? (
                                        airingTodays.map( (airingToday , index ) => (
                                            <Link key={index} to={`/tv/${airingToday.id}`}>
                                                <div  className='popularmovie'>
                                                    <img className='img-fluid popularmovie-img' src={"https://image.tmdb.org/t/p/w500/"+airingToday.poster_path} alt="" />
                                                    <h1 className='trendmovie-title'>{airingToday.title}{airingToday.name}</h1>
                                                    <p className='release-date'>{airingToday.release_date}{airingToday.first_air_date}</p>
                                                    <div className='abc'>
                                                        <CircularProgressbar styles={buildStyles({ backgroundColor: "black" })} background backgroundPadding={6}  value={(airingToday.vote_average * 10).toFixed()} text={`${(airingToday.vote_average * 10).toFixed()}%`} />
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

export default AiringToday;