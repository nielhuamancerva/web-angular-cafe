
import {Counter} from "./components/Coounter"
import {ComponentUsuario} from "./components/Usuario"

import {ComponentTimerPadre} from "./components/TimerPadrre"
import {ComponentCounterReduce} from "./components/CounterWithRedu"
import {ComponentFormulario} from "./components/Formulario"
import { TodoProvider } from "./context/TodoProvider"
import { TodoList } from "./components/TodoList"
import { CounterTodoItem } from "./components/CounterTodoItem"
import "./App.css"
import { FaHamburger  } from "react-icons/fa";
function App() {
  return (
    <>
  <header className="header">
    <div className="header-div">
     
      <div className="header-div-logo">
       <img className="logo" src="./l (2).png"></img>
      </div>
      <input type="checkbox" id="nav-check"></input>
      <div className="header-div-icon">
        <label  htmlFor="nav-check" id="label" className="header-div-icon-label"> 
        <FaHamburger className="icon-icon"/>
        </label>
      </div>
      <div className="header-div-menu" id="menus">
        <ul className="header-div-link" id="menu">
              <li className="header-div-link-a">Quienes Somos</li>
              <li className="header-div-link-a"> Como lo Hacemos</li>
              <li className="header-div-link-a"> Nuestros Cafés</li>
              <li className="header-div-link-a"> Punto de Venta</li>
              <li className="header-div-link-a"> Contacto</li>
        </ul>
      </div>
    </div>
  </header>
  <main className="main">
    <div className="main-div">
    
    </div>
  </main>
  <footer className="footer">
    <div className="footer-div">
          <p className="footer-div-p">
          © 2020 Copyright :
          <a className="footer-div-p-a" href="https://mdbootstrap.com/">www.shipiba.com.pe</a>
          </p>
    </div>
  </footer>
  </>
  );
}

export default App;
