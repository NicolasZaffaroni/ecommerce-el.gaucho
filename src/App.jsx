
import { useState } from "react";
import '@fontsource/roboto/400.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import FetchingData from "./components/pages/FetchingData/FetchingData";
import { NavBar } from "./components/layout/Navbar/Navbar";



function App() {



  return (
    <><div>
      <NavBar />
      <ItemListContainer />
    </div>
    <FetchingData /></>
        
  );
}

export default App;
