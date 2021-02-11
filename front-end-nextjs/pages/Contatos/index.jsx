import React from 'react';
import Menu from '../../Components/Menu';
import Footer from '../../Components/Footer';
import Wpp from '../../public/images/WhatsApp-icone.png';
import Email from '../../public/images/emailrender.png';
import Comentarios from '../../Components/Comentarios';

function Contatos() {
    const [render, setRender] = React.useState(false)
    const [sucesso, setSucesso] = React.useState(false)
    const [erro, setErro] = React.useState(false)

    function registerComment(event) {
        event.preventDefault();

        let formData = new FormData(event.target);
        const beforeJson = Object.fromEntries(formData.entries());
        const jsonForm = JSON.stringify(beforeJson)

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const url = "http://localhost:5000/comentarios";
        fetch(url, {
            headers: headers,
            method: "POST",
            body: jsonForm
        })
            .then((response) => response.json())
            .then((dados) => {
                setRender(!render)
                if (dados.erro) {
                    setErro(true)
                    setTimeout(
                        () => {
                            setErro(false)
                        },
                        3000)
                } else {
                    setSucesso(true)
                    setTimeout(
                        () => {
                            setSucesso(false)
                        },
                        3000)
                }

            })

    }

    return (
        <div className="container-fluid p-0">
            <Menu />
            <main>
                <h2 className="text-dark ml-3">Contato</h2>
                <hr />
                <div className="row">
                    <section className="contatos container-fluid d-flex">
                        <div className="col-md-6 justify-content-center">

                            <div className="contato container justify-content-center d-flex">
                                <img src={Email} className="img img-fluid" alt="Logo email" style={{ width: '35px' }} />
                                <h3 className="text-dark">contato@fullstackeletro.com</h3>
                            </div>
                        </div>

                        <div className="col-md-6 justify-content-center">
                            <div className="contato container justify-content-center d-flex">
                                <img src={Wpp} className="img img-fluid" alt="Logo telefone" style={{ width: '35px' }} />
                                <h3 className="text-dark">(11) 9999-99999</h3>
                            </div>
                        </div>

                    </section>
                </div>

                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <div className="container-fluid">
                            <form onSubmit={registerComment}>
                                <div className="form-group">
                                    <label htmlFor="nome">Nome:</label>
                                    <input type="text" name="nome" id="nome" className="form-control" placeholder="" aria-describedby="helpId" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="comentario">Mensagem:</label>
                                    <textarea className="form-control" name="comentario" id="comentario" rows="3"></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary">Enviar</button>
                            </form>
                        </div>

                        {
                            sucesso && <div className="alert alert-success" role="alert">
                                Mensagem enviada com sucesso.
                          </div>
                        }

                        {
                            erro && <div className="alert alert-danger" role="alert">
                                Houve um erro ao enviar a mensagem.
                          </div>
                        }

                    </div>
                    <div className="col-sm-2"></div>
                </div>
                <div className="container">

                        <Comentarios render={render} />

                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Contatos;