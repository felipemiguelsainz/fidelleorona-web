import '../Styles/Navbar.css';

import { Container, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import { Link as LinkScroll } from 'react-scroll';
import React from 'react';

function NavbarCollapse() {
    let location = useLocation()
    const [currentLocation, setCurrentLocation] = useState(location.pathname);
    const [Phrase, setPhrase] = useState();
    useEffect(() => {
        setCurrentLocation(location.pathname)
        if (currentLocation === '/') {
            setPhrase('Bienes Raices por Naturaleza')
        } else if (currentLocation === '/about') {
            setPhrase('About')
        }
    }, [location.pathname, currentLocation]);
    const NavRef = useRef();
    const [isOpen, setIsOpen] = useState(false);
    if (isOpen === true) {
        window.onscroll = function () { window.scrollTo(0, 0); };
    } else if (isOpen === false) {
        window.onscroll = function () { };
    }

    return (
            <Navbar className='nav-container' expand="md">
                <Container >
                    <Navbar.Brand><img src="http://fidelleorona.com/assets/img/global/logo-negro.svg" alt="..." height={45} /></Navbar.Brand>
                    <Navbar.Toggle id='button-collapse' aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse>
                        <div className='items-container'>
                            <Link to='/fidelleorona-web/' className='link'>Home</Link>
                            <Link to='/about' className='link'>About</Link>
                            <LinkScroll to='contact' className='link'>Contact</LinkScroll>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}

export default NavbarCollapse;