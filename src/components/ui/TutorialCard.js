import React from 'react'
import { Link } from 'react-router-dom'

export const TutorialCard = ({
    nombre,
    profesor,
    fecha,
    id
}) => {

    return (
        <div className="card ms-3 mt-2 ml-1" style={{maxWidth: 540}}>
            <div className="row no-gutters">
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{nombre}</h5>
                        <p className="card-text">{profesor}</p>
                        <p className="card-text">{fecha}</p>
                        <Link to={`./editar/${id}`}>
                            Editar
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}