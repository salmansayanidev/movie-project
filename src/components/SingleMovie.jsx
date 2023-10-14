import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api";
import "bootstrap/dist/css/bootstrap.css";
import "../../src/index.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import MovieCreadits from "./MovieCreadits";
import MovieKeywords from "./MovieKeywords";

const SingleMovie = () => {
  const [singleMovie, setSingleMovie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getPopularMovies = async () => {
      const res = await api.get(`/movie/${id}?language=en-US`);

      if (res.status === 200) {
        setSingleMovie(res.data);
      }
    };
    getPopularMovies();
  }, []);

  // style={{backgroundImage: `url(${"https://image.tmdb.org/t/p/w500/" +singleMovie.poster_path})`}}
  return (
    <>
      <section className="single-movie-section mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div key={singleMovie.id} className="single-movie-data">
                <div className="row align-items-center">
                  <div className="col-12 col-sm-5 col-md-5 col-lg-3">
                    <div className="row">
                      <div className="popularmovies">
                        <img
                          className="img-fluid single-movie-img"
                          src={
                            "https://image.tmdb.org/t/p/w500/" +
                            singleMovie.poster_path
                          }
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-7 col-md-7 col-lg-8 ">
                    <div className="single-movie-right-side position-relative">
                      <h2>{singleMovie.original_title || singleMovie.title}</h2>
                      <span>{singleMovie.release_date}</span>
                      <div className="genres">
                        {singleMovie.genres && singleMovie.genres
                          ? singleMovie.genres.map((nowPlay, index) => (
                              <span key={index}>{nowPlay.name}</span>
                            ))
                          : null}
                      </div>
                      <div className="popularity">
                        <CircularProgressbar
                          className="circle-porgress-bar"
                          styles={buildStyles({ backgroundColor: "black" })}
                          background
                          backgroundPadding={6}
                          value={(singleMovie.vote_average * 10).toFixed()}
                          text={`${(singleMovie.vote_average * 10).toFixed()}%`}
                        />
                        user score
                      </div>
                      <h3>{singleMovie.tagline}</h3>
                      <h4>over view</h4>
                      <p>{singleMovie.overview}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-10">
              <div className="row">
                <MovieCreadits />
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-2">
              <div key={singleMovie.id} className="moviesStatus">
                <h2 className="key-title mt-5">
                  Status <span>{singleMovie.status}</span>
                </h2>
                <h2 className="key-title">
                  Original Title{" "}
                  <span>
                    {singleMovie.original_title
                      ? singleMovie.original_title
                      : null}
                  </span>
                </h2>
                <h2 className="key-title">
                  Original Language <span>{singleMovie.original_language}</span>
                </h2>
                <h2 className="key-title">
                  Budget
                  <span> ${singleMovie.budget ? singleMovie.budget : "-"}</span>
                </h2>
                <h2 className="key-title">
                  Revenue
                  <span>
                    {" "}
                    ${singleMovie.revenue ? singleMovie.revenue : "-"}
                  </span>
                </h2>
              </div>
              <h2 className="key-title">Keywords</h2>
              <MovieKeywords />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleMovie;
