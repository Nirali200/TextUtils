
import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
// import About from './component/about';
import TextForm from './component/textForm';
import Alert from './component/Alert';

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
    <div className='container my-2'>
      {/* <About /> */}
      <TextForm    heading ="Enter Text Here" setalert ={setalert} mode ={mode}/>

    </div>
</>
  );
}

export default App;
