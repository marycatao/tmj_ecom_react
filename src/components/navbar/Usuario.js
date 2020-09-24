import React from 'react';
import {FaUserAlt} from 'react-icons/fa';
import './usuario.css';

function Usuario() {
    return (
        <>
            <FaUserAlt className = 'logo2'></FaUserAlt>
            <a href="/" class="texto">Entre ou Cadastre-se</a>
        </>
    );
}

export default Usuario;