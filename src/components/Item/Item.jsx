

const Item = ({item}) => {
    return (
         <div className="card" style={{width: '18rem'}}>
            <img src={item.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{item.nombre}</h5>
                <p className="card-text">${item.precio}</p>
                <a href="#" className="btn btn-dark">Ver Producto</a>
                <a className="btn btn-dark"> favorito</a> 
                
            </div>
         </div>
              );
            }
export default Item;
