import React, {useState} from 'react'
export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase" , "success");
    }
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);

    }
    const  handlelowClick = ()=>{
        console.log("Lowercase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowerCase" , "success");
    }
    const  handleSummitClick = ()=>{
        
        let newText = "";
        setText(newText);
        props.showAlert("Summited" , "success");
    }
    const  handleClearClick = ()=>{
        
        let newText = "";
        setText(newText);
        props.showAlert("Cleared" , "success");
    }
    const handleCopy = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!" , "success");
    }
    const  handleExtraSpace = ()=>{
        let newText = text.split(/[ ] + /);
        setText(newText.join(" "));
        props.showAlert("All the space are removed" , "success");
    }
    const [text, setText] = useState("");
    
  return (
    <>
<div className='contanier' style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:  props.mode==='dark'?'#13466e':'white' , 
         color: props.mode === 'dark'?'white' :'#042743'}} id="MyBox" rows="8"></textarea>
</div>
<button className='btn btn-info mx-1' onClick={handleUpClick}>Convert to UpperCase</button>
<button type="button" className="btn btn-warning  mx-1 my-1" onClick={handlelowClick}>Convert to LowerCase</button>
<button type="button" className="btn btn-secondary  mx-1 my-1" onClick={handleSummitClick}>SUMMIT THE TEXT</button>
<button type="button" className="btn btn-success  mx-1 my-1" onClick={handleClearClick}>CLEAR</button>
<button type="button" className="btn btn-primary  mx-1 my-1 " onClick={handleExtraSpace}>Remove Extra Space</button>
<button type="button" className="btn btn-warning  mx-1 my-1 " onClick={handleCopy}>Copy All The Elment</button>
</div>
<div className="contanier my-3 " style={{color: props.mode==='dark'?'white':'#042743'}}>
   <center> <h2>Your Text Summary</h2></center> 
    <p><i>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</i> </p>
    <p><b>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}) .length}Minutes read</b></p>
   <h2> Preview</h2>
    <p>{text.length>0?text:"enter something in the textbox above to preview it here "}</p>
</div>
</>
  )
}
