// import { useState, useEffect } from 'react'
// import { useParams } from "react-router-dom";
// import api from '../api'
// import "bootstrap/dist/css/bootstrap.css"
// import '../../src/index.css'
// import { CircularProgressbar , buildStyles} from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// import MovieCreadits from './MovieCreadits';
// import MovieKeywords from './MovieKeywords';


// const SingleTvShow = () => {

//     const [singleTvShow, setSingleTvShow] = useState([]);
//     const { id } = useParams();

//     useEffect(() => {

//         const getSingleTvShow = async () => {
//             const res = await api.get(`tv/${id}`)

//             if (res.status === 200) {
//                 setSingleTvShow(res.data)

//             }
//         }
//         getSingleTvShow();

//     }, []);
    

//     // style={{backgroundImage: `url(${"https://image.tmdb.org/t/p/w500/" +singleMovie.poster_path})`}}
//     return (
//         <>
            
//             <section className='single-movie-section mt-5'>
//                 <div className='container'>
//                     <div className='row'>
//                         <div className='col-12'>
//                             <div key={singleTvShow.id} className='single-movie-data' >
//                                 <div className='row align-items-center'>
//                                     <div className='col-3'>
//                                         <div className="row">
//                                             <div className='popularmovies'>
//                                                 <img className='img-fluid single-movie-img' src={"https://image.tmdb.org/t/p/w500/" +singleTvShow.poster_path} alt="" />
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className='col-8'>
//                                         <div className='single-movie-right-side position-relative'>
//                                             <h2>{singleTvShow.original_title || singleTvShow.title}</h2>
//                                             <span>{singleTvShow.release_date}</span>
//                                             <div className='genres'>
//                                                 {singleTvShow.genres && singleTvShow.genres ? (
//                                                     singleTvShow.genres.map( (nowPlay,index) => (
//                                                         <span key={index}>{nowPlay.name}</span>
//                                                     ))
//                                                     ) : (
//                                                     null
//                                                 )}
//                                             </div>
//                                             <div className='popularity'>
//                                                 <CircularProgressbar className='circle-porgress-bar' styles={buildStyles({ backgroundColor: "black" })} background backgroundPadding={6} value={(singleTvShow.vote_average * 10).toFixed()} text={`${(singleTvShow.vote_average * 10).toFixed()}%`} />
//                                                 user score
//                                             </div>
//                                             <h3>{singleTvShow.tagline}</h3>
//                                             <h4>over view</h4>
//                                             <p>{singleTvShow.overview}</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div> 
//                     </div>
//                 </div>
//             </section>
//             <section>
//                 <div className='container'>
//                     <div className='row'>
//                         <div className='col-10'>
//                             <div className="row">
//                                 <MovieCreadits />
//                             </div>
//                         </div>
//                         <div className='col-2'>
//                             <div key={singleMovie.id} className='moviesStatus'>
//                                 <h2 className='key-title mt-5'>Status <span>{singleTvShow.status}</span></h2>
//                                 <h2 className='key-title'>Original Title <span>{singleTvShow.original_title ? singleTvShow.original_title : null}</span></h2>
//                                 <h2 className='key-title'>Original Language <span>{singleTvShow.original_language}</span></h2>
//                                 <h2 className='key-title'>Budget<span> ${singleTvShow.budget ? singleTvShow.budget : "-"}</span></h2>
//                                 <h2 className='key-title'>Revenue<span> ${singleTvShow.revenue ? singleTvShow.revenue : "-"}</span></h2>
//                             </div>
//                             <h2 className='key-title'>Keywords</h2>
//                                 <MovieKeywords />
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default SingleTvShow;