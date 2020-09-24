import React from 'react';
import './topo.css';

function Topo() {
    return (
        <div className="caixa">
            <ul class="textoTopo">
                <li>
                    <a href="/">Trocas e devoluções</a>
                </li>
                <a className="tracinho">|</a>
                <li>
                    <a href="/">Tire suas dúvidas</a>
                </li>
                <a className="tracinho">|</a>
                <li>
                    <a href="/">Vantagens</a>
                </li>
            </ul>
        </div >
    );
}

export default Topo;