import React from 'react';
import fetchData from '../../functions/fetchData';

const Categorias = (props) => {
    let [categoria, setCategorias] = React.useState([]);
    let filtro = props.filtro;
    let setFiltro = props.setFiltro;

    React.useEffect(
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

    return (
        categoria.map(
            (categ) => {
                return (
                    <button onClick={handleClick} id={categ.categoria} key={categ.categoria} className="list-group-item list-group-item-action">
                        {categ.categoria} ({categ.quantidade})
                    </button>
                )
            }
        )
    )

}

export default Categorias;