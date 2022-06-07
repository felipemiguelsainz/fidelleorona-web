import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import { useRef, useState } from 'react';
import { faWhatsapp, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import '../Styles/Navbar.css';

function NavbarCollapse() {
    const NavRef = useRef();
    const showNavBar = () => {
        NavRef.current.classList.toggle('responsive-nav');
    }

    return (
        <>
            <header>
                <div className='title'><img className='logo-nav' src="http://fidelleorona.com/assets/img/global/logo.svg" alt="..."/></div>
                <nav ref={NavRef}>
                    <Link className='link' to='/'>Home</Link>
                    <Link className='link' to='/about'>About</Link>
                    <div className='social'>
                        <FontAwesomeIcon icon={faWhatsapp}/>
                        <FontAwesomeIcon icon={faLinkedin}/>
                        <FontAwesomeIcon icon={faPhone}/>
                    </div>
                    <button className='nav-btn nav-close-btn' onClick={() => showNavBar()}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </button>
                </nav>
                <button className='nav-btn' onClick={() => showNavBar()}>
                    <FontAwesomeIcon icon={faBars}/>
                </button>
            </header>
        </>
    )
}

export default NavbarCollapse;