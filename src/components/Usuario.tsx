import { useState } from "react";

interface USER {
    uid:string;
    name:string;
}

export const ComponentUsuario = () =>{

    const [user,setUser] = useState<USER>();
    const login = () => {
        setUser({
            uid: 'ABC',
            name: 'Fernando Herrera'
        });
    }
    return (
        <div className="mt-5">
        <h3>Usuario : UserState</h3>
        <button 
        onClick={login}
        className="btn btn-outline-primary">
          Login
        </button>
        <pre>{JSON.stringify(user)}</pre>
        </div>
    );
  }
  
  