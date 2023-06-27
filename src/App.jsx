
import { useState } from "react";
import { Navbar } from "./components/layout/Navbar/Navbar";
import { ItemList } from "./components/pages/itemList/ItemList";
import  { Home } from "./components/pages/home/Home";
import '@fontsource/roboto/400.css';
import "materialize-css/dist/css/materialize.min.css"
import "materialize-css/dist/js/materialize"
import { Button } from "@mui/material";
import Stack from '@mui/material/Stack';

function App() {

  const[chiste, setChiste] = useState("Queres que te cuente un chiste?")

  const contarChiste = (chisteContado) =>{
    setChiste(chisteContado)
  }
  const noContar = (noContado) =>{
    setChiste( noContado)
  }


  return (
    <div>
      <Navbar />

      <Home nombre ={"nicolas"} apellido ={"zaffaroni"}/>
      
      <ItemList chiste ={chiste} />

      <Stack direction="row" spacing={2}>
      <Button  onClick={ ()=> contarChiste("Que le dice un fideo al otro? oye mi cuerpo pide salsa")} variant="contained" >Si quiero</Button>
      <Button    onClick={ ()=> noContar("Sos un aburrido")} variant="contained">No quiero</Button>
    </Stack>
    </div>
  );
}

export default App;
