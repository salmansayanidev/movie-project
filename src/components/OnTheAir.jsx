import { useState, useEffect } from "react";
import api from "../api";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../../src/index.css";
import Loader from "react-js-loader";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const OnTheAir = () => {
  const [onTheAir, setOnTheAir] = useState([]);
  const [page, setPage] = useState(1);
  function pageControl() {
    setPage(page + 1);
  }

  useEffect(() => {
    const getOnTheAir = async () => {
      const res = await api.get(`/tv/on_the_air?language=en-US&page=${page}`);

      if (res.status === 200) {
        setOnTheAir([...onTheAir, ...res.data.results]);
      }
    };
    getOnTheAir();
  }, [page]);

  return (
    <>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <h2 className="trend-movies-sec-title">
                Currently Airing TV Shows
              </h2>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="popularmovies">
                  {onTheAir && onTheAir.length ? (
                    onTheAir.map((onThe, index) => (
                      <Link key={index} to={`/tv/on-the-air/${onThe.id}`}>
                        <div className="popularmovie">
                          <img
                            className="img-fluid popularmovie-img"
                            src={
                              "https://image.tmdb.org/t/p/w500/" +
                              onThe.poster_path
                            }
                            alt=""
                          />
                          <h1 className="trendmovie-title">
                            {onThe.title}
                            {onThe.name}
                          </h1>
                          <p className="release-date">
                            {onThe.release_date}
                            {onThe.first_air_date}
                          </p>
                          <div className="abc">
                            <CircularProgressbar
                              styles={buildStyles({ backgroundColor: "black" })}
                              background
                              backgroundPadding={6}
                              value={(onThe.vote_average * 10).toFixed()}
                              text={`${(onThe.vote_average * 10).toFixed()}%`}
                            />
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="col-12">
                      <div className={"item"}>
                        <Loader
                          type="spinner-circle"
                          bgColor={"black"}
                          color={"black"}
                          size={100}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="load-more-btn">
                <button type="button" onClick={() => pageControl()}>
                  Load More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OnTheAir;
