//import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Text';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const[mode,setMode]=useState("light");
  const [btnText,setbtnText]=useState("dark");
  const[myStyle,setMyStyle]=useState({
    color:"black",
   });
   const[alert,setAlert]=useState(null);
   const handleAlert=(message,type)=>{
     setAlert({
      msg:message,
      type:type
     });
     setTimeout(()=>{
       setAlert(null);
     },1500)
   }
  const toggleState=()=>{
    if(mode==="light"){
      setMode("dark");
      setbtnText("light");
      setMyStyle({
        color:"white",
      });
      document.body.style.backgroundColor="#2c2d2c";
      handleAlert("Dark mode has been enabled","success");
      document.title="Text Analyzer-Dark Mode";
    }else{
      setMode("light");
      setbtnText("dark");
      setMyStyle({
        color:"black",
      });
      document.body.style.backgroundColor="white";
      handleAlert("Dark mode has been disabled","success");
      document.title="Text Analyzer";
    }
  }
  return (
<>
<Router>
<Navbar title={"Text-Analyzer"} mode={mode} btnText={btnText} toggle={toggleState} />
<Alert alert={alert}/>
<div className="container">
        <Routes>
          <Route exact path="/About" element={<About/>}/>
          <Route exact path="/" element={   <Text heading={"Enter the text below"} myStyle={myStyle} mode={mode} handleAlert={handleAlert} /> }/>
       </Routes>
</div>
</Router>
</>
 );
}

export default App;
