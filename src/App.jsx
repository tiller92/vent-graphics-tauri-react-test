import { useState , useEffect} from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import "./styles.css";
import MySVG from "./components/MySVG";

function App() {
  const [current_pressure, setCurrentP] = useState(0);
  const [currentTime, setCurrentT] = useState(0);
  const [ventilate, setVentilate] = useState(false);
  const yRange = 50;
  const xRange= 10;
  let rustPress = 0 
  
  const handleStart = ()=> {
    if (ventilate == false) {setVentilate(true)}
    if (ventilate == true) {
        setInterval(() => {
          // get the rust current pressure
          invoke('peak_pressure_current').then((press)=> rustPress = press) 
          setCurrentP(rustPress)
      }, 100);
    let timeKeeper = 0
      setInterval(() => {
          timeKeeper++ 
          if (timeKeeper < 9){
            setCurrentT(prevTime => prevTime + 1)
          }else {
            setCurrentT(8)
          }
      }, 1000);
      }
    }
  
  return (
  <>
    <MySVG cx={current_pressure} cy={currentTime}/>
    <div>
      <button className="btn btn-info" onClick={handleStart}>Ventilate</button>
    </div>
  </> 

  ) 
};

export default App; 
