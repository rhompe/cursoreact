import './App.css';
import Navbar from './Navbar/Navbar';
import ItemCount from './ItemCount/ItemCount';
import ItemListContainer from './ItemListContainer/ItemListContainer';
function App() {
  

  return (
    <>
    <Navbar/>
    <ItemCount ValInicial={1} stock={10} />
    <ItemListContainer/>
    </>
  ); 
}

export default App;
