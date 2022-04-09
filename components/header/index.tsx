import React, { useContext } from "react";
import AppContext from "../../store/index";

const Header = () => {
  const store = useContext(AppContext);

  return (
    <nav className="header" id="header">
      <div className="header__container">
        <div className="brand">
          <h1>DD</h1>
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
              onClick={() => {
                store?.dispatch({ contactMeModalShow: true });
              }}
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
