import React, { useEffect } from 'react';
import Menu from '../../Components/Menu';
import Footer from '../../Components/Footer';
import { Link } from 'react-router-dom';

function Vitrine() {
    var [produto, setProduto] = React.useState([]);
    useEffect(
        () => {
            async function fetchData() {
                const url = "http://localhost/Projetos_PHP/fullstackeletro/Back-end/produtos.php";
                const response = await fetch(url)
                setProduto(await response.json())
            }
            fetchData()
        }, [])

    return (
        produto.map(
            (produto) => {
                return (
                    <div className="box_produto container align-self-end mx-3 my-3 text-center" id={produto.categoria} onClick="destaque(this)" style={{ width: '250px', padding: '0px', margin: '0px' }}>
                        <img src={require('../../images/' + produto.imagem).default} style={{ width: '120px' }} alt="img-produto"></img>
                        <br></br>
                        {produto.nome_produto}
                        <hr style={{ margin: '0px' }}></hr>
                        <small className="text-danger">R$ {produto.preco_original}</small>
                        <p className="novo text-dark lead"><b>R$ {produto.preco} </b></p>

                        <Link to={{
                            pathname: '/fazerpedido/',
                            search: '&produto=' + produto.nome_produto + '&preco=' + produto.preco + '&produtoid=' + produto.idproduto
                        }} className="btn btn-block btn-danger">Fazer pedido</Link>
                    </div>
                )
            })
    )

}



function Produtos() {
    return (
        <div className="main-container">
            <Menu />
            <header>
                <h2 className="text-dark ml-3">Produtos</h2>
            </header>
            <hr></hr>

            <div className="grid-container row">
                <aside className="categorias col-md-2 container-fluid pl-5">
                    <h3>
                        Categorias
                </h3>
                    <ul className="list-group">
                        <li onClick="mostrarTodos()" className="list-group-item list-group-item-action">
                            Todos (12)
                        </li>

                        <li onClick="mostrarCategoria('geladeira')" className="list-group-item list-group-item-action">
                            Geladeiras (3)
                    </li>
                        <li onClick="mostrarCategoria('fogao')" className="list-group-item list-group-item-action">
                            Fogões (2)
                    </li>
                        <li onClick="mostrarCategoria('microondas')" className="list-group-item list-group-item-action">
                            Microondas (3)
                    </li>
                        <li onClick="mostrarCategoria('lavadora')" className="list-group-item list-group-item-action">
                            Lavadora de roupas (2)
                    </li>
                        <li onClick="mostrarCategoria('lavaloucas')" className="list-group-item list-group-item-action">
                            Lava-louças (2)
                    </li>
                    </ul>

                    <h3>
                        Preço
                </h3>

                    <ul id="filtropreco" className="list-group">
                        <li className="list-group-item">
                            <div className="form-group">
                                <label for="precoMin">De:</label>
                                <input type="number" name="precoMin" id="precoMin" className="form-control input" placeholder="" aria-describedby="helpId"></input>
                            </div>
                        </li>

                        <li className="list-group-item">
                            <div className="form-group">
                                <label for="precoMax">Até:</label>
                                <input type="number" name="precoMin" id="precoMax" className="form-control input" placeholder="" aria-describedby="helpId"></input>
                            </div>
                        </li>

                        <li className="list-group-item">
                            <button className="btn btn-block btn-outline-danger" onClick="filtrarPreco(precoMin.value,precoMax.value,categoria)">Filtrar</button>
                        </li>
                    </ul>

                </aside>

                <section className="produtos col-md-10">
                    <div className="row">
                        <Vitrine />
                    </div>
                </section>
            </div>

            <Footer />
        </div>

    )
}

export default Produtos;