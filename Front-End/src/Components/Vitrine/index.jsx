import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchData from '../../functions/fetchData';

const Vitrine = (props) => {
    const [produto, setProduto] = React.useState([]);

    let filtro = props.filtro
    useEffect(
        () => {
            fetchData("http://localhost:5000/getprodutos", setProduto)

        }, [])

    return (
        produto.filter(
            produtoFiltrar => (produtoFiltrar.categoria === filtro.categ && parseFloat(produtoFiltrar.preco) > filtro.precoMin && parseFloat(produtoFiltrar.preco) < filtro.precoMax) || (filtro.categ === 'Todos' && parseFloat(produtoFiltrar.preco) > filtro.precoMin && parseFloat(produtoFiltrar.preco) < filtro.precoMax))
            .map(produto => (

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
            )
    )

}

export default Vitrine;