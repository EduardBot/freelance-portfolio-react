import sun from "./../../img/icons/sun.svg";
import moon from "./../../img/icons/moon.svg";

import "./style.css"

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <a href="./index.html" className="logo">
            <strong>Freelancer</strong> portfolio
          </a>

          <button className="dark-mode-btn">
            <img src={sun} alt="light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="dark mode" className="dark-mode-btn__icon" />
          </button>

          <ul className="nav-list">
            <li className="nav-list__item">
              <a
                className="nav-list__link nav-list__link--active"
                href="./index.html"
              >
                Home
              </a>
            </li>
            <li className="nav-list__item">
              <a className="nav-list__link" href="./skills.html">
                Projects
              </a>
            </li>
            <li className="nav-list__item">
              <a className="nav-list__link" href="./contacts.html">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;