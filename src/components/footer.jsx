import "bootstrap/dist/css/bootstrap.css";
import "../../src/index.css";
import FooterLogo from "../images/FooterLogo.png";
import FooterComponent from "./footerData";
import { useState } from "react";
import { Link } from "react-router-dom";

const footerData = [
  {
    id: 1,
    title: "THE BASICS",
    list: [
      "About TMDB",
      "Contact Us",
      "Support Forums",
      "API",
      "System Status",
    ],
  },
  {
    id: 2,
    title: "GET INVOLVED",
    list: ["Contribution Bible", "Add New Movie", "Add New TV Show"],
  },
  {
    id: 3,
    title: "COMMUNITY",
    list: ["Guidelines", "Discussions", "Leaderboard", "Twitter"],
  },
  {
    id: 4,
    title: "LEGAL",
    list: [
      "Terms of Use",
      "API Terms of Use",
      "Privacy Policy",
      "DMCA Takedown Request",
    ],   
  },
];

const Footer = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (id) => {
    setOpenAccordion((prevId) => (prevId === id ? null : id));
  };

  return (
    <footer className="footerarea">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-2 col-6 col-sm-6 col-md-4">
            <div className="firstwidget">
              <Link to="/">
                <img src={FooterLogo} alt="" className="footer-logo" />
              </Link>
              <button className="footer-btn">Hi salmanasif!</button>
            </div>
          </div>

          {footerData.map((item, index) => {
            return (
              <>
                <div key={index} className="col-lg-2 col-6 col-sm-6 col-md-4">
                  <FooterComponent
                    title={item.title}
                    itemList={item.list}
                    id={item.id}
                    isOpen={openAccordion === item.id}
                    onClick={() => handleAccordionClick(item.id)}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
