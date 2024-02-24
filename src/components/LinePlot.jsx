import * as d3 from "d3";
import { useState , useRef, useEffect} from "react";

export default function LinePlot({data}) {
    const svgRef = useRef()
    
    useEffect(()=>{
        const w = 500
        const h = 100 
        const svg = d3.select(svgRef.current).attr('width', w).attr('height',h).style('margin-top',50)
        const xScale = d3.scaleLinear().domain([0,50]).range([0,50])
        const yScale = d3.scaleLinear().domain([0,50]).range([50,0])
        const generateScaledLine = d3.line().x((xScale)).y((yScale)).curve(d3.curveCardinal)

        svg.selectAll('.line').data([data]).join('path').attr('d', d=> generateScaledLine(d)).attr('fill', 'none').attr('stroke','white')

    }, [data])
    
   return (
    <>
  <div className="flex justify-center w-screen">
        <svg ref={svgRef}></svg>
  </div>
    </>
  );
}