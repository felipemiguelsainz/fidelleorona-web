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
                    <img src='https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/service-1.jpg' alt="description1"></img>
                    <h3>Argentina</h3>
                    <p>Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.</p>
                </div>
                <div className='sub-cont-services1'>
                    <img src='https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/service-2.jpg' alt="description2"></img>
                    <h3>Uruguay</h3>
                    <p>Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.</p>
                </div>
                <div className='sub-cont-services1'>
                    <img src='https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/service-3.jpg' alt="description3"></img>
                    <h3>Estados Unidos</h3>
                    <p>Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.</p>
                </div>
            </div>
        </div>
    )
}

export default Services;