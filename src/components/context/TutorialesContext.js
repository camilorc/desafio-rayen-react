import React,{createContext,useState,useEffect} from 'react';
import axios from 'axios'


export const TutorialesContext = createContext();

const TutorialesProvider = (props) => {

    const [tutoriales,guardarTutoriales] = useState([]);
    const [nuevoTutorial,setNuevoTutorial] = useState({});
    const [mensaje,setMensaje] = useState(null);
    const [registro,setRegistro] = useState({});

    //Funcion para obtener data de la API
    useEffect(()=>{

        obtenerTutoriales()
        
    },[])

    const obtenerTutoriales = async() =>{

        const url = "https://rayentutorialtestapp.azurewebsites.net/tutorials";
        const resultados = await axios(url);    
        guardarTutoriales(resultados.data);

    }

    const buscadorFiltro = async (buscar) =>{

        const url =  `https://rayentutorialtestapp.azurewebsites.net/tutorial?description=${buscar}`;
        const resultados = await axios(url);    
        guardarTutoriales(resultados.data);

    }

    const crearTutorial = async (tutorial) => {

        const url =  "https://rayentutorialtestapp.azurewebsites.net/createtutorial";
        const resultado = await axios.post(url,tutorial);     
        setNuevoTutorial(resultado);
        obtenerTutoriales();
    }

    const eliminarTodo = async () =>{

        const url =  "https://rayentutorialtestapp.azurewebsites.net/deletetutorials";
        const resultado = await axios.delete(url);
        console.log(resultado);
        obtenerTutoriales();
    }

    const getTutorial = async(id)=>{
        const url =  `https://rayentutorialtestapp.azurewebsites.net/tutorials/${id}`;
        const resultado = await axios(url);
        resultado.data.fecha = "2020-10-01";
        console.log(resultado.data);
        setRegistro(resultado.data);
    }

    const updateTutorial = async(tutorial) =>{

        const url =  `https://rayentutorialtestapp.azurewebsites.net/updatetutorial/${tutorial.id}`;
        const resultado = await axios.put(url,tutorial);    
        console.log(resultado);
        obtenerTutoriales();
    }

    return (  
        <TutorialesContext.Provider
            value={{
                tutoriales,
                mensaje,
                setMensaje,
                registro,
                buscadorFiltro,
                nuevoTutorial,
                crearTutorial,
                eliminarTodo,
                getTutorial,
                updateTutorial,
                setRegistro
            }}
        >
            {props.children}
        </TutorialesContext.Provider>
    );
}
 
export default TutorialesProvider;