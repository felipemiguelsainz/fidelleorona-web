import '../Styles/AboutUsHome.css'

import { Link } from 'react-router-dom'

function AboutUsHome () {
    return(
        <div>
            <div className='aboutus-container' id='find-out-more'>
                <div className='side0'>
                    <img className='aboutus-img-0' src='https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/leaf.jpg' alt='' />
                </div>
                <div className='sideA'>
                    <div className='subtitle'>
                        <p>ABOUT US</p>
                    </div>
                    <div className='title'>
                        <p>Valoramos la capacidad y el talento, que se potencian trabajando en equipo</p>
                    </div>
                    <div className='text'>
                        <p>Acompanamos a nuestros clientes para vivir juntos una experiencia única y acorde a sus expectativas, entendiendo que quienes nos eligen valoran especialmente una atención diferencial</p>
                    </div>
                    <div className='button-container'>
                        <Link to={'/about'}><button className='button-find'>Find Out More</button></Link>
                    </div>
                </div>
                <div className='sideB'>
                    <img className='aboutus-img' src={require('../img/personalizado.jpg')} alt='' />
                </div>
            </div>
        </div>
    )
}
export default AboutUsHome;