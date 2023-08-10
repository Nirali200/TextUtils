
import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import About from './component/about';
// import TextForm from './component/textForm';


function App() {
 const [mode,setMode] = useState('light');
 const toggleMode = () =>{
  if(mode === 'light'){
    setMode('dark');
  }
  else
  setMode('light');
 }
  return (
    <>
    <Navbar title="hi"  mode ={mode} toggleMode={toggleMode}/>
    <div className='container my-2'>
      <About />
      {/* <TextForm></TextForm> */}

    </div>
</>
  );
}

export default App;
