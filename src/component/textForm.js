import React, {useState} from 'react'
export default function TextForm(props) {
    const handleUp = ()=>{
        let v=text.toLocaleUpperCase();
        setText(v);
    }
    const handleLow = ()=>{
        let v=text.toLocaleLowerCase();
        setText(v);
    }
    const handleClear = ()=>{
        setText("");
    }
    const handleOn = (event)=>{
    
        setText(event.target.value)
    }
    const [text, setText] = useState("");
  return (
    <>
    <div className='container'>
    <h1>{props.heading}</h1>

<div  className="mb-3">

  <textarea  className="form-control" value={text} onChange={handleOn} id="mybox" rows="10"></textarea>
</div>
<button className="btn-primary mx-1" onClick={handleUp}>Convert to Upercase</button>
<button className="btn-primary mx-1" onClick={handleLow}>Convert to Lowercase</button>
<button className="btn-primary mx-1" onClick={handleClear}>Clear Text</button>
</div>
<div className='container my-3'>
    <h2>Your text summary</h2>
    <p>{text.split(" ").length-1} word and {text.length} characters</p>
    <p>{0.008*text.split(" ").length-0.008} minutes to read</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>  </>
  )
}
