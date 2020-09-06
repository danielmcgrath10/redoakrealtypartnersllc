import React, { useState, useEffect } from "react";
import "./navbar.scss";
import {
    Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, Collapse
} from 'reactstrap';
import Tree from '../../img/tree-01.svg';

export default function CustomNavbar(props) {
    const {
        OurProcessRef
    } = props;
    const [collapsed, setCollapsed] = useState(true);
    const [activeTab, setActiveTab] = useState(window.location.href.substr(window.location.href.lastIndexOf('/') + 1))
    const toggleNavbar = () => setCollapsed(!collapsed);

    useEffect(() => {
        let location = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
        if(location !== activeTab) {
            setActiveTab(location);
        }
    })

    const scrollToRef = (ref) => {
        ref.current.scrollIntoView({ 
            behavior: "smooth", 
            block: "nearest"
        })
    }
    return (
        <div>
            <Navbar id={'header-nav'} color={'faded'} light expand="md">
                <NavbarBrand id={'title'} href={'/'} className="mr-auto">
                    <img alt={'Logo'} id={'navbar-logo'} src={Tree}/>
                    | Red Oak Realty Partners LLC.
                </NavbarBrand>
                <Nav id={'header-nav-tabs'} className="mr-auto" navbar>
                    {/* <NavItem>
                        <NavLink href>Our Process</NavLink>
                    </NavItem> */}
                    <NavItem>
                        <NavLink className={activeTab === 'home' ? 'nav-tab active' : 'nav-tab'} href={'/home'}>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={activeTab === 'contact-us' ? 'nav-tab active' : 'nav-tab'} href={'/contact-us'}>Get Started</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={activeTab === 'about-us' ? 'nav-tab active' : 'nav-tab'} href={'/about-us'}>Who We Are</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}