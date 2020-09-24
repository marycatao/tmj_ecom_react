import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Galeria from './components/produto/Galeria';
import ProductPage from './components/produto/ProductPage';
import PutProduct from './components/produto/PutProduct';
import QuemSomos from './components/quemSomos/QuemSomos';
import NewProduct from './components/produto/NewProduct';
import Home from './components/Home/index'
localStorage.setItem("itensCart",0);
ReactDOM.render(
  <BrowserRouter>
     <Switch>
      <Route path="/" component={Home} exact />
        <Route path="/produtos" exact={true} component={Home} />
        <Route path={'/produtos/:id'} component={ProductPage}/>
        <Route path={'/produto/:id'} component={PutProduct} />
        <Route path={'/quemsomos'} component={QuemSomos} />
        <Route path={'/novoproduto'} component={NewProduct} />
     </Switch>
   </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
