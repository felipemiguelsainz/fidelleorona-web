import '../Styles/Footer.css'

function Footer () {
    return(
        <footer>
            <div className='item-list-container'>
                <ul className="item-list">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <img src="http://fidelleorona.com/assets/img/global/logo.svg" alt="..." height="50" />
            </div>
            <div>
                <p>Love Nature by Tyler Moore</p>
            </div>
        </footer>
    )
}
export default Footer;