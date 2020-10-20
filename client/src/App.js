import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import ExercisesList from './components/ExercisesList';
import EditExercise from './components/EditExercise';
import CreateExercise from './components/CreateExercise';
import CreateUser from './components/CreateUser';


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route to='/' exact component={ ExercisesList } />
        <Route path='/edit' exact component={ EditExercise } />
        <Route path='/create' exact component={ CreateExercise } />
        <Route path='/user' exact component={ CreateUser } /> 
      </div>
    </Router>
  );
};
// render={() => <ExercisesList exercises={exercises}/>}
export default App;
