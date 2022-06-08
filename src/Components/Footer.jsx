import '../Styles/Footer.css';
import { Link } from 'react-router-dom';
import { faWhatsapp, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer () {
    return(
        <footer id='footer'>
            <div className='item-list-container'>
                <ul className="item-list">
                    <li><Link to='/' className='link'>Home</Link></li>
                    <li><Link to='/about' className='link'>About Us</Link></li>
                    <div className='social'>
                        <FontAwesomeIcon icon={faWhatsapp}/>
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </div>
                </ul>
            </div>
            <div className='logo-container'>
                <img className='logo-footer' src="http://fidelleorona.com/assets/img/global/logo.svg" alt="..."/>
            </div>
            <div>
                <p>Love Nature by Tyler Moore</p>
            </div>
        </footer>
    )
}
export default Footer;