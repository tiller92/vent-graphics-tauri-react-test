import { useState , useEffect} from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import "./styles.css";
import MySVG from "./components/MySVG";
import PressuresDashboard from "./components/PressuresDashboard";
import RenderLineChart from "./components/reCharts.jsx"
import { 
  AreaChart,
  Area,
  Line,
  XAxis, 
  YAxis,
  CartesianGrid,
  Tooltip
  } from 'recharts';


function App() {
  const [current_pressure, setCurrentP] = useState(0);
  const [currentTime, setCurrentT] = useState(0);
  const [ventilate, setVentilate] = useState(false);
  const [data, setData] = useState([
    {uv:0, amt: 100},
    {uv:0, amt: 100},
    {uv:0, amt: 100},
    {uv:0, amt: 100},
    {uv:0, amt: 100},
    {uv:0, amt: 100},
    {uv:0, amt: 100},
    {uv:0, amt: 100},
  ])
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
          if (timeKeeper < 7){
            setCurrentT(prevTime => prevTime +1)
            invoke('peak_pressure_current').then((press)=> {
            let parsedPressure = parseInt(press)
            setData(prevArray => {
              const newArr = [...prevArray]
              const newObj = {uv:parsedPressure, amt:100}
             // need to insert the new obj at the new time and the following times for each item
              // timeKeeper - timeKeeper.length 
              newArr[timeKeeper] = newObj
              console.log(newArr[timeKeeper], data,timeKeeper)
              return newArr
            })
            setCurrentP(press)
          }) }
          else {
            setCurrentT(prevTime => prevTime +1)
            invoke('peak_pressure_current').then((press)=> {
            setCurrentP(press) 
            let parsedPressure = parseInt(press)
            setData(prevArray => {
              const newData = [...prevArray,{uv:parsedPressure,amt:100}]
              newData.shift()
              return newData 
            })
            })
        }
    }, 1000);
  
    }else if (ventilate == false ){
      setCurrentP(0)
      console.log("end")
    } 
    }
  return (
  <>
    <PressuresDashboard peakPressure={current_pressure}/>
    <RenderLineChart data={data}/>
      {/*<MySVG currentPressure={current_pressure} currentTime={currentTime} />*/}
    <div>
    <button className="btn btn-info" onClick={handleStart}>Ventilate</button>
    </div>
  </> 

  ) 
};

export default App; 
