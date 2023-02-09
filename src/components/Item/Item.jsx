import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
         <div className="card mb-3 cardProducto border-light">
            <img src={`../imagenes/${item.img}`} className="card-img-top" alt={item.nombre}/>
            <div className="card-body cardbody">
                <h5 className="card-title">{item.nombre} </h5>
                <p className="card-text">{item.marca}</p>   
                <p className="card-text">${new Intl.NumberFormat('en-IN').format( item.precio)}</p>    
                <button className="btn btn-dark"><Link className="nav-link" to={`/item/${item.id}`}>Ver producto</Link> </button>              
            </div>
         </div>
              );
            }
export default Item;
