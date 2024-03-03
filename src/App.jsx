import { useState , useEffect} from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import "./styles.css";
import MySVG from "./components/MySVG";
import PressuresDashboard from "./components/PressuresDashboard";

function App() {
  const [current_pressure, setCurrentP] = useState(0);
  const [currentTime, setCurrentT] = useState(0);
  const [ventilate, setVentilate] = useState(false);
  const yRange = 50;
  const xRange= 10;
  let rustPress = 0 
  
  const handleStart = ()=> {
    let timeKeeper = 0
    const inertavelId = setInterval(() => {
          timeKeeper++ 
          if (timeKeeper < 80){
            setCurrentT(prevTime => prevTime +10)
            invoke('peak_pressure_current').then((press)=> setCurrentP(press)) 
          }else {
            setCurrentT(800)
            invoke('peak_pressure_current').then((press)=> setCurrentP(press)) 
          }
      }, 100);
    }

  return (
  <>
    <PressuresDashboard peakPressure={current_pressure}/>
    <MySVG currentPressure={current_pressure} currentTime={currentTime}/>
    <div>
      <button className="btn btn-info" onClick={handleStart}>Ventilate</button>
    </div>
  </> 

  ) 
};

export default App; 
