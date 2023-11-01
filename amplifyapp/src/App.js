import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Home from "./components/Home";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return ( 
    <div className="App">
      <BrowserRouter>
        <Navbar header={"CS-230L"}/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/card" element={<Card />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
