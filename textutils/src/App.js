import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
import {
  Routes,
  Route,
  BrowserRouter,
  
} from "react-router-dom";

function App() {
  const [mode , setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message , type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const toggleMode = ()=>{
    if(mode ===  'light'){
      setMode ('dark');
      document.body.style.background = '#042743';
      showAlert("Dark mode has been Enabled" , "success");
      document.title =  "Textutils - Dark Mode"
    }
    else{
      setMode ('light');
      document.body.style.background = 'white';
      showAlert("light mode has been Enabled" , "success");
      document.title =  "Textutils - Light Mode"
    }
  }
  return (
   <>
  <BrowserRouter>
  <Navbar title="textutils"  mode={mode}  toggleMode={toggleMode} />
  <Alert alert={alert}/>
  {/*<Navbar title="textutils"/>*/}
<div className="conatnier ">
    <Routes>
      <Route exact path ="/about" element={<About mode={mode} />}/>
      <Route exact path ="/" element={<TextForm showAlert={showAlert} heading = " Enter the Text To Analyse" mode={mode}/> }/>
    </Routes>
        </div>
    </BrowserRouter>
</>
  );
}

export default App;
