import React, {useState} from "react";
import './App.css';


 const App = () => {

  let time = new Date().toLocaleTimeString();

  const [ctime, setctime] = useState(time);


  const updatetiem = () => {
    let time = new Date().toLocaleTimeString();
    setctime(time)
  }

  setInterval(updatetiem, 1000)

   return (
     <div className="main-div">
        <div className="Time">
           <h1>{ctime}</h1>
        </div>
    </div>
    
   )
  }
export default App;
