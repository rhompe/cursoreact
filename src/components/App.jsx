import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
//tostify
import { ToastContainer } from 'react-toastify';
//components
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Contacto from './Contacto/Contacto';


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>  
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        
        
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
    </>
  ); 
}

export default App;
