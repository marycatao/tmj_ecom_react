import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './carrinho.css';

function Carrinho() {
    return (
        <>
            <FaShoppingCart className='logo3'/>
            <a href="/" class="texto">Minha compra</a >
        </>
    )
}
export default Carrinho;