import React from 'react';
import img from '../../images/forma-de-pagamento.png';

function Footer() {
    return (
        <footer class="page-footer font-small text-light bg-dark pt-4">
            <div class="container-fluid text-center text-md-left">
                <div class="row">
                    <div class="col-md-6 mt-md-0 mt-3">
                        <h5 class="text-uppercase">Formas de pagamento</h5>
                        <img src={img} class="img-fluid" alt="Formas de pagamento"></img>

                    </div>
                    <hr class="clearfix w-100 d-md-none pb-3"></hr>
                    <div class="col-md-3 mb-md-0 mb-3">
                        <h5 class="text-uppercase">Mídia</h5>
                        <ul class="list-unstyled">
                            <li>
                                <a href="#!">Instagram</a>
                            </li>
                            <li>
                                <a href="#!">Facebook</a>
                            </li>
                            <li>
                                <a href="#!">Twitter</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-3 mb-md-0 mb-3">
                        <h5 class="text-uppercase">Telefones</h5>
                        <ul class="list-unstyled">
                            <li>
                                <a href="#!">Telefone 1</a>
                            </li>
                            <li>
                                <a href="#!">Telefone 2</a>
                            </li>
                            <li>
                                <a href="#!">Telefone 3</a>
                            </li>
                            <li>
                                <a href="#!">Telefone 4</a>
                            </li>
                        </ul>

                    </div>

                </div>


            </div>



            <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://www.recodepro.org.br/"> RecodePro</a>
            </div>

        </footer>
    );
}

export default Footer;
