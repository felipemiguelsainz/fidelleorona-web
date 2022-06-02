import Navbar from '../src/Components/Navbar';
import SleeveSlogan from './Components/SleeveSlogan';
import Services from './Components/Services';
import '../src/Styles/TopSleeve.css';


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
