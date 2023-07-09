import { useEffect, useRef, useState } from "react";

type TimerArguments = {
    milseg:number
}

export const ComponentTimer = ({milseg}:TimerArguments) =>{
    console.log(milseg);
const [seg, setseg] = useState(0);
const ref = useRef<NodeJS.Timeout>();
useEffect(()=>{
  ref.current && clearInterval(ref.current);
  ref.current = setInterval(()=>setseg(s => s + 1),milseg);
},[milseg])
    return (
<>
<h4>Timer: <small>{seg}</small></h4>
</>);
  }
  
  