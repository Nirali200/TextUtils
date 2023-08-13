
import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import About from './component/about';
import TextForm from './component/textForm';
import Alert from './component/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "./react-router-dom";

function App() {
 const [mode,setMode] = useState('light');
 const [alert,setAlert] = useState(null);
 const setalert = (message,type)=>{
setAlert({
  msg: message,
  type: type}
)
setTimeout( ()=>{
  setAlert(null);
},1500);
 }
 const toggleMode = () =>{
  if(mode === 'light'){
    document.body.style.backgroundColor = 'rgb(22 3 53)'
    setMode('dark'); 
    setalert("Dark mode has been enable !","success");
  }
  else
  {
  document.body.style.backgroundColor='white';
  setMode('light');
  setalert("Light mode has been enable !","success");
  }
 }
  return (
    <>
    <Navbar title="hi"  mode ={mode} toggleMode={toggleMode}/>
    <Alert Alert={alert}/>
    <Router>
    <div className='container my-2'>
    <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
      <TextForm    heading ="Enter Text Here" setalert ={setalert} mode ={mode}/>
          </Route>
        </Switch>
      <About/>
    </div>
    </Router>
</>
  );
}

export default App;
