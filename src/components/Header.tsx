import "../index.css"; // Import the shared CSS file
import arrow from "../assets/images/icon-arrow-dark.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Blogr</h1>
        <nav>
          <ul>
            <li>
              <a href="#product">
                Product
                <img src={arrow} className="arrow" alt="" />
              </a>
            </li>

            <li>
              <a href="#about">Company</a>
              <img src={arrow} className="arrow" alt="" />
            </li>
            <li className="dropdown">
              <a href="#about">Connect</a>
              <img src={arrow} className="arrow" alt="" />
              <ul className="dropdown-content">
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a href="#newsletter">Newsletter</a>
                </li>
                <li>
                  <a href="#linkedin">LinkedIn</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="register">
          <p className="sign">login</p>
          <p className="signs">signin</p>
        </div>
        <div className="icons">
          <img src={hamburger} alt="" className="icon" />
        </div>
      </div>
      <div className="header-title">
        <h2>A modern publishing platform</h2>
        <p>Grow your audience and build your online brand</p>
        <button>Start for Free</button>
        <button>Learn More</button>
      </div>
    </header>
  );
};

export default Header;
