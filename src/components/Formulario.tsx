import { ChangeEvent, useEffect, useRef, useState } from "react";
import {useForm} from "../hooks/userForm"

interface FormData {
    email:string,
    name:string
}

export const ComponentFormulario = () =>{

    const {formulario,handleChange} = useForm<FormData>({
        email:'niel@ingeniers.com',
        name:'ingeniers'
    });

    return (<form>
        <div className="mb-3">
            <label className="form-label">Email:</label>
            <input 
             type="email"
             className="form-control" 
             name="email"
             value={formulario.email}
             onChange={(ev)=>handleChange(ev)}></input>
        </div>

        <div className="mb-3">
            <label className="form-label">Nombre:</label>
            <input 
             type="text"
             className="form-control" 
             name="name"
             value={formulario.name}
             onChange={(ev)=>handleChange(ev)}></input>
        </div>
        <pre>{JSON.stringify(formulario)}</pre>
    </form>);
  }
  
  