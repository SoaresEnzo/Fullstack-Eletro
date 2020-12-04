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
                    <div class="box_produto container align-self-end mx-3 my-3 text-center" id={produto.categoria} onClick="destaque(this)" style={{ width: '250px', padding: '0px', margin: '0px' }}>
                        <img src={require('../../images/' + produto.imagem).default} style={{ width: '120px' }} alt="img-produto"></img>
                        <br></br>
                        {produto.nome_produto}
                        <hr style={{ margin: '0px' }}></hr>
                        <small class="text-danger">R$ {produto.preco_original}</small>
                        <p class="novo text-dark lead"><b>R$ {produto.preco} </b></p>

                        <Link to={{
                            pathname: '/fazerpedido/',
                            search: '&produto=' + produto.nome_produto + '&preco=' + produto.preco
                        }} className="btn btn-block btn-danger">Fazer pedido</Link>
                    </div>
                )
            })
    )

}



function Produtos() {
    return (
        <div class="main-container">
            <Menu />
            <header>
                <h2 class="text-dark ml-3">Produtos</h2>
            </header>
            <hr></hr>

            <div class="grid-container row">
                <aside class="categorias col-md-2 container-fluid pl-5">
                    <h3>
                        Categorias
                </h3>
                    <ul class="list-group">
                        <li onclick="mostrarTodos()" class="list-group-item list-group-item-action">
                            Todos (12)
                        </li>

                        <li onclick="mostrarCategoria('geladeira')" class="list-group-item list-group-item-action">
                            Geladeiras (3)
                    </li>
                        <li onclick="mostrarCategoria('fogao')" class="list-group-item list-group-item-action">
                            Fogões (2)
                    </li>
                        <li onclick="mostrarCategoria('microondas')" class="list-group-item list-group-item-action">
                            Microondas (3)
                    </li>
                        <li onclick="mostrarCategoria('lavadora')" class="list-group-item list-group-item-action">
                            Lavadora de roupas (2)
                    </li>
                        <li onclick="mostrarCategoria('lavaloucas')" class="list-group-item list-group-item-action">
                            Lava-louças (2)
                    </li>
                    </ul>

                    <h3>
                        Preço
                </h3>

                    <ul id="filtropreco" class="list-group">
                        <li class="list-group-item">
                            <div class="form-group">
                                <label for="precoMin">De:</label>
                                <input type="number" name="precoMin" id="precoMin" class="form-control input" placeholder="" aria-describedby="helpId"></input>
                            </div>
                        </li>

                        <li class="list-group-item">
                            <div class="form-group">
                                <label for="precoMax">Até:</label>
                                <input type="number" name="precoMin" id="precoMax" class="form-control input" placeholder="" aria-describedby="helpId"></input>
                            </div>
                        </li>

                        <li class="list-group-item">
                            <button class="btn btn-block btn-outline-danger" onclick="filtrarPreco(precoMin.value,precoMax.value,categoria)">Filtrar</button>
                        </li>
                    </ul>

                </aside>

                <section class="produtos col-md-10">
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