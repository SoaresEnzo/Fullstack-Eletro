import React from 'react';
import Menu from '../Components/Menu';
import Footer from '../components/Footer';
import Link from 'next/link';

function Landing() {
    return (
        <div className="main-container">
            <Menu />
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-3">Sejam bem vindo(as)</h1>
                    <p className="lead">Aqui em nossa loja, <em>programadores tem desconto</em> nos produtos para sua casa!</p>
                    <hr className="my-2"></hr>
                    <p>Veja nossa seleção de eletrodomésticos</p>
                    <p className="lead">
                        <Link href="/Produtos"><a className="btn btn-primary btn-lg">Comprar</a></Link>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

module.exports = Landing;