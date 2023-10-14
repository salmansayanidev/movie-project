import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api";
import "bootstrap/dist/css/bootstrap.css";
import "../../src/index.css";
import SingleSocialProfile from "./SocialProfile";
import SingleCreaditsMovies from "./personCreadits";
import DummyProfile from "../images/dummy-profile-pic.png";

const SinglePerson = () => {
  const [singlePerson, setSinglePerson] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getPopularPerson = async () => {
      const res = await api.get(`/person/${id}?language=en-US`);

      if (res.status === 200) {
        setSinglePerson(res.data);

        // console.log(singlePerson.also_known_as.map( item ))
      }
    };
    getPopularPerson();
  }, []);

  return (
    <>
      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-5 col-md-5 col-lg-3">
              <div className="popularpeople">
                <img
                  className="img-fluid popularpeople-profile"
                  src={
                    singlePerson.profile_path
                      ? "https://image.tmdb.org/t/p/w500/" +
                        singlePerson.profile_path
                      : DummyProfile
                  }
                  alt=""
                />
                <SingleSocialProfile />
                <h2 className="">Personal Info</h2>
                <div className="people-info">
                  <p className="people-info-detail">
                    <strong className="d-block">Known For</strong>
                    {singlePerson.known_for_department}
                  </p>
                </div>
                <div className="people-info">
                  <p className="people-info-detail">
                    <strong className="d-block">Gender</strong>
                    {singlePerson.gender === 1 ? "female" : "men"}
                  </p>
                </div>
                <div className="people-info">
                  <p className="people-info-detail">
                    <strong className="d-block">Birthday</strong>
                    {singlePerson.birthday}
                  </p>
                </div>
                <div className="people-info">
                  <p className="people-info-detail">
                    <strong className="d-block">Place of Birth</strong>
                    {singlePerson.place_of_birth}
                  </p>
                </div>
                <div className="people-info">
                  <strong className="d-block">Also Known As</strong>
                  {singlePerson.also_known_as &&
                    singlePerson.also_known_as.map((also_known, index) => {
                      return <p key={index}>{also_known}</p>;
                    })}
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-7 col-md-7 col-lg-9">
              <div className="people-right-area">
                <h1 className="people-name">{singlePerson.name}</h1>
                <h2 className="bio">Biography</h2>
                <p className="biography-para">{singlePerson.biography}</p>
              </div>
              <div className="row">
                <SingleCreaditsMovies />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SinglePerson;
