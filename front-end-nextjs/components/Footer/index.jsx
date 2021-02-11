import React from 'react';
import img from '../../public/images/forma-de-pagamento.png';
import Image from 'next/image';

function Footer() {
    return (
        <footer className="page-footer font-small text-light bg-dark pt-4">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h5 className="text-uppercase">Formas de pagamento</h5>
                        <Image src={img} className="img-fluid" height={40} width={240} layout="responsive" alt="Formas de pagamento"></Image>

                    </div>
                    <hr className="clearfix w-100 d-md-none pb-3"></hr>
                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Mídia</h5>
                        <ul className="list-unstyled">
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
                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Telefones</h5>
                        <ul className="list-unstyled">
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



            <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://www.recodepro.org.br/"> RecodePro</a>
            </div>

        </footer>
    );
}

export default Footer;
