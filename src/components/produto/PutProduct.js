import React, {useState, useEffect} from 'react';
import BoxImg from './BoxImg';
import { Link, useParams } from 'react-router-dom';
import api from '../../services/api';
import './ProductPage.css';
import './PutProduct.css';
import { FaTimes } from 'react-icons/fa';
import {useForm} from 'react-hook-form';
import {FaTrashAlt} from 'react-icons/fa';

function PutProduct() {
    const {id} = useParams();
    const [data, setData] = useState([]);
    const {register, handleSubmit, errors} = useForm();

    
    function onSubmit(dados) {
        console.log("Data submitted: ", dados);
        api.put(`/produto/${id}`, dados);
    };
    
    function deleteProduct(){
        api.delete(`/produto/${id}`);
        console.log("Data Deletada")
    }
    
    useEffect(() => {
        api.get(`/produto/${id}`).then(response => {
            setData(response.data);
        })
    },[]);
    useEffect(() => {
        document.getElementById("nomeProduto").value = data.nome;
        document.getElementById("descricao").value = data.descricao;
        document.getElementById("qtd").value = data.qtdEstoque;
        document.getElementById("valor").value = data.valor;
        document.getElementById("idCat").value = data.idCategoria;
        document.getElementById("nomeCat").value = data.nomeCategoria;
        document.getElementById("idFunc").value = data.idFuncionario;
        document.getElementById("nomeFunc").value = data.nomeFuncionario;
        document.getElementById("dataFab").value = data.dataFabricacao;
        document.getElementById("fotoLink").value = data.fotoLink;
      });

    // return(
    //     <div className='p-container'>
    //                 <div className='produto'>
    //                     <Link to='/'><FaRegTimesCircle className='iconClose' /></Link>
    //                     <div className='foto'>
    //                     <BoxImg link={`http://residencia-ecommerce.us-east-1.elasticbeanstalk.com/produto/${data.id}/foto`}/>
    //                     </div>
    //                     <div className='description'>
    //                         <h1>Editar Produto</h1>
    //                         <form onSubmit={handleSubmit(onSubmit)}>
    //                             <label htmlFor='nomeProduto'>Produto:</label>
    //                             <input id='nomeProduto' name='nome'placeholder={data.nome}type='text' ref={register()}/><br/>
    //                             <label htmlFor='descricao'>Descrição:</label>
    //                             <input id='descricao' name='descricao'placeholder={data.descricao} type='text' ref={register()}/><br/>
    //                             <label htmlFor='qtd'>Estoque:</label>
    //                             <input id='qtd' name='qtdEstoque' placeholder={data.qtdEstoque}type='text' ref={register()}/><br/>
    //                             <label htmlFor='valor'>Valor: R$ </label>
    //                             <input id='valor' name='valor' placeholder={data.valor}type='text' ref={register()}/><br/>
    //                             <label htmlFor='idCat'> Id Categoria:</label>
    //                             <input id='idCat' name='idCategoria' placeholder={data.idCategoria}type='text' ref={register()}/><br/>
    //                             <label htmlFor='nomeCat'>Categoria:</label>
    //                             <input id='nomeCat' name='nomeCategoria' placeholder={data.nomeCategoria}type='text' ref={register()}/><br/>
    //                             <label htmlFor='idFunc'>Id Funcionario:</label>
    //                             <input id='idFunc' name='idFuncionario' placeholder={data.idFuncionario}type='text' ref={register()}/><br/>
    //                             <label htmlFor='nomeFunc'>Funcionário:</label>
    //                             <input id='nomeFunc' name='nomeFuncionario'placeholder={data.nomeFuncionario}type='text' ref={register()}/><br/>
    //                             <label htmlFor='dataFab'>Data de Fabricação:</label>
    //                             <input id='dataFab' name='dataFabricacao' placeholder={data.dataFabricacao}type='text' ref={register()}/><br/>
    //                             <label htmlFor='fotoLink'>Link da Foto: </label>
    //                             <input id='fotoLink' name='fotoLink' placeholder={data.fotoLink}type='text' ref={register()}/><br/>
    //                         <div>
    //                         <button type='submit'>SALVAR</button>
    //                         <Link to={`/produtos/${data.id}`}><button>CANCELAR</button></Link>
    //                         </div>
    //                         </form>
    //                         <Link to='/' onClick={()=>deleteProduct()} className='deletar'>DELETAR PRODUTO</Link>
    //                     </div>
    //                 </div>
    //             </div>
    //         );
    return(
        <div className='p-container'>
            <div className='produto'>
                <Link to='/'><FaTimes className='iconClose' /></Link>
                <div className='foto'>
                <BoxImg link={`http://residencia-ecommerce.us-east-1.elasticbeanstalk.com/produto/${data.id}/foto`}/>
                </div>
                <div className='description'>
                    <h1  className="editar">Editar Produto</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="dados" htmlFor='nomeProduto'>Produto: </label>
                        <input className="balao" id='nomeProduto' placeholder={data.nome}type='text' ref={register()}/><br/>
                        <label className="dados" htmlFor='descricao'>Descrição: </label>
                        <input className="balao" id='descricao' placeholder={data.descricao} type='text' ref={register()}/><br/>
                        <label className="dados" htmlFor='qtd'>Estoque: </label>
                        <input className="balao" id='qtd' placeholder={data.qtdEstoque}type='text' ref={register()}/><br/>
                        <label htmlFor='valor' className="dados">Valor: R$ </label>
                        <input className="balao"id='valor' name='valor' placeholder={data.valor}type='text' ref={register()}/><br/>
                        <label className="dados" htmlFor='idCat'> Id Categoria: </label>
                        <input className="balao" id='idCat' placeholder={data.idCategoria}type='text' ref={register()}/><br/>
                        <label className="dados" htmlFor='nomeCat'>Categoria: </label>
                        <input className="balao" id='nomeCat' placeholder={data.nomeCategoria}type='text' ref={register()}/><br/>
                        <label className="dados" htmlFor='idFunc'>Id Funcionario: </label>
                        <input className="balao" id='idFunc' placeholder={data.idFuncionario}type='text' ref={register()}/><br/>
                        <label className="dados" htmlFor='nomeFunc'>Funcionário: </label>
                        <input className="balao" id='nomeFunc' placeholder={data.nomeFuncionario}type='text' ref={register()}/><br/>
                        <label className="dados" htmlFor='dataFab'>Data de Fabricação: </label>
                        <input className="balao" id='dataFab' placeholder={data.dataFabricacao}type='text' ref={register()}/><br/>
                        <label className="dados" htmlFor='fotoLink'>Link da Foto: </label>
                        <input className="balao" id='fotoLink' placeholder={data.fotoLink}type='text' ref={register()}/><br/>
                    <div className="grupoBotao">
                    <button className="botaoPutOroduct" type='submit'>SALVAR</button>
                    <Link to={`/produtos/${data.id}`}><button className="botaoPutOroduct">CANCELAR</button></Link>
                    </div>
                    </form>
                    <Link to='/'  onClick={()=>deleteProduct()} className='deletar'><FaTrashAlt className="iconDeletar" />DELETAR PRODUTO</Link>
                </div>
            </div>
        </div>
    );
}        
export default PutProduct;
        