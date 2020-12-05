import React, { useEffect, useState } from 'react';
import Menu from '../../Components/Menu';
import Footer from '../../Components/Footer';
import Wpp from '../../images/WhatsApp-icone.png';
import Email from '../../images/emailrender.png';


function Contatos() {
    const [comments, setComments] = useState([]);
    const [render, setRender] = useState(false)
    const [aviso, setAviso] = useState(false)

    useEffect(() => {

        async function dumpComments() {
            const url = "http://localhost/Projetos_PHP/fullstackeletro/Back-end/comentarios.php";
            const response = await fetch(url);
            setComments(await response.json());
        }

        dumpComments()
    }, [render])

    function registerComment(event) {
        event.preventDefault();
        let formData = new FormData(event.target);
        const url = "http://recode/fullstackeletro/Back-end/register-comment.php";
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then((response) => response.json())
            .then((dados) => {
                setRender(!render)
                setAviso(dados)
                setTimeout(
                    () => {
                        setAviso(false)
                    },
                    3000)

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
                                    <label for="nomemsg">Nome:</label>
                                    <input type="text" name="nomemsg" id="nomemsg" className="form-control" placeholder="" aria-describedby="helpId" />
                                </div>
                                <div className="form-group">
                                    <label for="mensagemmsg">Mensagem:</label>
                                    <textarea className="form-control" name="mensagemmsg" id="mensagem" rows="3"></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary">Enviar</button>
                            </form>
                        </div>

                        {
                            aviso && <div className="alert alert-success" role="alert">
                                Mensagem enviada com sucesso.
                          </div>
                        }
                    </div>
                    <div className="col-sm-2"></div>
                </div>

                {comments.map((comment) => {
                    return (
                        <div className="comentario container-fluid" key={comment.idcomentarios}>
                            <div className="comment container bg-light border border-dark text-dark my-2">
                                <div className="commflex d-flex justify-content-between">
                                    <h3 className="text-dark">{comment.nome}</h3>
                                    <p className="data m-0 p-0 align-self-end d-flex">{comment.data}</p>
                                </div>
                                <hr />
                                <p>{comment.comentario}</p>
                            </div>
                        </div>
                    )
                })}
            </main>
            <Footer />
        </div>
    )
}

export default Contatos;