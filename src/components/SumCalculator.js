import React,{useState} from "react";

const SumCalculator=()=>{

  let [inputVal,setInputVal]= useState(0);
  let [sumVal,setSumVal]= useState(0);

  

  return (
    <div>
      <input type="number" onChange={(e)=>{
        setInputVal(parseInt(e.target.value));
        // setSumVal(sumVal+inputVal)
        setSumVal(sumVal+parseInt(e.target.value));
        
        }} />
      <p>Sum : {sumVal}</p>
    </div>
  )
}

export default SumCalculator;