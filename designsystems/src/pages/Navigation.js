import React, { useState } from "react";
import { Link, useMatch, useResolvedPath, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
export const Navigation = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <div className="topPadding clsNavigation marginleft">
      <h2>Navbar</h2>
      <p>A navbar (short for navigation bar) is a graphical control element that displays a site navigation menu. It usually appears at the top of a web page and contains links to other sections of the site. </p>

      <br />
      {/* reference:https://blog.logrocket.com/create-responsive-navbar-react-css/ */}
      <nav className="navigation">
        <h1 className='headColor sidepadding'>Hair with Flair</h1>
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
          }>
          <div
            className="navigation-menu">
            <ul>
              <CustomLink to="/" onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}>Home</CustomLink>
              <CustomLink to="/" onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}>Services</CustomLink>
              <CustomLink to="/" onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}>Appointments</CustomLink>
            </ul>
          </div>
        </div>

      </nav>

      <div className="flex-container">
        <div className="card" style={{ height: '500px' }}>
          <div className="card-text"> {
            /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
            <div className="expandHideCode" style={{ color: 'black' }} >react.js
              <br></br><br></br>
            </div>
            {
              <pre>
                <code>
                  {`import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";

const [isNavExpanded, setIsNavExpanded] = useState(false);

<nav className="navigation">
        <h1 className='headColor sidepadding'>Hair with Flair</h1>
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
              <CustomLink to="/Home"  onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}>Home</CustomLink>
              <CustomLink to="/Service"  onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}>Services</CustomLink>
              <CustomLink to="/Appointments" onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}>Appointments</CustomLink>
            </ul>
          </div>
        </div>
      </nav>`}
                </code>
              </pre>
            }</div>
        </div>
        <div className="card" style={{ height: '500px' }}>
          <div className="card-text"> {
            /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
            <div className="expandHideCode" style={{ color: 'black' }}>css
              <br></br><br></br>
            </div>
            {
              <pre>
                <code>
                  {`.navigation {
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.5rem 0rem;
  color: black;
  background-color: #f4f4f4;
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
  padding: 15px;
}

.navigation-menu li a {
  text-decoration: none;
  display: block;
  width: 100%;
  color: black;
  font-weight: bold;
}

.hamburger {
  border: 0;
  height: 40px;
  width: 40px;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: #A01313;
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

.navigation-menu li.active {
  background-color: #d0d0d0;
  border-radius: 9px;

}

.navigation-menu li:hover {
  background-color: #d0d0d0;
  border-radius: 20px;
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
            }</div>
        </div>
      </div>
    </div>
  );
};

export const NavbarSubmenu = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="topPadding clsSubmenu marginleft">
      <h2>Navbar Submenu</h2>
      <p>A navigation bar submenu is a secondary drop-down menu that is triggered by hovering over or clicking on a main menu item. It allows for further categorization and organization of navigation items within a website or application.</p>
      <br />
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
                <a onClick={handleToggle}>About</a>
                {isOpen && (
                  <ul className="submenu">
                    <li>
                      <a href="#">About 1</a>
                    </li>
                    <li>
                      <a href="#">About 2</a>
                    </li>
                    <li>
                      <a href="#">About 3</a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="flex-container">
        <div className="card" style={{ height: '500px' }}>
          <div className="card-text"> {
            /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
            <div className="expandHideCode" style={{ color: 'black' }} >react.js
              <br></br><br></br>
            </div>
            {
              <pre>
                <code>
                  {`import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";

const [isNavExpanded, setIsNavExpanded] = useState(false);
const [isOpen, setIsOpen] = useState(false);

const handleToggle = () => {
  setIsOpen(!isOpen);
};

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
                <a onClick={handleToggle}>About</a>
                {isOpen && (
                  <ul className="submenu">
                    <li>
                      <a href="#">About 1</a>
                    </li>
                    <li>
                      <a href="#">About 2</a>
                    </li>
                    <li>
                      <a href="#">About 3</a>
                    </li>
                  </ul>
                )}
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
            }</div>
        </div>
        <div className="card" style={{ height: '500px' }}>
          <div className="card-text"> {
            /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
            <div className="expandHideCode" style={{ color: 'black' }} >css
              <br></br><br></br>
            </div>
            {
              <pre>
                <code>
                  {`
.navigation {
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
  background-color: #A01313;
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
.submenu {
  position: absolute;
  top: 60px;
  right: 0;
  background-color: #333;
  color: #fff;
  padding: 10px;
}

.submenu a {
  display: block;
  margin-bottom: 10px;
  color: #ffffff;
}
@media screen and (max-width: 768px) {
 ul .submenu {
    position: relative !important;
    top: auto !important;
    right: auto !important;
    display: inline-block !important;
   
  }
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
            }</div>
        </div>
      </div>
    </div>
  );
};

//reference-https://www.makeuseof.com/create-breadcrumbs-in-reactjs/
export const BreadCrumbs = () => {
  const location = useLocation();
  return (
    <div className="topPadding clsNavigation marginleft">
      <h2>BreadCrumbs</h2>
      <p>Breadcrumbs are a navigational aid that provides users with information about their current location within a website's hierarchy. Breadcrumbs typically appear at the top of a page, just below the header, and consist of a series of clickable links that represent the path the user took to arrive at the current page.</p>

      <br />
      {/* reference:https://blog.logrocket.com/create-responsive-navbar-react-css/ */}

      <nav className="breadCrumb">
        <Link to="/navigation/navigations"
          className={location.pathname.startsWith("/navigation/navigations") ? "breadcrumb-active" : "breadcrumb-not-active"}
        >
          Navigation
        </Link>
        <span className="breadcrumb-arrow">&gt;</span>
        <Link to="/navigation/navbreadcrumbs"
          className={location.pathname === "/navigation/navbreadcrumbs" ? "breadcrumb-active" : "breadcrumb-not-active"}
        >
          BreadCrumbs
        </Link>
      </nav>
      <div className="flex-container">
        <div className="card" style={{ height: '350px' }}>
          <div className="card-text"> {
            /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
            <div className="expandHideCode" style={{ color: 'black' }} >react.js
              <br></br><br></br>
            </div>
            {
              <pre>
                <code>
                  {`import { Link, useLocation } from 'react-router-dom'
 <nav>
  <Link to="/navigation/navigations" className={location.pathname.startsWith("/navigation/navigations") ? "breadcrumb-active" : "breadcrumb-not-active"}>
Navigation </Link>
 <span className="breadcrumb-arrow">&gt;</span>
 <Link to="/navigation/navbreadcrumbs" className={location.pathname === "/navigation/navbreadcrumbs" ? "breadcrumb-active" : "breadcrumb-not-active"}>
BreadCrumbs</Link>
</nav>`}
                </code>
              </pre>
            }</div>
        </div>
        <div className="card" style={{ height: '350px' }}>
          <div className="card-text"> {
            /*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ */}
            <div className="expandHideCode" style={{ color: 'black' }}>css
              <br></br><br></br>
            </div>
            {
              <pre>
                <code>
                  {`.breadcrumb-active {
  color: #A01313;
}
  .breadcrumb-arrow {
  margin-left: 10px;
  margin-right: 10px;
  }
`}
                </code>
              </pre>
            }</div>
        </div>
      </div>
    </div>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
