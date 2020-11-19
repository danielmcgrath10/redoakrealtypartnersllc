import React, { useState, useEffect } from "react";
import "./navbar.scss";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Collapse,
} from "reactstrap";
import Tree from "../../img/tree-01.svg";

let val = window.innerWidth;

export default function CustomNavbar(props) {
  const { OurProcessRef } = props;
  const [collapsed, setCollapsed] = useState(true);
  const [needsCollapse, setNeedsCollapse] = useState(val < 1100);
  const [activeTab, setActiveTab] = useState(
    window.location.href.substr(window.location.href.lastIndexOf("/") + 1)
  );
  const toggleNavbar = () => setCollapsed(!collapsed);

  useEffect(() => {
    const handleResize = () => {
      val = window.innerWidth;
      if (val < 1100) {
        setNeedsCollapse(true);
      } else {
        setNeedsCollapse(false);
      }
    };
    window.addEventListener("resize", handleResize);
    let location = window.location.href.substr(
      window.location.href.lastIndexOf("/") + 1
    );
    if (location !== activeTab) {
      setActiveTab(location);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };
  return (
    <div>
      <Navbar id={"header-nav"} color={"faded"} light>
        <NavbarBrand id={"title"} href={"/"} className="mr-auto">
          <img alt={"RedOakRPLLC Tree Logo"} id={"navbar-logo"} src={Tree} />
          <span id={"title-span"}> Red Oak Realty Partners LLC.</span>
        </NavbarBrand>
        {needsCollapse ? (
          <>
            <NavbarToggler onClick={toggleNavbar} className={"mr-2"} />
            <Collapse isOpen={!collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink
                    className={
                      activeTab === "home" ? "nav-tab active" : "nav-tab"
                    }
                    href={"/home"}
                  >
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={
                      activeTab === "get-started" ? "nav-tab active" : "nav-tab"
                    }
                    href={"/get-started"}
                  >
                    Get Started
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={
                      activeTab === "about-us" ? "nav-tab active" : "nav-tab"
                    }
                    href={"/about-us"}
                  >
                    Who We Are
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </>
        ) : (
          <Nav id={"header-nav-tabs"} className="mr-auto" navbar>
            <NavItem>
              <NavLink
                className={activeTab === "home" ? "nav-tab active" : "nav-tab"}
                href={"/home"}
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={
                  activeTab === "get-started" ? "nav-tab active" : "nav-tab"
                }
                href={"/get-started"}
              >
                Get Started
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={
                  activeTab === "about-us" ? "nav-tab active" : "nav-tab"
                }
                href={"/about-us"}
              >
                Who We Are
              </NavLink>
            </NavItem>
          </Nav>
        )}
      </Navbar>
    </div>
  );
}
