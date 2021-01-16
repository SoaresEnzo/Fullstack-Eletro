import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Produtos from './pages/Produtos';
import Lojas from './pages/Lojas';
import Contatos from './pages/Contatos';
import FazerPedido from './pages/FazerPedido';
import MostrarPedidos from './pages/MostrarPedidos';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/produtos" component={Produtos} />
                <Route path="/lojas" component={Lojas} />
                <Route path="/contatos" component={Contatos} />
                <Route path="/fazerpedido" component={FazerPedido} />
                <Route path="/mostrarpedidos" component={MostrarPedidos} />
                <Route render={() => <h1>404: page not found</h1>} />
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;