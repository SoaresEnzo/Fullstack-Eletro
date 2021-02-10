import React, { lazy, Suspense, useEffect } from 'react';
import Menu from '../../Components/Menu';
import Footer from '../../Components/Footer';
import fetchData from '../../functions/fetchData';

const Vitrine = lazy(()=>import('../../Components/Vitrine'))

function Produtos() {
    let [categoria, setCategorias] = React.useState([]);

    let [filtro, setFiltro] = React.useState({
        categ: 'Todos',
        precoMin: 0,
        precoMax: 999999999999
    });

    useEffect(
        () => {
            fetchData("http://localhost:5000/getcategorias", setCategorias)
        }, [])


    function handleClick(event) {
        setFiltro(event.target.id)
        setFiltro({
            categ: event.target.id,
            precoMin: filtro.precoMin,
            precoMax: filtro.precoMax
        })
    }

    function filtrarPreco() {

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
                <aside className="categorias col-md-3 container-fluid pl-5">
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

                <section className="produtos col-md-9">
                    <div className="row">

                        <Suspense fallback={
                            <div class="spinner-border" role="status">
                        </div>
                        }>
                            <Vitrine filtro={filtro} />
                            {console.log(<Vitrine />)}
                        </Suspense>

                    </div>
                </section>
            </div>

            <Footer />
        </div>

    )
}

export default Produtos;