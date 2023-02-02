import {useState,useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
const ItemListContainer = () => {
    const [productos, setProductos]= useState([])
    useEffect(() =>{
        fetch('./json/productos.json')
        .then(response=>response.json())
        .then(products=>{
            const productsList= ItemList({products})//productos en jsx
            console.log(productsList)
            setProductos(productsList)
        })
            

    },[])
    return (
        <div>
            {productos}
        </div>
    );
}

export default ItemListContainer;
