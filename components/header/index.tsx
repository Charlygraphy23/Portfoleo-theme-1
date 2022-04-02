import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="brand">
          <h1>Portfolio</h1>
        </div>

        <div className="header__collapse">
          <ul className="header__collapse-links">
            <li className="active">
              <Link href={"/"}>Home</Link>
            </li>

            <li>
              <Link href={"/services"}>Services</Link>
            </li>
          </ul>

          <div className="header__collapse-contact">
            <button className="primary__button">Contact Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
