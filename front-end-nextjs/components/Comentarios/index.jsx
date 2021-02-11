import React, { useEffect, useState } from 'react';
import fetchData from '../../functions/fetchData';

const Comentarios = (props) => {
    const [comments, setComments] = useState([]);

    useEffect(
        () => {
            fetchData("http://localhost:5000/comentarios", setComments)

        }, [props.render])

    return (
        comments.map((comment) => {
            return (
                <div className="row d-flex justify-content-center" key={comment._id}>
                    <div className="comentario container-fluid col-sm-8">
                        <div className="comment container bg-light border border-dark text-dark my-2">
                            <div className="commflex d-flex justify-content-between">
                                <h3 className="text-dark">{comment.nome}</h3>
                                <p className="data m-0 p-0 align-self-end d-flex">{comment.data_registro}</p>
                            </div>
                            <hr />
                            <p>{comment.comentario}</p>
                        </div>
                    </div>
                </div>
            )
        })
    )

}

export default Comentarios;