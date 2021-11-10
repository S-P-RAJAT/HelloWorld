import "./Home.css";
import React from "react";
import logo from "./BL_logo.jpg";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <nav className="navigationItem">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#news">News</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
            </ul>
          </nav>
          <div className="mainContainer">
            <header className="headerContainer">
              <h1>Bridgelabz is cool</h1>
            </header>
            <div className="content">
              <div className="mainContent">
                <img src={logo} alt="Hover Text." />
                <p>At Bridgelabz,we're a techie community of</p>
                <ul>
                  <li>technologists</li>
                  <li>thinkers</li>
                  <li>builders</li>
                </ul>
                <p>
                  Working together to keep the Tech Employability of Engineers
                  alive and accessible, so Tech Companies worldwide can get
                  contributors and creators for Technology Solutions. We believe
                  this act of human collaboration across an employability
                  platform is essential to individual growth and our collective
                  future.
                </p>

                <p>
                  To know about us, visit{" "}
                  <a href="https://www.bridgelabz.com/">Bridge Labz</a>
                  to learn even more about our mission i.e.{" "}
                  <strong> Employability to all</strong>.
                </p>
              </div>

              <aside>
                <h3>Vision</h3>
                <p>Be Synonymous With Employability</p>
                <h3>Mission</h3>
                <p>Impact 1 Million Jobs By 2025</p>
              </aside>
            </div>
            <footer className="footerContainer">
              <a href="mailto:contactus@bridgelabz.com">
                contactus@bridgelabz.com
              </a>
              <a href="mailto:press@bridgelabz.com">press@bridgelabz.com</a>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
