import { useState, useEffect } from "react";
import api from "../api";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../../src/index.css";

const MovieKeywords = () => {
  const [movieKeywords, setMovieKeywords] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getMovieKeywords = async () => {
      const res = await api.get(`/movie/${id}/keywords`);

      if (res.status === 200) {
        setMovieKeywords(res.data);
      }
    };
    getMovieKeywords();
  }, []);

  return (
    <>
      {movieKeywords.keywords &&
        movieKeywords.keywords.map((movieKeyword, index) => {
          return (
            <Link
              key={index}
              className="creaditmovie"
              to={`/movie/${movieKeyword.id}`}
            >
              <button>{movieKeyword.name ? movieKeyword.name : "-"}</button>
            </Link>
          );
        })}
    </>
  );
};

export default MovieKeywords;
