import Navbar from "../src/Components/Navbar";
import SleeveSlogan from './Components/SleeveSlogan'
import Speech from "./Components/Speech";
import '../src/Styles/TopSleeve.css'
import MainComponentAbout from "./Components/MainComponentAbout";

function App() {
  let grey = "B8B8B8"
  return (
    <>
    <div className="top-sleeve-background">
      <Navbar/>
      <SleeveSlogan/>
    </div>
  
    </>
  );
}

export default App;
