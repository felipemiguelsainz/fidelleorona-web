import SleeveSlogan from '../Components/SleeveSlogan';
import Services from '../Components/Services';
import Speech from "../Components/Speech";
import AboutUsHome from "../Components/AboutUsHome";
import Contact from "../Components/Contact";
import SliderComponent from '../Components/SliderComponent';

function Home () {
    return(
        <>
            <Services/>
            <Speech/>
            <AboutUsHome/>
            <Contact/>
            <SliderComponent/>
        </>
    )
}
export default Home;