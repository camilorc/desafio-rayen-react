import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect
} from 'react-router-dom';
import TutorialesProvider from './components/context/TutorialesContext';
import { Home } from './components/pages/Home';
import Formulario from './components/ui/Formulario';
import EditFormulario from './components/ui/EditFormulario';
import { Navbar } from './components/ui/Navbar';



function App() {
  return (
    <Router>
      <TutorialesProvider>
        <div className="container">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/crear" component={Formulario} />
            <Route exact path="/editar/:id" component={EditFormulario} />
            <Redirect to="/" />
          </Switch>
        </div>
      </TutorialesProvider>
    </Router>
  );
}

export default App;
