import React,{useContext} from 'react';
import { TutorialCard } from './TutorialCard';
import {TutorialesContext} from '../context/TutorialesContext'



const ListTutorial = () => {

    const {tutoriales} = useContext(TutorialesContext);

    return ( 
        <div className="row mt-4">
            {tutoriales.map(tutorial => (
                <TutorialCard
                    key={tutorial.id}
                    {...tutorial}
                />
            ))}
        </div>
     );
}
 
export default ListTutorial;