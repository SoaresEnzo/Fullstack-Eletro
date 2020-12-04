import React from 'react';
import Menu from '../../Components/Menu';
import Footer from '../../Components/Footer';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div class="main-container">
            <Menu />
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-3">Sejam bem vindo(as)</h1>
                    <p class="lead">Aqui em nossa loja, <em>programadores tem desconto</em> nos produtos para sua casa!</p>
                    <hr class="my-2"></hr>
                    <p>Veja nossa seleção de eletrodomésticos</p>
                    <p class="lead">
                        <Link to="/produtos" className="btn btn-primary btn-lg">Comprar</Link>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Landing;