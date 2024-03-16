import { useState , useEffect} from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import "./styles.css";
import MySVG from "./components/MySVG";
import PressuresDashboard from "./components/PressuresDashboard";
import RenderLineChart from "./components/reCharts.jsx"

function App() {
  const [current_pressure, setCurrentP] = useState(0);
  const [currentTime, setCurrentT] = useState(0);
  const [ventilate, setVentilate] = useState(false);
  const yRange = 50;
  const xRange= 10;
  let rustPress = 0 
  
  const handleStart = ()=> {
    if (ventilate === true) {setVentilate(false)}
    else if (ventilate === false) {setVentilate(true)}
    if (ventilate == true) {
      console.log("Start")
    let timeKeeper = 0
    const intervalId = setInterval(() => {
          timeKeeper++ 
          if (timeKeeper < 800){
            setCurrentT(prevTime => prevTime +1)
            invoke('peak_pressure_current').then((press)=> {
            setCurrentP(press)
          }) }
          else {
            setCurrentT(800)
            invoke('peak_pressure_current').then((press)=> setCurrentP(press)) 
          }
      }, 10);
    }else if (ventilate == false ){
      clearInterval(intervalId)
      setCurrentP(0)
      setCurrentT(0)
      console.log("end")
    } 
    }

  return (
  <>
    <PressuresDashboard peakPressure={current_pressure}/>
    <RenderLineChart/>
    <MySVG currentPressure={current_pressure} currentTime={currentTime} />
    <div>
    <button className="btn btn-info" onClick={handleStart}>Ventilate</button>
    </div>
  </> 

  ) 
};

export default App; 
