import React, {useState} from 'react'
export default function TextForm(props) {
   
    const handleUp = ()=>{
        let v=text.toLocaleUpperCase();
        setText(v);
        props.setalert("Converted to upercase","success");
    }
    const handleLow = ()=>{
        let v=text.toLocaleLowerCase();
        setText(v);
        props.setalert("Converted to lowercase","success");

    }
    const handleClear = ()=>{
        setText("");
        props.setalert("Cleared!","success")

    }
    const handleOn = (event)=>{
    
        setText(event.target.value)
    }
    const handleCopy = (event)=>{
    
      setText(text)
      props.setalert("Text Copied!","success")
  }
    const [text, setText] = useState("");
  return (
    <>
    <div className='container' style={{color:props.mode === 'light'?'rgb(22 3 53)':'white'}}>
    <h1>{props.heading}</h1>
<div  className="mb-3">
  <textarea  className="form-control" value={text} onChange={handleOn} style={{backgroundColor:props.mode === 'light'?'white':'#1a255e',color:props.mode === 'light'?'black':'white',border: '2px solid',
    borderColore: props.mode === 'dark'?'white':'black'}} id="mybox" rows="10"></textarea>
</div>
<button disabled={text.length===0} className="btn-primary mx-1 my-1" onClick={handleUp}>Convert to Upercase</button>
<button disabled={text.length===0} className="btn-primary mx-1 my-1" onClick={handleLow}>Convert to Lowercase</button>
<button disabled={text.length===0} className="btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>  
<button disabled={text.length===0} className="btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>  
</div>
<div className='container my-3' style={{color:props.mode === 'light'?'rgb(22 3 53)':'white'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the text box above to preview here"}</p>
    </div>  </>
  )
}
