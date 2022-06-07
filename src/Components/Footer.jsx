import '../Styles/Footer.css'
import { Link } from 'react-router-dom'
import { Link as LinkScroll} from 'react-scroll'

function Footer () {
    return(
        <footer>
            <div className='item-list-container'>
                <ul className="item-list">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><LinkScroll className='link' to='find-out-more'>Contact</LinkScroll></li>
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