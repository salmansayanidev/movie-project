import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../api";
import "bootstrap/dist/css/bootstrap.css";
import "../../src/index.css";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SingleSocialProfile = () => {
  const [singleSocialProfile, setSingleSocialProfile] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getSingleProfile = async () => {
      const res = await api.get(`/person/${id}/external_ids`);

      if (res.status === 200) {
        setSingleSocialProfile(res.data);

      }
    };
    getSingleProfile();
  }, []);

  return (
    <>
      <div className="social mt-3">
        <Link to={"https://www.facebook.com/" + singleSocialProfile.twitter_id}>
          <FontAwesomeIcon icon={faFacebook} />
        </Link>
        <Link to={"https://twitter.com/" + singleSocialProfile.twitter_id}>
          <FontAwesomeIcon icon={faXTwitter} />
        </Link>
        <Link
          to={"https://www.instagram.com/" + singleSocialProfile.twitter_id}
        >
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
      </div>
    </>
  );
};

export default SingleSocialProfile;
