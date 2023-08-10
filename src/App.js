
import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import About from './component/about';
// import TextForm from './component/textForm';


function App() {
 const [mode] = useState('dark');
  return (
    <>
    <Navbar title="hi"  mode ={mode}/>
    <div className='container my-2'>
      <About />
      {/* <TextForm></TextForm> */}

    </div>
</>
  );
}

export default App;
