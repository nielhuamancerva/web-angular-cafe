import { ChangeEvent, useState } from "react";


export const useForm = <T extends Object > (initstate:T) =>{
   const [formulario,setFormulario] = useState(initstate);
    const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
        const {name,value} = target;
        setFormulario({
            ...formulario,
            [name] : value
        })
    }

    return {
        formulario,
        handleChange
    }
  }
  
  