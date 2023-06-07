import Services from '../Components/Services';
import Speech from "../Components/Speech";
import AboutUsHome from "../Components/AboutUsHome";
import Contact from "../Components/Contact";
import SliderComponent from '../Components/SliderComponent';
import HomePortrait from '../Components/HomePortrait';
import '../Styles/Home.css'
import Modal from '../Components/Modal';

function Home () {
    return(
        <div>
            <HomePortrait/>
            <Services/>
            <Speech/>
            <AboutUsHome/>
            <Contact/>
            <SliderComponent/>
        </div>
    )
}
export default Home;