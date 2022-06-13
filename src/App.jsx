import Navbar from '../src/Components/Navbar';
import Home from  './Pages/Home';
import About from './Pages/About';
import Footer from './Components/Footer';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/App.css'


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route index path='/fidelleorona-web/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
