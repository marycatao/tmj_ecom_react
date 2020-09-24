import React from 'react';
import Logo from './Logo';
import Carrinho from './Carrinho';
import Pesquisa from './Pesquisa';
import Usuario from './Usuario';
import Menu from './Menu';
import {FaSistrix} from 'react-icons/fa';
import './navbar.css';

function Navbar (){
    return(
        <header className = 'navbar'>
            <nav>
                <ul>
                    <li className="mmobile">
                        <Menu ></Menu>
                    </li>
                    <ul className='teste'>
                        <li className="lg1"><Logo></Logo></li>
                        <li className="pesq1"><Pesquisa></Pesquisa></li>
                        <li><button><FaSistrix className = 'logo1' ></FaSistrix></button></li> 
                    </ul>
                    {/* <li className="lg"><Logo></Logo></li>
                    <li className="pesq"><Pesquisa></Pesquisa></li>
                    <li><button><FaSistrix className = 'logo1' ></FaSistrix></button></li> */}
                    <li className="user"><Usuario></Usuario></li>
                    <li className="car"><Carrinho></Carrinho></li>
                </ul>
                <ul>
                    <li className = 'burger'>
                    <Menu ></Menu>
                    </li>
                </ul>
                    
            </nav>
        </header>
    );
}

export default Navbar;