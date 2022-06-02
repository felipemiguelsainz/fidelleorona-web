import Navbar from "../src/Components/Navbar";
import SleeveSlogan from './Components/SleeveSlogan';
import Services from './Components/Services';
import Speech from "./Components/Speech";
import AboutUsHome from "./Components/AboutUsHome";
import Contact from "./Components/Contact";
import Footer from './Components/Footer';
import '../src/Styles/TopSleeve.css';


function App() {
  let grey = "B8B8B8"
  return (
    <>
    <div className="top-sleeve-background">
      <Navbar/>
      <SleeveSlogan/>
    </div>
      <Services/>
      <Speech/>
      <AboutUsHome/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
