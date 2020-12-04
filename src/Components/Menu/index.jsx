import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

function Menu() {

    return ( 
        <nav className="navbar navbar-expand-sm navbar-light" style={{backgroundColor: '#000000'}}>
            <Link className="navbar-brand" to="/">
                <img src={logo} className="img-responsive img-fluid" alt="Full Stack Eletro"></img>
            </Link>
                <button className="navbar-toggler d-lg-none bg-danger" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <Link className="nav-item" to="/produtos">
                            <a className="nav-link text-danger">Produtos</a>
                        </Link>
                        <Link className="nav-item" to="/lojas">
                            <a className="nav-link text-danger">Lojas</a>
                        </Link>
                        <Link className="nav-item" to="/contatos">
                            <a className="nav-link text-danger">Contatos</a>
                        </Link>
                        <Link className="nav-item" to="/mostrarpedidos">
                            <a className="nav-link text-danger">Todos os pedidos</a>
                        </Link>
                    </ul>

                </div>
    </nav>
    );
}

export default Menu;
