import '../Styles/Footer.css';
import { Link } from 'react-router-dom';
import { faWhatsapp, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer () {
    return(
        <footer id='footer'>
                <div className='nav-footer'>
                    <Link to='/'>Home</Link><br />
                    <Link to='/about'>About</Link>
                </div>
                <div className='logo-footer-container'><img className='logo-footer' src="http://fidelleorona.com/assets/img/global/logo.svg" alt="..." height={50}/></div>
                <div className='social-footer'>
                    <a><FontAwesomeIcon icon={faWhatsapp}/></a><br />
                    <a><FontAwesomeIcon icon={faLinkedin}/></a><br />
                    <a><FontAwesomeIcon icon={faInstagram}/></a><br />
                </div>
        </footer>
    )
}
export default Footer;