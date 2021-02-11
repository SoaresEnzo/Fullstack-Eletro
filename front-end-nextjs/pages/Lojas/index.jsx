import React from 'react';
import Menu from '../../Components/Menu';
import Footer from '../../Components/Footer';

function Lojas() {
    return (

        <div className="container-fluid p-0">
            <Menu />

            <h2 className="text-dark ml-3">Nossas lojas</h2>
            <hr></hr>
            <section className="lojas row my-5">

                <div className="loja col-sm-4 d-flex align-items-center justify-content-center">
                    <div>
                        <h3>
                            Rio de Janeiro
                    </h3>
                        <p>
                            Avenida Presidente Vargas, 5000
                    </p>
                        <p>
                            10º andar
                    </p>
                        <p>
                            Centro
                    </p>
                        <p>
                            (21) 3333-33333
                    </p>
                    </div>
                </div>
                <div className="loja col-sm-4 d-flex align-items-center justify-content-center">
                    <div>
                        <h3>
                            São Paulo
                    </h3>
                        <p>
                            Avenida Paulista, 985
                    </p>
                        <p>
                            3º andar
                    </p>
                        <p>
                            Jardins
                    </p>
                        <p>
                            (11) 4444-44444
                    </p>
                    </div>
                </div>
                <div className="loja col-sm-4 d-flex align-items-center justify-content-center">
                    <div>
                        <h3>
                            Santa Catarina
                    </h3>
                        <p>
                            Rua Major Ávila, 370
                    </p>
                        <p>
                            Vila Mariana
                    </p>
                        <p>
                            Tijuca
                    </p>
                        <p>
                            (47) 5555-5555
                    </p>
                    </div>
                </div>

            </section>
            <Footer />
        </div>
    );
}

module.exports = Lojas;