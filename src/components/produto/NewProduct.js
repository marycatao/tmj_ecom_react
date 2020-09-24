import React, { useState, useEffect } from 'react';
import BoxImg from './BoxImg';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import './ProductPage.css';
import './PutProduct.css';
import { FaRegTimesCircle } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

function NewProduct() {
    const { register, handleSubmit, errors } = useForm();
    const [categoria, setCategoria] = useState([]);
    const [funcionario, setFuncionario] = useState([]);

    const history = useHistory();

    function onSubmit(dados) {
        console.log("Data submitted: ", dados);
        api.post('/produto', dados);
        history.push('/');
    };
    useEffect(() => {
        api.get(`/categoria`).then(response => {
            setCategoria(response.data);
        })
    },[]);
    useEffect(() => {
        api.get(`/funcionario`).then(response => {
            setFuncionario(response.data);
        })
    },[]);

    return (
        <div className='p-container'>
            <div className='produto'>
                <Link to='/'><FaRegTimesCircle className='iconClose' /></Link>
                <div className='foto'>
                    <BoxImg link={require('./foto.jpg')} />
                </div>
                <div className='description'>
                    <h1>Novo Produto</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor='nomeProduto'>Produto:</label>
                        <input id='nomeProduto' name='nome' type='text' ref={register()} /><br />
                        <label htmlFor='descricao'>Descrição:</label>
                        <input id='descricao' name='descricao' type='text' ref={register()} /><br />
                        <label htmlFor='qtd'>Estoque:</label>
                        <input id='qtd' name='qtdEstoque'  type='text' ref={register()} /><br />
                        <label htmlFor='valor'>Valor: R$ </label>
                        <input id='valor' name='valor' type='text' ref={register()} /><br />
                        <label htmlFor='nomeCat'>Categoria:</label>
                        <select id='idCategoria' name='idCategoria' ref={register()}>{categoria.map((cat) =><option value={cat.id}>{cat.nome}</option>)}</select><br/>
                        <label htmlFor='idFunc'>Funcionario:</label>
                        <select id='funcionario' name='idFuncionario' ref={register()}>{funcionario.map((func) =><option value={func.id}>{func.nome}</option>)}</select><br/>
                        <label htmlFor='dataFab'>Data de Fabricação:</label>
                        <input id='dataFab' name='dataFabricacao'type='text' ref={register()} /><br />
                        <label htmlFor='fotoLink'>Link da Foto: </label>
                        <input type='text' id='fotoLink' name='fotoLink' ref={register()} /><br />
                        <div>
                            <button type='submit'>SALVAR</button>
                            <Link to={'/'}><button>CANCELAR</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NewProduct;
