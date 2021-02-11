import React from 'react';
import Link from 'next/link';
import logo from '../../public/images/logo.png';
import Image from 'next/image';

function Menu() {

    return ( 
        <nav className="navbar navbar-expand-sm navbar-light" style={{backgroundColor: '#000000'}}>
            <Link href="/">
                <Image src={logo} className="img-responsive img-fluid img-logo" width={180} height={60} layout="intrinsic" alt="Full Stack Eletro"></Image>
            </Link>
                <button className="navbar-toggler d-lg-none bg-danger" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <Link href="/Produtos">
                            <a className="nav-link text-danger">Produtos</a>
                        </Link>
                        <Link href="/Lojas">
                            <a className="nav-link text-danger">Lojas</a>
                        </Link>
                        <Link href="/Contatos">
                            <a className="nav-link text-danger">Contatos</a>
                        </Link>
                        <Link href="/MostrarPedidos">
                            <a className="nav-link text-danger">Todos os pedidos</a>
                        </Link>
                    </ul>

                </div>
    </nav>
    );
}

export default Menu;
