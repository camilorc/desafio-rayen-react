import React,{useState,useContext} from 'react';
import {TutorialesContext} from '../context/TutorialesContext';

const Formulario = ({history}) => {

    const {crearTutorial,nuevoTutorial,setMensaje} = useContext(TutorialesContext);

    const [tutorial,setTutorial] = useState({
        nombre: '',
        profesor: '',
        materia: '',
        fecha: '',
    })

    const {nombre,profesor,materia,fecha} = tutorial;

    const [error,setError] = useState(false);
    const [errorguardar,setErrorGuardar] = useState(false);


    const agregarTutorial = e =>{
        e.preventDefault()
        //Comprobamos
        if(nombre=== ""){
            setError(true);
        }
        if(profesor=== ""){
            setError(true);
        }
        if(materia=== ""){
            setError(true);
        }
        if(fecha=== ""){
            setError(true);
        }
        crearTutorial(tutorial);

        //Comprobamos si existe error
        if(nuevoTutorial){

            setMensaje('Registro exitoso.');
            history.replace('/');

        }else{
            setErrorGuardar(true);
        }
        
    }

    const handleChange = (e) =>{
        setTutorial({
            ...tutorial,
            [e.target.name] : e.target.value
        });
    }

    return (  
        <form onSubmit={agregarTutorial}>
            <h2>Agrega nuevo tutorial</h2>
            {error && <p>Todos los camspo son obligatorios</p>}
            {errorguardar && <p>Ocurrio un error al guardar</p>}
            <div>
                <label>Nombre</label>
                <input 
                    type="text"
                    className="form-control"
                    value = {nombre}
                    name="nombre"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Profesor</label>
                <input 
                    type="text"
                    className="form-control"
                    value = {profesor}
                    name="profesor"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Materia</label>
                <input 
                    type="text"
                    className="form-control"
                    value = {materia}
                    name="materia"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Fecha</label>
                <input 
                    type="date"
                    className="form-control"
                    value = {fecha}
                    name="fecha"
                    onChange={handleChange}
                />
            </div>
            
            <input 
                type="submit"
                className="btn btn-primary mt-1"
                value="Agregar tutorial"
            />
        </form>


    );
}
 
export default Formulario;