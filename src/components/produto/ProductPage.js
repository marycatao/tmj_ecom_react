import React, {useState, useEffect} from 'react';
import BoxImg from './BoxImg';
import { Link, useParams } from 'react-router-dom';
import api from '../../services/api';
import './ProductPage.css';
import { FaPencilAlt, FaPencilRuler, FaTimes } from 'react-icons/fa';

function ProductPage() {
    const {id} = useParams();
    const [data, setData] = useState([]);
    
    
    function saveItem(id, qtd, valor){
        let posicao = Number(localStorage.getItem("itensCart")) + 1;
        localStorage.setItem("produto"+posicao, id);
        localStorage.setItem("qtd"+posicao, qtd);
        localStorage.setItem("valor"+posicao, valor);
        localStorage.setItem("itensCart", posicao);
    }
    
    useEffect(() => {
            api.get(`/produto/${id}`).then(response => {
                setData(response.data);
            })
        },[]);

        return(
                <div className='p-container'>
                    <div className='produto'>
                        <div className='icons'>
                        <Link to='/'><FaTimes className='iconClose' /></Link>
                        <Link to={`/produto/${id}`}><FaPencilAlt className='iconEdit'></FaPencilAlt></Link>
                        </div>
                        <div className='foto'>
                            <BoxImg link={`http://residencia-ecommerce.us-east-1.elasticbeanstalk.com/produto/${data.id}/foto`}/>
                        </div>
                        <div className='description'>
                            <h1>{data.nome}</h1>
                            <p className="conteudo">Descrição: {data.descricao}</p>
                            <p className="conteudo">Preço: {data.valor}</p>
                            <p className="conteudo">Quantidade em Estoque: {data.qtdEstoque}</p>
                            <p className="conteudo">Quantidade: <input type="number" id="quantity" name="quantity" defaultValue='1' min="1" onChange={()=>
                                document.getElementById('total').innerHTML = document.getElementById('quantity').value * data.valor
                            }/></p>
                            <h2>Total: R$ <span id='total'>{data.valor}</span></h2>
                            <div className="comprar">
                            <button onClick={()=>saveItem(data.id, document.getElementById('quantity').value, data.valor)}>Adicionar ao Carrinho</button>
                            <button>Comprar Agora</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        
export default ProductPage;
        