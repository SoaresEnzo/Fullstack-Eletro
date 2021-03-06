import React from 'react';
import Menu from '../../Components/Menu';
import Footer from '../../Components/Footer';


function FazerPedido() {
    const [erro, setErro] = React.useState(false);
    const [sucesso, setSucesso] = React.useState(false);
    const [windowData, setWindowData] = React.useState({produto:"",preco:"",produtoid:""})

    React.useEffect(()=>{
        const queryString = window.location.href;
        const urlParams = new URLSearchParams(queryString);
        setWindowData({produto:urlParams.get('produto'),preco:urlParams.get('preco'),produtoid:urlParams.get('produtoid')})
    },[])

    

    function registerOrder(event) {
        event.preventDefault();
        
        let formData = new FormData(event.target);
        const beforeJson = Object.fromEntries(formData.entries());
        const jsonForm = JSON.stringify(beforeJson)

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const url = "http://localhost:5000/registerorder";
        fetch(url, {
            headers: headers,
            method: "POST",
            body: jsonForm
        })
            .then((response) => response.json())
            .then((dados) => {
                if(dados){
                    setSucesso(true)
                    setTimeout(
                        () => {
                            setSucesso(false)
                        },
                        3000)
                } else {
                    setErro(true)
                    setTimeout(
                        () => {
                            setErro(false)
                        },
                        3000)

                }
            })

    }

    return (
        <div className="main-container" style={{ paddingBottom: '0', minHeight: '0vh' }}>
            <Menu />
            <div className="row my-4">
                <div className="col-sm-2"></div>
                <div className="col-sm-8 bg-light border border-dark">
                    <form onSubmit={registerOrder} className="form_pedidos" encType="application/x-www-form-urlencoded">
                        <h4 className="text-dark ml-3">Dados do pedido</h4>
                        <hr />
                        <div className="form-group">
                            <label for="nomecliente">Seu nome:</label>
                            <input type="text" name="nomecliente" className="form-control" />
                        </div>

                        <div className="form-group">
                            <label for="cpf">Seu CPF:</label>
                            <input type="text" name="cpf" className="form-control" />
                        </div>



                        <div className="form-group">
                            <label for="estado">Seu estado:</label>
                            <select className="custom-select" name="estado">
                                <option value="1">Acre</option>
                                <option value="2">Alagoas</option>
                                <option value="3">Amapá</option>
                                <option value="4">Amazonas</option>
                                <option value="5">Bahia</option>
                                <option value="6">Ceará</option>
                                <option value="7">Distrito Federal</option>
                                <option value="8">Espírito Santo</option>
                                <option value="9">Goiás</option>
                                <option value="10">Maranhão</option>
                                <option value="11">Mato Grosso</option>
                                <option value="12">Mato Grosso do Sul</option>
                                <option value="13">Minas Gerais</option>
                                <option value="14">Pará</option>
                                <option value="15">Paraíba</option>
                                <option value="16">Paraná</option>
                                <option value="17">Pernambuco</option>
                                <option value="18">Piauí</option>
                                <option value="19">Rio de Janeiro</option>
                                <option value="27">Rio Grande do Norte</option>
                                <option value="20">Rio Grande do Sul</option>
                                <option value="21">Rondônia</option>
                                <option value="22">Roraima</option>
                                <option value="23">Santa Catarina</option>
                                <option value="24">São Paulo</option>
                                <option value="25">Sergipe</option>
                                <option value="26">Tocantins</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label for="cidade">Sua cidade:</label>
                            <input type="text" name="cidade" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label for="bairro">Seu bairro:</label>
                            <input type="text" name="bairro" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label for="rua">Sua rua:</label>
                            <input type="text" name="rua" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label for="numero">Número de sua casa:</label>
                            <input type="text" name="numero" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label for="telefone">Seu telefone:</label>
                            <input type="text" name="telefone" className="form-control" />
                        </div>

                        <div className="form-group">
                            <label for="nomeproduto">Nome do produto</label>
                            <input type="text" name="nomeproduto" className="form-control" value={windowData.produto} readOnly />
                        </div>
                        <div className="form-group">
                            <label for="valunit">Valor Unitário</label>
                            <input type="number" name="valunit" id="valunit" className="form-control" value={windowData.preco} readOnly />
                        </div>

                        <div className="form-group">
                            <label for="qntd">Quantidade</label>
                            <input type="number" name="qntd" id="qntd" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label for="val_total">Valor Total</label>
                            <input type="number" name="val_total" id="val_total" className="form-control" disabled />
                        </div>
                        <input type="text" name="idproduto" value={windowData.produtoid} readOnly hidden />


                        <div className="container justify-content-end align-items-center" style={{ display: 'flex' }}>
                            <button type="submit" className="btn btn-primary btn-lg">Enviar Pedido</button>
                        </div>
                    </form>

                    {
                        sucesso && <div className="alert alert-success" role="alert">
                            Pedido enviado com sucesso.
                          </div>
                    }
                    
                     {
                        erro && <div className="alert alert-danger" role="alert">
                            Algo deu errado, cheque seu pedido.
                          </div>
                    }
                </div>
                <div className="col-sm-2"></div>
            </div>
            <Footer />
        </div>
    )
}

export default FazerPedido;