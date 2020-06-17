import React from 'react';
import Hero from './components/Layout/Hero';
import Navbar from './components/Layout/Navbar';
import Home from './components/Pages/Home';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className='container'>
        <Home />
      </div>
    </>
  );
}

export default App;
