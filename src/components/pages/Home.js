import React,{useContext} from 'react';
import { TutorialesContext } from '../context/TutorialesContext';
import { Buscador } from '../ui/Buscador';
import ListTutorial from '../ui/ListTutorial';

export const Home = () => {

    const {mensaje,eliminarTodo} = useContext(TutorialesContext);

    const borrarTodo = () =>{
        eliminarTodo();
    }

    return (
        <div>
            <Buscador/>
            {mensaje && <p>{mensaje}</p>}
            <ListTutorial/>
            <button
                className="btn btn-danger mt-2"
                onClick={borrarTodo}
            >
                Eliminar Todo
            </button>
        </div>
    )
}

