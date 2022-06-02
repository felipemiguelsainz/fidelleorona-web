import '../Styles/AboutUsHome.css'

function AboutUsHome () {
    return(
        <div>
            <div className="aboutus-container">
                <div className="sideA">
                    <div className='subtitle'>
                        <p>ABOUT US</p>
                    </div>
                    <div className='title'>
                        <p>Tell website visitors who you are and why they should choose your business.</p>
                    </div>
                    <div className='text'>
                        <p>Because when a visitor first lands on your website, you’re a stranger to them. They have to get to know you in order to want to read your blog posts, subscribe to your email newsletter, or buy what you’re selling.</p>
                    </div>
                    <div className='button-container'>
                        <button>Find Out More</button>
                    </div>
                </div>
                <div className="sideB">
                    <img className="aboutus-img" src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/leaf.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}
export default AboutUsHome;