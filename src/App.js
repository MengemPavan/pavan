
import './App.css';
import Navbar from './components/NavBar/Navbar.jsx';
import Header from './components/Header/Header.jsx';
import Home from './Screens/Home/index.jsx';
import Footer from './components/Footer/index.js';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import About from './Screens/About/index.js';
import Contact from './Screens/Contact/index.js';
import Services from './Screens/Services/index.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}


export default App;
