import React from "react";

const FooterComponent = ({ id, title, itemList, onClick, isOpen }) => {
  return (
    <>
      <div className={isOpen ? "activate" : "" + "footer-list"}>
        <button type="button" className="faq-open" onClick={onClick}>
          <h4>{title}</h4> <i className="fa-solid fa-angle-down"></i>
        </button>
        <ul key={title} className="dropdownlist">
          {itemList.map((item) => {
            return (
              <li>
                <a href={``}>{item}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default FooterComponent;
