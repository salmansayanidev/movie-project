import { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import api from '../api'
import "bootstrap/dist/css/bootstrap.css"
import '../../src/index.css'



import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import {  Autoplay,Navigation, FreeMode } from 'swiper/modules';

const SingleCreaditsMovies = () => {

    const [singleCreaditsMovies, setSingleCreaditsMovies] = useState([]);
    const { id } = useParams();

    useEffect(() => {

        const getSingleCreadits = async () => {
            const res = await api.get(`/person/${id}/combined_credits`)

            if (res.status === 200) {
                setSingleCreaditsMovies(res.data)
                
            }
        }
        getSingleCreadits();

    }, []);


    return (
        <>
            <div className='col-12'>
                <h2 className='bio'>Known For</h2>
                <div className='popularpeople'>

                <Swiper 
                    slidesPerView={5}
                    spaceBetween={60}
                    breakpoints={{
                        360: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1920: {
                            slidesPerView: 5,
                            spaceBetween: 10,
                        },
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false 
                    }}
                    loop={true}
                    navigation={{
                        nextEl:'.next-btn',
                        prevEl:'.pre-btn'
                    }}
                    freeMode={true}
                    modules={[Autoplay , Navigation , FreeMode]}
                    className="mySwiper"
                >
                    {singleCreaditsMovies.cast &&
                        singleCreaditsMovies.cast.map((singleCreaditsMovie , index) => {
                            return (
                            <SwiperSlide key={index}>
                                <Link className='creadits-movie' to={`/movie/${singleCreaditsMovie.id}`}>
                                    <img className='img-fluid popularpeople-img' src={singleCreaditsMovie.poster_path ?  "https://image.tmdb.org/t/p/w500/" +singleCreaditsMovie.poster_path : 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/jElpCJkSaRPYwIMwZY28gOKV7BK.jpg' } alt="" />
                                    <p>{singleCreaditsMovie.character}</p>
                                </Link>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                </div>
            </div>
        </>
    )
}

export default SingleCreaditsMovies;