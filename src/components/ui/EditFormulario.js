import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TutorialesContext } from '../context/TutorialesContext';

const EditFormulario = ({history}) => {

    const { getTutorial, registro,updateTutorial,setRegistro } = useContext(TutorialesContext);

    const { id } = useParams();

    useEffect(() => {
        getTutorial(id);
    }, [id])

    const { nombre, profesor, materia, fecha } = registro;
    const [error,setError] = useState(false);


    const handleChange = (e) => {
        setRegistro({
            ...registro,
            [e.target.name] : e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //Comprobamos
        if (nombre === "") {
            setError(true);
        }
        if (profesor === "") {
            setError(true);
        }
        if (materia === "") {
            setError(true);
        }
        if (fecha === "") {
            setError(true);
        }

        //Llamado a la API
        updateTutorial(registro);
        history.replace('/');


    }

    return (
        <form onSubmit={handleSubmit}>
            {error && <p>Todos los camspo son obligatorios</p>}
            <h2>Editar tutorial</h2>
            <div>
                <label>Nombre</label>
                <input
                    type="text"
                    className="form-control"
                    value={nombre}
                    name="nombre"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Profesor</label>
                <input
                    type="text"
                    className="form-control"
                    value={profesor}
                    name="profesor"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Materia</label>
                <input
                    type="text"
                    className="form-control"
                    value={materia}
                    name="materia"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Fecha</label>
                <input
                    type="text"
                    className="form-control"
                    value={fecha}
                    name="fecha"
                    onChange={handleChange}
                />
            </div>

            <input
                type="submit"
                className="btn btn-primary mt-1"
                value="Editar tutorial"
            />
        </form>


    );
}

export default EditFormulario;