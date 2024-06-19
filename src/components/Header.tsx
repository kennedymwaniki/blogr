import "../index.css"; // Import the shared CSS file
import arrow from "../assets/images/icon-arrow-dark.svg";
const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Blogr</h1>
        <nav>
          <ul>
            <li>
              <a href="#about">
                Product
                <img src={arrow} className="arrow" alt="" />
              </a>
            </li>
            <li>
              <a href="#about">Company</a>
              <img src={arrow} className="arrow" alt="" />
            </li>
            <li>
              <a href="#about">Connect</a>
              <img src={arrow} className="arrow" alt="" />
            </li>
          </ul>
        </nav>
        <div className="register">
          <p>login</p>
          <p className="sign">signin</p>
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
