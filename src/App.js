import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Register } from './Components/Register';
import { Contact } from './Components/Contact';
import { About } from './Components/About';
import { Home } from './Components/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
