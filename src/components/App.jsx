import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';

//components
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>  
        <Route path='' element={<ItemDetailContainer/>}/>
        
      </Routes>

    </BrowserRouter>
    </>
  ); 
}

export default App;
