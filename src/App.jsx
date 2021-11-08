import React from 'react';
import './App.css';
import Register from './Registeration.jsx';

import {
  BrowserRouter,
  Route
} from "react-router-dom";
import Main from './Main';
import Tasks from './tasks';

function handleregistersubmit(e) {
  e.preventDefault();
  const firstvalue = e.target.parentElement.parentElement[0].value;
  const secondvalue = e.target.parentElement.parentElement[1].value;
  const thirdvalue = e.target.parentElement.parentElement[2].value;
  const fourthvalue = e.target.parentElement.parentElement[3].value;
  const fifthvalue = e.target.parentElement.parentElement[4].value;
  const user =[{firstvalue, secondvalue, thirdvalue, fourthvalue , fifthvalue}]
}


function App() {
  return (
      <BrowserRouter>
        <Route exact path="/Register"><Register handleregistersubmit={handleregistersubmit}/></Route>
        <Route exact path="/"><Main/></Route>
        <Route exact path="/tasks"><Tasks/></Route>   
      </BrowserRouter>
  );
}

export default App;
