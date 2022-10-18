import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Home />
        <About />
        <Pricing />
        <Contact />
      </header>
    </div>
  );
}

export default App;
