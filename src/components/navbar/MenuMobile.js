import React from 'react';
import {FaBars} from 'react-icons/fa';

function MenuMobile() {
    return (
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="navbarCollapse" aria-expanded="true" aria-label="Toggle navigation">
            <span class="menu">
                <FaBars size="40" color="white"></FaBars>
            </span>
        </button>
    );
}

export default MenuMobile;