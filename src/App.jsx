import { BrowserRouter,Routes,Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fontsource/roboto/400.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/pages/itemList/ItemListContainer';
import CartContainer from './components/pages/cart/CartContainer';
import Layout from './components/layout/Layout';
import ItemDetailContainer from './components/pages/itemDetail/ItemDetailContainer';
import CheckOutContainer from './components/pages/checkout/CheckOutContainer';
import CartContextComponent from './context/CartContext';
import FormularioFormik from './components/pages/FormularioFormik/FormularioFormik';
import Dashboard from './components/pages/dashboard/Dashboard';
import ProtectedRoutes from './routes/ProtectedRoutes';




function App() {



  return (
  <BrowserRouter>
    <CartContextComponent  >
      <Routes>
          <Route  element={<Layout />}>
                <Route  path="/" element={<ItemListContainer />} />
                <Route  path="/category/:categoryName" element={<ItemListContainer />} />
                <Route  path="/itemDetail/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<CartContainer /> } />
                <Route path="/checkOut" element={<CheckOutContainer /> } />
                <Route path="/formularioFormik" element={<FormularioFormik /> } />
          </Route>


          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard /> } />
          </Route>



            <Route  path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </CartContextComponent>
  </BrowserRouter>
    );
}

export default App;
