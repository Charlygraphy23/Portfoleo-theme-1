import React from "react";

const Header = () => {
  return (
    <nav className="header" id="header">
      <div className="header__container">
        <div className="brand">
          <h1>Portfolio</h1>
        </div>

        <div className="header__collapse">
          <ul className="header__collapse-links">
            <li className="">
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#services">Services</a>
            </li>
          </ul>

          <div className="header__collapse-contact">
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#contactMeForm"
              className="primary__button"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
