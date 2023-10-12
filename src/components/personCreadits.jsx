import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../api";
import "bootstrap/dist/css/bootstrap.css";
import "../../src/index.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, FreeMode } from "swiper/modules";
import MoviesPopup from "./MoviesPopup";

const SingleCreaditsMovies = () => {
  const [openDetail, setOpenDetail] = useState(false);
  const [singleCreaditsMovies, setSingleCreaditsMovies] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getSingleCreadits = async () => {
      const res = await api.get(
        `/person/${id}/combined_credits?language=en-US`
      );

      if (res.status === 200) {
        setSingleCreaditsMovies(res.data);
        console.log(singleCreaditsMovies);
      }
    };
    getSingleCreadits();
  }, []);

  const openDetailMovies = (id) => {
    setOpenDetail((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      <div className="col-12">
        <h2 className="bio">Known For</h2>
        <div className="popularpeople">
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
            // autoplay={{
            //     delay: 2000,
            //     disableOnInteraction: false
            // }}
            loop={true}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".pre-btn",
            }}
            freeMode={true}
            modules={[Autoplay, Navigation, FreeMode]}
            className="mySwiper"
          >
            {singleCreaditsMovies.cast &&
              singleCreaditsMovies.cast.map((singleCreaditsMovie, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Link
                      className="creadits-movie"
                      to={`/movie/${singleCreaditsMovie.id}`}
                    >
                      <img
                        className="img-fluid popularpeople-img"
                        src={
                          singleCreaditsMovie.poster_path
                            ? "https://image.tmdb.org/t/p/w500/" +
                              singleCreaditsMovie.poster_path
                            : "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/jElpCJkSaRPYwIMwZY28gOKV7BK.jpg"
                        }
                        alt=""
                      />
                      <p>
                        {singleCreaditsMovie.title}
                        {singleCreaditsMovie.original_name}
                      </p>
                    </Link>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
      <div className="col-12">
        <h2 className="bio">Acting</h2>
      </div>
      <div className="col-12">
        <div className="acting-lists">
          {singleCreaditsMovies.cast &&
            singleCreaditsMovies.cast.map((singleCreaditsMovie, index) => {
              return (
                <div key={index} className="acting-list  position-relative">
                  <div className="mr-15px">
                    <p className="mb-0 w-82px">
                      {singleCreaditsMovie.release_date ||
                      singleCreaditsMovie.first_air_date
                        ? singleCreaditsMovie.release_date ||
                          singleCreaditsMovie.first_air_date
                        : "_"}
                      {}
                    </p>
                  </div>
                  <div className="mr-15px">
                    {openDetail === singleCreaditsMovie.id ? (
                      <MoviesPopup
                        img={singleCreaditsMovie.poster_path}
                        title={singleCreaditsMovie.title}
                        overview={singleCreaditsMovie.overview}
                        vote={singleCreaditsMovie.vote_average}
                        name={singleCreaditsMovie.original_name}
                        id={singleCreaditsMovie.id}
                      />
                    ) : (
                      ""
                    )}
                    <span
                      className="circle-img"
                      onClick={() => openDetailMovies(singleCreaditsMovie.id)}
                    ></span>
                  </div>
                  <div className="mr-15px">
                    <h2 className="mb-0">
                      {singleCreaditsMovie.title}
                      {singleCreaditsMovie.original_name}
                    </h2>
                    <p className="mb-0">as {singleCreaditsMovie.character}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default SingleCreaditsMovies;
