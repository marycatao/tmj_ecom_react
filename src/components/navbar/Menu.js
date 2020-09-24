/* eslint-disable no-unreachable */
import React from 'react';
import { FaBars } from 'react-icons/fa';
import './menu.css'

function Menu() {
    return (
        // <>
        //     <div class="dropdown">
        //         <button onClick={myFunction()} class="botao dropbtn">
        //             <span class="menu">
        //                 <FaBars size="30" color="white"></FaBars>
        //             </span>
        //         </button>
        //         <div id="myDropdown" class="dropdown-content">
        //             <ul className="lista"> 
        //                 <li><a class="texto1" href="/">HOME</a></li>
        //                 <li><a class="texto2" href="/">SHOPP</a></li>
        //                 <li><a class="texto3" href="/">CATEGORIA</a></li>
        //                 <li><a class="texto4" href="/">ÁREA DO FUNCIONÁRIO</a></li>
        //                 <li><a class="texto6" href="/">QUEM SOMOS</a></li>
        //             </ul>





        //         </div>
        //     </div>

        // </>
        <>
            <button class="botao" type="button"   aria-expanded="true" >
                <span class="menu">
                    <FaBars size="30" color="white"></FaBars>
                </span>
            </button>
            <ul class="lista">
                <li>
                    <a class="texto1" href="/">HOME</a>
                </li>
                <li>
                    <a class="texto2" href="/">SHOPP</a>
                </li>
                <li>
                    <a class="texto3" href="/">CATEGORIA</a>
                </li>
                <li>
                    <a class="texto4" href="/">ÁREA DO FUNCIONÁRIO</a>
                </li>
                {/* <li>
                    <a class="texto5" href="/">ÁREA DO CLIENTE</a>
                </li> */}
                <li >
                    <a class="texto6" href="/">QUEM SOMOS</a>
                </li>
            </ul>
        </>
    );

    // function myFunction() {
    //     document.getElementById("myDropdown").classList.toggle("show")
    // }

    // window.onclick = function (event) {
    //     if (!event.target.matches('.dropbtn')) {
    //         var dropdowns = document.getElementsByClassName("dropdown-content");
    //         var i;
    //         for (i = 0; i < dropdowns.length; i++) {
    //             var openDropdown = dropdowns[i];
    //             if (openDropdown.classList.contains('show')) {
    //             openDropdown.classList.remove('show')
    //             }
    //         }
    //     }
    // }
}

export default Menu;