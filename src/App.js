import React, { Children } from 'react';
import './App.css';
import Galeria from './components/produto/Galeria';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  
  return (
    <div className="App">

      <Navbar />
      <div class='container'>
        <Galeria />
      </div>
      <Footer />

    </div>
  );
}

export default App;
