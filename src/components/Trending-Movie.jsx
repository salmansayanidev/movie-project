import { useState, useEffect } from 'react'
import api from '../api'
import "bootstrap/dist/css/bootstrap.css"
import '../../src/index.css'
import Loader from "react-js-loader";
import { Circle } from 'rc-progress';
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';




// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import {  Autoplay,Navigation, FreeMode } from 'swiper/modules';
import { Link } from 'react-router-dom';





const TrendingMovies = () => {

  const [trendMovies, setTrendMovies] = useState([])
  const [done, setDone] = useState(undefined);
  const [period , setPeriod] = useState('day')
  const [ToggleState, setToggleState] = useState(1);

    const toggleTab = (period) => {
        setPeriod(period)
      };

      const getActiveClass = (period , className) =>
        ToggleState === period ? className : "" ;
        
        // index ? className : "";

  useEffect(() => {
  
    setTimeout(() => {
        const getMovies = async () => {
            const res = await api.get(`trending/all/${period}?language=en-US`)
            
            if ( res.status === 200 ){
              setTrendMovies(res.data.results)
              setDone(true);
      
            }
          }
      
          getMovies()

    }, 1500)

  }, [period]);

  
  return (
    <>  
        <section className='trend-movies-sec'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-12'>
                    {!done ? (
                        <div className="row justify-content-center align-items-center">
                            <div className='col-3'>
                                <div className={"item"}>
                                    <Loader type="spinner-circle" bgColor={"black"} color={'black'} size={100} />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='col-12'>
                            <div className='d-flex align-items-center'>
                                <h1 className='trend-movies-sec-title'>trending</h1>
                                <div className='tab-btns'>
                                    <button className={`tabs ${getActiveClass('day', "active-tabs")}`} onClick={() => toggleTab('day')} >days</button>
                                    <button className={`tabs ${getActiveClass('week', "active-tabs")}`} onClick={() => toggleTab('week')} >weeks</button>
                                </div>
                            </div>
                            <div id='trending-movies-cards' className={`content ${getActiveClass(1, "active-content")}`}>

                                <Swiper
                                    slidesPerView={6}
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
                                            slidesPerView: 6,
                                            spaceBetween: 10,
                                        },
                                    }}
                                    autoplay={{
                                        delay: 2500,
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
                                    {
                                        trendMovies && trendMovies.length ? (
                                            trendMovies.map((trendMovie , index ) => (
                                                <SwiperSlide key={index}>
                                                <Link className='text-dec-none' to={`/movie/${trendMovie.id}`}>
                                                    <div  className="trending-movies-card">
                                                        <img className='trend-movie-img img-fluid' src={"https://image.tmdb.org/t/p/w500/"+trendMovie.poster_path} alt="" />
                                                        <h1 className='trendmovie-title'>{trendMovie.title}{trendMovie.name}</h1>
                                                        <p className='release-date'>{trendMovie.release_date}{trendMovie.first_air_date}</p>
                                                        <div className='abc'>
                                                            <CircularProgressbar styles={buildStyles({ backgroundColor: "black" })} background backgroundPadding={6}  value={(trendMovie.vote_average * 10).toFixed()} text={`${(trendMovie.vote_average * 10).toFixed()}%`} />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </SwiperSlide>
                                            ))
                                        ) : (
                                            <div className="row justify-content-center align-items-center">
                                                <div className='col-3'>
                                                    <div className={"item"}>
                                                        <Loader type="spinner-circle" bgColor={"black"} color={'black'} size={100} />
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </Swiper>
                            </div>
                        </div>
                        
                    )}
                    </div>
                </div>
            </div>
        </section>
        
        
    </>
  )
}

export default TrendingMovies;














// const Tab = () => {

  

//   const getActiveClass = (index, className) =>
//     ToggleState === index ? className : "";

//   return (
//     <div className="container">
//       <ul className="tab-list">
//         <li
//           className={`tabs ${getActiveClass(1, "active-tabs")}`}
//           onClick={() => toggleTab(1)}
//         >
//           Tab 1
//         </li>
//         <li
//           className={`tabs ${getActiveClass(2, "active-tabs")}`}
//           onClick={() => toggleTab(2)}
//         >
//           Tab 2
//         </li>
//         <li
//           className={`tabs ${getActiveClass(3, "active-tabs")}`}
//           onClick={() => toggleTab(3)}
//         >
//           Tab 3
//         </li>
//       </ul>
//       <div className="content-container">
//         <div className={`content ${getActiveClass(1, "active-content")}`}>
//           <h2>Lorem</h2>
//         </div>
//         <div className={`content ${getActiveClass(2, "active-content")}`}>
//           <h2>Ipsum</h2>
//         </div>
//         <div className={`content ${getActiveClass(3, "active-content")}`}>
//           <h2>Dolor</h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// ReactDOM.render(
//     <Tab />,
//   document.getElementById('root')
// );
