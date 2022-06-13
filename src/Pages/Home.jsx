import Services from '../Components/Services';
import Speech from "../Components/Speech";
import AboutUsHome from "../Components/AboutUsHome";
import Contact from "../Components/Contact";
import SliderComponent from '../Components/SliderComponent';
import '../Styles/Home.css'

function Home () {
    return(
        <div>
            <Services/>
            <Speech/>
            <AboutUsHome/>
            <Contact/>
            <SliderComponent/>
        </div>
    )
}
export default Home;