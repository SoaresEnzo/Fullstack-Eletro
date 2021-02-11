import React from 'react';
import Link from 'next/link';
import fetchData from '../../functions/fetchData';
import Image from 'next/image';

const Vitrine = (props) => {
    const [produto, setProduto] = React.useState([]);

    let filtro = props.filtro
    React.useEffect(
        () => {
            fetchData("http://localhost:5000/getprodutos", setProduto)

        }, [])

    return (
        produto.filter(
            produtoFiltrar => (produtoFiltrar.categoria === filtro.categ && parseFloat(produtoFiltrar.preco) > filtro.precoMin && parseFloat(produtoFiltrar.preco) < filtro.precoMax) || (filtro.categ === 'Todos' && parseFloat(produtoFiltrar.preco) > filtro.precoMin && parseFloat(produtoFiltrar.preco) < filtro.precoMax))
            .map(produto => (
                <div className="box_produto container align-self-end mx-3 my-3 text-center" id={produto.categoria} key={produto.idproduto} style={{ width: '250px', padding: '0px', margin: '0px' }}>
                    <Image src={"/images/"+produto.imagem} width={240} height={240} alt="img-produto" />
                    <br></br>
                    {produto.nome_produto}
                    <hr style={{ margin: '0px' }}></hr>
                    <small className="text-danger">R$ {produto.preco_original}</small>
                    <p className="novo text-dark lead"><b>R$ {produto.preco} </b></p>

                    <Link href={{
                        pathname: '/FazerPedido/',
                        search: '&produto=' + produto.nome_produto + '&preco=' + produto.preco + '&produtoid=' + produto.idproduto
                    }}><a className="btn btn-block btn-danger">Fazer pedido</a></Link>
                </div>
            )
            )
    )

}

export default Vitrine;