import {Link} from 'react-router-dom';

const Categorias = () => {
    return (
      <> 
        <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false" to={"/category"}>
         <button className="btn btn-dark">Categorias </button> 
        </Link>
        <ul className="dropdown-menu">
          <li><Link className='dropdown-item' to={"/category/1"}>Anillos</Link></li>
          <li><Link className='dropdown-item' to={"/category/2"}>Collares</Link></li>
          <li><Link className='dropdown-item' to={"/category/3"}>Pulseras</Link></li>
          <li><Link className='dropdown-item' to={"/category/4"}>Aretes</Link></li>

        </ul>
      </li>
    </>
    );
}

export default Categorias;
