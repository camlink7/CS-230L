import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <h1>CS 230L</h1>
        <h2>Section -- 02</h2>
        <p>WVU ID: 800381566</p>
        <p>Hi I am Camden</p>
        <Card/>
    </div>
  );
}

export default App;
