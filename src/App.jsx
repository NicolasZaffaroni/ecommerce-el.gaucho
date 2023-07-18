import { BrowserRouter,Routes,Route } from 'react-router-dom';

import '@fontsource/roboto/400.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/pages/itemList/ItemListContainer';
import CartContainer from './components/pages/cart/CartContainer';
import Layout from './components/layout/Layout';
import ItemDetail from './components/pages/itemDetail/itemDetail';




function App() {



  return (
  <BrowserRouter>
    <Routes>
      <Route  element={<Layout />}>
            <Route  path="/" element={<ItemListContainer />} />
            <Route  path="/category/:categoryNombre" element={<ItemListContainer />} />
            <Route  path="/itemDetail/:id" element={<ItemDetail />} />
            <Route path="/cart" element={<CartContainer /> } />
      </Route>


          <Route  path="*" element={<h1>404 not found</h1>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
