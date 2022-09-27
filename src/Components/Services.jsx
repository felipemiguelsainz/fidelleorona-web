import '../Styles/Services.css'

function Services() {
    return (
        <div className='services'>
            <div className='services-header-container'>
                <h1 className='title1'>Real Estate</h1>
                <hr className='line1'></hr>
            </div>
            <div className='cont-services'>
                <div className='sub-cont-services1'>
                    <img src={require('../img/nordelta.jpg')} alt="description1"></img>
                    <h3>Argentina</h3>
                    <p>NORDELTA</p>
                </div>
                <div className='sub-cont-services1'>
                    <img src={require('../img/garzas.jpg')} alt="description2"></img>
                    <h3>Uruguay</h3>
                    <p>LAS GARZAS</p>
                </div>
                <div className='sub-cont-services1'>
                    <img src={require('../img/oceana.jpg')} alt="description3"></img>
                    <h3>Estados Unidos</h3>
                    <p>OCEANA BAL HARBOUR</p>
                </div>
            </div>
        </div>
    )
}

export default Services;