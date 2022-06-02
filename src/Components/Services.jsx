import '../Styles/Services.css'

function Services() {
    return (
        <div className='services'>
            <h1 className='Title1'><center>Our Services</center></h1>
            <center><hr className='Line1'></hr></center>
            <div className='Cont-Services'>
                <div className='Sub-Cont-Services1'>
                    <img src='https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/service-1.jpg' alt="description1"></img>
                    <h3>Web Design</h3>
                    <p>Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.</p>
                </div>
                <div className='Sub-Cont-Services1'>
                    <img src='https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/service-2.jpg' alt="description2"></img>
                    <h3>Graphic Design</h3>
                    <p>Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.</p>
                </div>
                <div className='Sub-Cont-Services1'>
                    <img src='https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/service-3.jpg' alt="description3"></img>
                    <h3>Content Creation</h3>
                    <p>Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.</p>
                </div>
            </div>
        </div>
    )
}

export default Services;