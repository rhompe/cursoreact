

const Categorias = () => {
    return (
      <> 
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         <button className="btn btn-dark">Categorias </button> 
        </a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Collares</a></li>
          <li><a className="dropdown-item" href="#">Pulseras</a></li>
          <li><a className="dropdown-item" href="#">Aretes</a></li>
          <li><a className="dropdown-item" href="#">Accesorios</a></li>

        </ul>
      </li>
    </>
    );
}

export default Categorias;
