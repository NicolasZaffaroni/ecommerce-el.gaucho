
import { useState } from "react";
import { Navbar } from "./components/layout/Navbar/Navbar";
import { ItemList } from "./components/pages/itemList/ItemList";
import  { Home } from "./components/pages/home/Home";



function App() {

  const[saludo, setSaludo] = useState("hola como estas?")

  const cambiarSaludo = (nuevoSaludo) =>{
    setSaludo( nuevoSaludo)
  }


  return (
    <div>
      <Navbar />

      <Home nombre ={"nicolas"} apellido ={"zaffaroni"}/>

      <ItemList saludo ={saludo} />

    <button onClick={ ()=> cambiarSaludo("Nuevo saludo")}>Cambiar Saludo</button>
    </div>
  );
}

export default App;
