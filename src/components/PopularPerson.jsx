import { useState, useEffect } from "react";
import api from "../api";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../../src/index.css";
import Loader from "react-js-loader";

const PopularPerson = () => {
  const [popularPersons, setPopularPersons] = useState([]);
  const [page, setPage] = useState(1);
  function pageControl() {
    setPage(page + 1);
  }

  useEffect(() => {
    const getPerson = async () => {
      const res = await api.get(`/person/popular?language=en-US&page=${page}`);

      if (res.status === 200) {
        setPopularPersons([...popularPersons, ...res.data.results]);
      }
    };
    getPerson();
  }, [page]);

  return (
    <>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <h2 className="trend-movies-sec-title">Popular People</h2>
            </div>
            <div className="col-12">
              <div className="row">
                {popularPersons && popularPersons.length ? (
                  popularPersons.map((popularPerson, index) => (
                    <div key={index} className="col-3">
                      <Link
                        className="text-dec-none"
                        to={`/person/${popularPerson.id}`}
                      >
                        <div className="popularmovie text-center">
                          <img
                            className="img-fluid popularmovie-img"
                            src={
                              "https://image.tmdb.org/t/p/w500/" +
                              popularPerson.profile_path
                            }
                            alt=""
                          />
                          <h1 className="trendmovie-title mt-0">
                            {popularPerson.name}
                          </h1>
                          <p className="release-date mb-0">
                            {popularPerson.id}
                          </p>
                        </div>
                      </Link>
                    </div>
                  ))
                ) : (
                  <div className={"item"}>
                    <Loader
                      type="spinner-circle"
                      bgColor={"black"}
                      color={"black"}
                      size={150}
                    />
                  </div>
                )}
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

export default PopularPerson;
