import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
 
const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
 
const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: none;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 900px) {
    display: flex;
  }
`;
 
const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: calc(100vh - -20px);
  display: flex;
  position: absolute;
  justify-content: center;
  top: 78px;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
  @media (max-width: 900px) {
    top: 0;
  }
`;
 
const SidebarWrap = styled.div`
  width: 100%;
`;
 

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);
 
  const showSidebar = () => setSidebar(!sidebar);
  const handleButtonClick = () => {
    window.location.href = 'http://localhost:3001/Home';
  };

 
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <h1
            style={{ textAlign: "center",
                     margin: "auto",
                     color: "#ffffff" }}
          >
           Hair with Flair Pattern Library
          </h1>
          <button onClick={handleButtonClick} id="buttons">Example Site</button>
        </Nav>
        <div style={{backgroundColor: "black"}}>
          <SidebarNav sidebar={sidebar}>
            <SidebarWrap>
              <NavIcon to="#">
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              </NavIcon>
              {SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index} />;
              })}
            </SidebarWrap>
          </SidebarNav>
        </div>
      </IconContext.Provider>
    </>
  );
};
 
export default Sidebar;