import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { Link as LinkScroll } from 'react-scroll';

function NavbarCollapse() {
    let location = useLocation()  
    const [currentLocation, setCurrentLocation] = useState(location.pathname);
    const [Phrase, setPhrase] = useState();
    useEffect (() => {
        setCurrentLocation(location.pathname)
        if (currentLocation === '/') {
            setPhrase('Bienes Raices por Naturaleza')
        }else if(currentLocation === '/about') {
            setPhrase('About')
        }
    }, [location.pathname, currentLocation]);
    const NavRef = useRef();
    const showNavBar = () => {
        NavRef.current.classList.toggle('responsive-nav');
    }

    return (
        <div className='navbar-container'>
            <header>
                <div className='title'><img className='logo-nav' src="http://fidelleorona.com/assets/img/global/logo.svg" alt="..."/></div>
                <nav ref={NavRef}>
                    <Link className='link' to='/'>Home</Link>
                    <Link className='link' to='/about'>About</Link>
                    <LinkScroll to='footer' id='contact-button' className='link'>Contact</LinkScroll>
                    <button className='nav-btn nav-close-btn' onClick={() => showNavBar()}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </button>
                </nav>
                <button className='nav-btn' onClick={() => showNavBar()}>
                    <FontAwesomeIcon icon={faBars}/>
                </button>
            </header>
            <div className='phrase-container'>
                <h3 className='navbar-phrase'>{Phrase}</h3>
            </div>
        </div>
    )
}

export default NavbarCollapse;