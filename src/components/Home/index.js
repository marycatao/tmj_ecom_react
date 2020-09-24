import React, { Children } from 'react';
import Galeria from '../produto/Galeria';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

function Home() {
  
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

export default Home;
