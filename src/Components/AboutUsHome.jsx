import '../Styles/AboutUsHome.css'

function AboutUsHome () {
    return(
        <div>
            <div className='aboutus-container' id='find-out-more'>
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
                        <button>Find Out More</button>
                    </div>
                </div>
                <div className='sideB'>
                    <img className='aboutus-img' src='https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/leaf.jpg' alt='' />
                </div>
            </div>
        </div>
    )
}
export default AboutUsHome;