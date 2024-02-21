import { useState , useEffect} from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import "./styles.css";
import { LineChart } from '@mui/x-charts/LineChart';
import  PressureScaler from './components/PressureScaler';

function App() {
  const [current_pressure, setCurrentP] = useState(0);
  const [currentTime, setCurrentT] = useState(0);
  const [ventilate, setVentilate] = useState(false);
  const yRange = 50;
  const xRange= 10;
  
  const handleStart = ()=> {
    if (ventilate == false) {setVentilate(true)}
    if (ventilate == true) {
      setInterval(() => {
          setCurrentP(prevPressure => prevPressure + 2)
          setCurrentT(prevTime => prevTime + 1)
      }, 2000);
      }
    }

  return (
  <>
    <PressureScaler rows={xRange} cols={yRange} currentTime={currentTime} 
    current_pressure={current_pressure}/>
    <button className="btn"onClick={handleStart}>Ventilate</button>
  </>

  ) 
};

export default App; 
