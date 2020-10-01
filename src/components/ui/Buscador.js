import React, { useState,useContext } from 'react';
import {TutorialesContext} from '../context/TutorialesContext'

export const Buscador = () => {

    const {buscadorFiltro} = useContext(TutorialesContext);

    const [buscar, setBuscar] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(buscar);
        buscadorFiltro(buscar);
    }

    const obtenerBusquedaForm = (e) => {
        setBuscar(e.target.value);
        console.log(buscar)
    }

    return (
        <form
            className="col-12"
            onSubmit={handleSubmit}
        >
            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Buscar tutorial"
                        name="buscar"
                        onChange={obtenerBusquedaForm}
                    />
                </div>

                <div className="col-md-4 mt-2">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar"
                    />
                </div>


            </div>


        </form>
    )
}