import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
const Navigation = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <div className="clsNavigation marginleft">
      <h2>Navbar</h2>
      <p>A navbar (short for navigation bar) is a graphical control element that displays a site navigation menu. It usually appears at the top of a web page and contains links to other sections of the site. </p>

      <br />
      {/* reference:https://blog.logrocket.com/create-responsive-navbar-react-css/ */}
      <nav className="navigation">
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}>
          <FontAwesomeIcon icon={faHamburger} />
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <div
            className="navigation-menu">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="flex-container">
        <div className="card" style={{height:'600px'}}>
          <p className="card-text"> {
            /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
            <div class="expandHideCode" style={{ color: 'black' }} onClick={() => setIsExpanded(!isExpanded)}>react.js
              <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
            </div>
            {isExpanded && (
              <pre>
                <code>
                  {`import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";

const [isNavExpanded, setIsNavExpanded] = useState(false);

<nav className="navigation">
  <button
    className="hamburger"
    onClick={() => {
      setIsNavExpanded(!isNavExpanded);
    }}>
    <FontAwesomeIcon icon={faHamburger} />
  </button>
  <div
    className={
      isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
    }
  >
    <div
      className="navigation-menu">
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>`}
                </code>
              </pre>
            )}</p>
        </div>
        <div className="card" style={{height:'600px'}}>
          <p className="card-text"> {
            /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
            <div class="expandHideCode" style={{ color: 'black' }} onClick={() => setIsExpanded(!isExpanded)}>css
              <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
            </div>
            {isExpanded && (
              <pre>
                <code>
                  {`.navigation {
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.5rem 0rem;
  background-color: #fff;
  color: black;
  box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);
}
.navigation-menu {
  margin-left: auto;
}
.navigation-menu ul {
  display: flex;
  padding: 0;
}
.navigation-menu li {
  list-style-type: none;
  margin: 0 1rem;
}
.navigation-menu li a {
  text-decoration: none;
  display: block;
  width: 100%;
}
.hamburger {
  border: 0;
  height: 40px;
  width: 40px;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: #b82243;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  position: absolute;
  top: 50%;
  right: 25px;
  transform: translateY(-50%);
  display: none;
}
.hamburger:hover {
  background-color: #7e2d3f;
}
@media screen and (max-width: 768px) {
  .hamburger {
    display: block;
  }
  .navigation-menu ul {
    display: none;
  }
  .navigation-menu ul {
    position: absolute;
    top: 60px;
    left: 0;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 77px);
    background-color: black;
    border-top: 1px solid black;
  }
  .navigation-menu li {
    text-align: center;
    margin: 0;
  }
  .navigation-menu li a {
    color: rgb(255, 255, 255);
    width: 100%;
    padding: 1.5rem 0;
  }
  .navigation-menu li:hover {
    background-color: #5b5959;
  }
  .navigation-menu ul {
    display: none;
  }
  .navigation-menu.expanded ul {
    display: block;
    height: auto;
  }
}`}
                </code>
              </pre>
            )}</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;