import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/ourStory" activeStyle>
            Our Story
          </NavLink>
          <NavLink to="/team" activeStyle>
            Team
          </NavLink>
          <NavLink to="/memberExperience" activeStyle>
            Member Experience
          </NavLink>
          <NavLink to="/projects" activeStyle>
            Projects
          </NavLink>
          <NavLink to="/workshop" activeStyle>
            Workshop
          </NavLink>
          {/*
          <NavLink to="/designathon" activeStyle>
            Designathon
          </NavLink>
          */}
          {/*
          <NavLink to="/mentor" activeStyle>
            Mentor
          </NavLink>
          */}
          <NavLink to="/recruitment" activeStyle>
            Recruitment
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
