import React, { useState, useEffect } from 'react';
import BoxImg from './BoxImg';
import api from '../../services/api';
import './Galeria.css';
import { Link } from 'react-router-dom';


function Galeria() {
    
    const [data, setData] = useState([]);
    const [categoria, setCategoria] = useState([]);
    const [checked, setChecked] = useState(false);
    const [produtosF, setProdutosF] = useState([]);
    const [filtroCat, setFiltroCat] = useState([]);
    
    useEffect(() => {
        api.get(`/produto`).then(response => {
            setData(response.data);
            setProdutosF(response.data);
        })
    }, []);

    useEffect(() => {
        api.get(`/categoria`).then(response => {
            setCategoria(response.data);
        })
    }, []);

    useEffect(() => {
       const p = data.filter((produto) =>{
           return produto.nomeCategoria == filtroCat;
       })
       checked ? setProdutosF(p) : setProdutosF(data);
    }, [checked]);

    return (
        <div class='galeria'>
            <div class='filtro'>
                <ul>
                    {categoria.map((cat) =>
                        <li>
                        <input type='checkbox' onChange={()=> {setChecked(!checked); setFiltroCat(cat.nome)}} name={cat.nome} id={cat.nome} />
                    <label for={cat.nome}>{cat.nome}</label>
                        </li>
                    )}
                </ul>
            </div>
            <ul>
                {produtosF.map((produto) =>
                    <li><Link to={`produtos/${produto.id}`}><BoxImg width='160px' height='240px' link={produto.fotoLink} alt={produto.nome} />
                        <p>{produto.nome}</p>
                        <p><strong>R$ {produto.valor}</strong></p>
                        <h6>6x de R$ {(produto.valor / 6).toFixed(2)}</h6>
                    </Link>
                    </li>)}
            </ul>
        </div>
    );
}

export default Galeria;