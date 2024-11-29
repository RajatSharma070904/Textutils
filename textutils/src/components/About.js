    import React from 'react'

    export default function About(props) {
    // const [mystyle, setmyStyle] = useState(
     // {
       // color: 'black',
        //backgroundColor: "white"
      //})
      let mystyle = {
        color: props.mode === 'dark'?'white' : '#042743',
        backgroundColor: props.mode ==='dark'?'#042743': 'white' ,
        border: '1px solid ' , 
        borderColor: props.mode ===  'dark'?'white' : '#042743'
      }
      {/* const [btntext , setBtnText] = useState("Enable dark Mode")
    const ToggleStyle = ()=>{
        if(mystyle.color === "black"){
          setmyStyle({
            color: 'white',
        backgroundColor: "black" ,
        border: '1px solid white'
          })
          setBtnText ("UnEnable dark Mode")
        }
        else{
          setmyStyle ({
            color: 'black',
            backgroundColor: "white"
          })
          setBtnText ("Enable Dark  Mode")
        }
      }
    */}
      return (
            <div>
              <div className="contanier my-5"  style={{color: props.mode === 'dark'?'white' : '#042743'}}>
                <h1 className='my-3' >About Us</h1>
              <div className="accordion" id="accordionExample">
          <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria- 
               expanded="true" aria-controls="collapseOne">
               <strong>Analyze your Text</strong>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={mystyle}>
                Textutils gives you a way to Analyze your text quickly nad effictively. be it word count ,
                character count or.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={mystyle} >
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" 
               aria-expanded="false" aria-controls="collapseTwo">
              <strong>  Free to Use </strong>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={mystyle} >
              Textutils is a free character tool that provides instant character count & word count statistics for a given text.
              Textutils reports the number of words and character. Thus it is suitable for writing text with word / character limit.  
              </div>
            </div>
          </div>
          <div className="accordion-item" style={mystyle} >
            <h2 className="accordion-header" id="headingThree">
             <button className="accordion-button collapsed" type="button" style={mystyle}  data-bs-toggle="collapse" data-bs- 
               target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  <strong>  Browser Compatible </strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={mystyle}>
              This Word counter software works in any web Browser such as Chrome, Firefox, Internet Explorer, safari, Opera. It Suits to count 
              Character in facebook , blog , books , excel document,pdf Document , essays,etc.
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      )
    }
