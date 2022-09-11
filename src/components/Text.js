import React,{useState} from 'react'
export default function Text(props) {
  const[text,setText]=useState("Enter text here");
  const handleUPOnClick=()=>{
    const myText=text.toUpperCase();
    setText(myText);
    if(text.length>0){
    props.handleAlert("Text is converted to uppercase","success");
    }
  }
  const handleLowOnClick=()=>{
    let lowtext=text.toLowerCase();
    setText(lowtext);
    if(text.length>0){
    props.handleAlert("Text is converted to lowercase","success");
    }
  }
  const handleOnChange=(event)=>{
    setText(event.target.value);
    
  }
  
  const handleClearOnClick=()=>{
    setText(" ");
    if(text.length>0){
    props.handleAlert("Text is cleared","success");
    }
   }
   const handleCapitalOnClick=()=>{
      let lower=text.toLowerCase();
      let arr=lower.split(" ");
      let newText="";
      for(let i=0;i<arr.length;i++){
         let str=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
         newText=newText+str+" ";
      }
      setText(newText);
      if(text.length>0){
      props.handleAlert("Text has been capitalized","success");
      }
   } 
  return (
    <>
    <div style={props.myStyle} >
    <div className="container" style={{marginTop:'60px'}} >
      <h3>{props.heading}</h3>
      <div>
         <textarea className="form-control" id="text" value={text} onChange={handleOnChange}  rows="7"></textarea>
      </div>
      <button disabled={text.length===0} className={`btn btn-${props.mode==="light"?"primary":"light"} my-2 mx-1`} onClick={handleUPOnClick}  >Change To Uppercase</button>
      <button  disabled={text.length===0} className={`btn btn-${props.mode==="light"?"primary":"light"} my-2 mx-1`} onClick={handleLowOnClick}  >Change To Lowercase</button>
      <button  disabled={text.length===0} className={`btn btn-${props.mode==="light"?"primary":"light"} my-2 mx-1`}onClick={handleCapitalOnClick}  >Capitalize</button>
      <button  disabled={text.length===0} className={`btn btn-${props.mode==="light"?"primary":"light"} my-2 mx-1`} onClick={handleClearOnClick}  >Clear Text</button>
    </div>
    <div className='my-3'>
      <h2>Word Counter</h2>
      <p>{text.split(".").length-1} sentence and {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    </div>
    <div className='my-3'>
      <h2>Read Time</h2>
      <p>{0.008*(text.split(" ").filter((element)=>{return element.length!==0}).length)} time requires to read the text</p>
    </div>
 </div>
    <div className='my-3'>
  </div>
 </>
  )
}
