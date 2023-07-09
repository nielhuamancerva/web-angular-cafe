import { useState } from "react";

import {ComponentTimer} from "./Timer"

export const ComponentTimerPadre = () =>{
    const [milseg,Setmilseg] = useState(1000);
    return (
<>
<span>Milisegundo { milseg}</span>
<br></br>
<button className="btn btn-outline-success"
onClick={() =>Setmilseg(1000)}>1000</button>
<button className="btn btn-outline-success"
onClick={() =>Setmilseg(2000)}>2000</button>
<ComponentTimer milseg= {milseg}></ComponentTimer>
</>
    );
  }
  
  