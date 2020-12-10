import React, { useEffect } from 'react';
import Menu from '../../Components/Menu';
import Footer from '../../Components/Footer';
import { Link } from 'react-router-dom';

function Produtos() {

    const [produto, setProduto] = React.useState([]);
    let [categoria, setCategorias] = React.useState([]);
    let [filtro, setFiltro] = React.useState({
        categ: 'Todos',
        precoMin: 0,
        precoMax: 999999999999
    });

    async function fetchData(url, func) {
        const response = await fetch(url)
        let dados = await response.json()
        func(dados);
    }

    useEffect(
        () => {
            fetchData("http://localhost/Projetos_PHP/fullstackeletro/Back-end/produtos.php", setProduto)

        }, [])

    useEffect(
        () => {
            fetchData("http://localhost/Projetos_PHP/fullstackeletro/Back-end/categorias.php", setCategorias)
        }, [])


    function handleClick(event) {
        setFiltro(event.target.id)
        setFiltro({
            categ: event.target.id,
            precoMin: filtro.precoMin,
            precoMax: filtro.precoMax
        })
    }

    function filtrarPreco(){

        const precomin = parseFloat(document.getElementById("precoMin").value)
        const precomax = parseFloat(document.getElementById("precoMax").value)
        setFiltro({
            categ: filtro.categ,
            precoMin: precomin,
            precoMax: precomax
        })
        
    }

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
                    <div className="list-group">
                        {categoria.map((categ) => {
                            return (
                                <button onClick={handleClick} id={categ.categoria} key={categ.categoria} className="list-group-item list-group-item-action">
                                    {categ.categoria} ({categ.quantidade})
                                </button>
                            )
                        }
                        )
                        }

                    </div>

                    <h3>
                        Preço
                    </h3>

                    <ul id="filtropreco" className="list-group">
                        <li className="list-group-item">
                            <div className="form-group">
                                <label htmlFor="precoMin">De:</label>
                                <input type="number" name="precoMin" id="precoMin" className="form-control input" placeholder="" aria-describedby="helpId"></input>
                            </div>
                        </li>

                        <li className="list-group-item">
                            <div className="form-group">
                                <label htmlFor="precoMax">Até:</label>
                                <input type="number" name="precoMin" id="precoMax" className="form-control input" placeholder="" aria-describedby="helpId"></input>
                            </div>
                        </li>

                        <li className="list-group-item">
                            <button className="btn btn-block btn-outline-danger" onClick={filtrarPreco}>Filtrar</button>
                        </li>
                    </ul>

                </aside>

                <section className="produtos col-md-10">
                    <div className="row">

                        {produto.filter(
                            produtoFiltrar => (produtoFiltrar.categoria === filtro.categ && parseFloat(produtoFiltrar.preco) > filtro.precoMin && parseFloat(produtoFiltrar.preco) < filtro.precoMax) || (filtro.categ === 'Todos' && parseFloat(produtoFiltrar.preco) > filtro.precoMin && parseFloat(produtoFiltrar.preco) < filtro.precoMax)).map(produto => (
                                <div className="box_produto container align-self-end mx-3 my-3 text-center" id={produto.categoria} key={produto.idproduto} style={{ width: '250px', padding: '0px', margin: '0px' }}>
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
                            )}

                    </div>
                </section>
            </div>

            <Footer />
        </div>

    )
}

export default Produtos;