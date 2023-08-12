
import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
// import About from './component/about';
import TextForm from './component/textForm';

function App() {
 const [mode,setMode] = useState('light');
 const toggleMode = () =>{
  if(mode === 'light'){
    document.body.style.backgroundColor = 'rgb(22 3 53)'
    setMode('dark'); 
  }
  else
  {
  document.body.style.backgroundColor='white';
  setMode('light');
  }
 }
  return (
    <>
    <Navbar title="hi"  mode ={mode} toggleMode={toggleMode}/>
    <div className='container my-2'>
      {/* <About /> */}
      <TextForm heading ="Enter Text Here" mode ={mode}/>

    </div>
</>
  );
}

export default App;
