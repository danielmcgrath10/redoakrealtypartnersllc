import React, { useState } from "react";
import "./navbar.scss";
import {
    Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, Collapse
} from 'reactstrap';

export default function CustomNavbar(props) {
    const {
        OurProcessRef
    } = props;
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    const scrollToRef = (ref) => {
        ref.current.scrollIntoView({ 
            behavior: "smooth", 
            block: "nearest"
        })
    }
    return (
        <div id={'navbar'}>
            <span id={'title'}>Red Oak Realty Partners LLC.</span>
            {/* <div > */}
                    <Nav id={'nav-tabs'} navbar>
                        {/* <NavItem>
                            <NavLink href>Our Process</NavLink>
                        </NavItem> */}
                        <NavItem>
                            <NavLink className={'nav-tab'} href={'/contact-us'}>Get Started</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={'nav-tab'} href={'/about-us'}>Who We Are</NavLink>
                        </NavItem>
                    </Nav>
            {/* </div> */}
        </div>
        // <div id={'navbar'}>
        //     <Navbar color={'faded'} light>
        //         <NavbarBrand id={'title'} href={'/'} className="mr-auto">Red Oak Realty Partners LLC.</NavbarBrand>
        //         <NavbarToggler onClick={toggleNavbar} className={'mr-2'}/>
        //         <Collapse isOpen={!collapsed} navbar>
                    // <Nav navbar>
                    //     {/* <NavItem>
                    //         <NavLink href>Our Process</NavLink>
                    //     </NavItem> */}
                    //     <NavItem>
                    //         <NavLink className={'nav-tab'} href={'/about-us'}>Who We Are</NavLink>
                    //     </NavItem>
                    //     <NavItem>
                    //         <NavLink className={'nav-tab'} href={'/contact-us'}>Get Started</NavLink>
                    //     </NavItem>
                    // </Nav>
        //         </Collapse>
        //     </Navbar>
        // </div>
    )
}