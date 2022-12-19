import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Robusta from './components/Robusta';
import Arabika from './components/Arabika';
import Variant from './components/Variant';
import Footer from './components/Footer';

function App() {
  return (
    <div id="Home" className="App">
      {/* Home section */}
      <div className='home-background bg-cover w-[100%] h-[100vh]'>
        <Navbar/>
        <Home/>
      </div>

      {/* About section */}
      <div id='About' className='h-[200px]'></div>
      <div>
        <About/>
      </div>

      {/* Coffe section */}
      <div id='Coffe' className='mt-16'>
        <Robusta/>
        <Arabika/>
      </div>

      <div id="Variant" className='my-[68px]'>
        <Variant/>
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
