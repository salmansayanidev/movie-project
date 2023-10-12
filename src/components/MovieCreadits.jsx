import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../api";
import "bootstrap/dist/css/bootstrap.css";
import "../../src/index.css";
import DummyProfile from "../images/dummy-profile-pic.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, FreeMode } from "swiper/modules";

const MovieCreadits = () => {
  const [movieCreadits, setMovieCreadits] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getMovieCreadits = async () => {
      const res = await api.get(`/movie/${id}/credits?language=en-US`);

      if (res.status === 200) {
        setMovieCreadits(res.data);
      }
    };
    getMovieCreadits();
  }, []);

  return (
    <>
      <div className="col-12">
        <h2 className="bio mt-5">Top Billed Cast </h2>
        <div className="popularpeople">
          <Swiper
            slidesPerView={6}
            spaceBetween={16}
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
                spaceBetween: 16,
              },
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".pre-btn",
            }}
            freeMode={true}
            modules={[Autoplay, Navigation, FreeMode]}
            className="mySwiper"
          >
            {movieCreadits.cast &&
              movieCreadits.cast.map((movieCreadit, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="creaditsMovie-div">
                      <Link
                        className="creaditsMovie"
                        to={`/person/${movieCreadit.id}`}
                      >
                        <img
                          className="img-fluid"
                          src={
                            movieCreadit.profile_path
                              ? "https://image.tmdb.org/t/p/w500/" +
                                movieCreadit.profile_path
                              : DummyProfile
                          }
                          alt=""
                        />
                        <h2>
                          {movieCreadit.name}
                          {movieCreadit.original_name}
                        </h2>
                        <span>{movieCreadit.character}</span>
                      </Link>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default MovieCreadits;
