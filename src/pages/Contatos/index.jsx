import React, { useEffect, useState } from 'react';
import Menu from '../../Components/Menu';
import Footer from '../../Components/Footer';
import Wpp from '../../images/WhatsApp-icone.png';
import Email from '../../images/emailrender.png';


function LoadComments() {
    const [comments, setComments] = useState([]);
    
    useEffect(() => {

        async function dumpComments() {
            const url = "http://localhost/Projetos_PHP/fullstackeletro/Back-end/comentarios.php";
            const response = await fetch(url);
            setComments(await response.json());
        }
        
        dumpComments()
    }, [])

    return (
        comments.map((comment) => {
            return (
                <div class="comentario container-fluid" key={comment.idcomentarios}>
                    <div class="comment container bg-light border border-dark text-dark my-2">
                        <div class="commflex d-flex justify-content-between">
                            <h3 class="text-dark">{comment.nome}</h3>
                            <p class="data m-0 p-0 align-self-end d-flex">{comment.data}</p>
                        </div>
                        <hr />
                        <p>{comment.comentario}</p>
                    </div>
                </div>
            )
        })
    )

}


function Contatos() {
    return (
        <div class="container-fluid p-0">
            <Menu />
            <main>
                <h2 class="text-dark ml-3">Contato</h2>
                <hr />
                <div class="row">
                    <section class="contatos container-fluid d-flex">
                        <div class="col-md-6 justify-content-center">

                            <div class="contato container justify-content-center d-flex">
                                <img src={Email} class="img img-fluid" alt="Logo email" style={{ width: '35px' }} />
                                <h3 class="text-dark">contato@fullstackeletro.com</h3>
                            </div>
                        </div>

                        <div class="col-md-6 justify-content-center">
                            <div class="contato container justify-content-center d-flex">
                                <img src={Wpp} class="img img-fluid" alt="Logo telefone" style={{ width: '35px' }} />
                                <h3 class="text-dark">(11) 9999-99999</h3>
                            </div>
                        </div>

                    </section>
                </div>

                <div class="row">
                    <div class="col-sm-2"></div>
                    <div class="col-sm-8">
                        <div class="container-fluid">
                            <form id="msg" action="" method="POST">
                                <div class="form-group">
                                    <label for="">Nome:</label>
                                    <input type="text" name="nomemsg" id="nomemsg" class="form-control" placeholder="" aria-describedby="helpId" />
                                </div>


                                <div class="form-group">
                                    <label for="">Mensagem:</label>
                                    <textarea class="form-control" name="mensagemmsg" id="mensagem" rows="3"></textarea>
                                </div>

                                <button type="submit" class="btn btn-primary">Enviar</button>
                            </form>
                        </div>
                    </div>
                    <div class="col-sm-2"></div>
                </div>

                <LoadComments />
            </main>
            <Footer />
        </div>
    )
}

export default Contatos;