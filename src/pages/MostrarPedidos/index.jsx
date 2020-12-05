import React, { useState, useEffect } from 'react';
import Menu from '../../Components/Menu';
import Footer from '../../Components/Footer';


function RetornoBanco() {
    const [linhas, setLinhas] = useState([]);
    useEffect(
        () => {
            async function fetchData() {
                const url = "http://recode/fullstackeletro/Back-end/pedidos.php";
                const response = await fetch(url);
                setLinhas(await response.json());
            }
            fetchData()
        }, [])

    return (
        linhas.map(
            (linha) => {
                return (
                    <tr>
                        <td>{linha.nome_cliente}</td>
                        <td>{linha.telefone_cliente}</td>
                        <td>{linha.nome_estado + ", " + linha.cidade_endereco + ", " + linha.bairro_endereco + ", " + linha.logradouro_endereco + ", " + linha.numero_endereco}</td>
                        <td>{linha.nome_produto}</td>
                        <td>R$ {linha.preco}</td>
                        <td>{linha.quantidade}</td>
                        <td>R$ {parseFloat(linha.quantidade * linha.preco)}</td>

                    </tr>

                )
            }
        )
    )

}

function MostrarPedidos() {
    return (
        <div className="container-fluid p-0">
            <Menu />
            <section>

                <h2 className="text-dark ml-3">Todos os pedidos</h2>

                <div className="container">
                    <table className="table table-striped table-responsive-sm table-bordered table-hover table-lg">
                        <thead className="thead-dark text-light">
                            <tr>
                                <th>Cliente</th>
                                <th>Telefone</th>
                                <th>Endereço</th>
                                <th>Produto</th>
                                <th>Valor unitário</th>
                                <th>Quantidade</th>
                                <th>Valor total</th>

                            </tr>
                        </thead>
                        <tbody>
                            <RetornoBanco />
                        </tbody>
                    </table>

                </div>
            </section>
            <Footer />
        </div>
    );
}

export default MostrarPedidos;