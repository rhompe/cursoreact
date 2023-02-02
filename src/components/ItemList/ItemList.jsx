import Item from '../Item/Item';
const ItemList = ({products}) => {
    return (
        <>
         {products.map(producto=> <Item item={producto} key={producto.id}/> )}   
        </>
    );
}

export default ItemList;
