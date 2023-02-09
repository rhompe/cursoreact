import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Contacto = () => {
    const datosFormulario = React.useRef()

    let navigate = useNavigate();//esto me permite navegar entre paginas


    const consultarFormulario = (e) => {
        e.preventDefault()//esto me evita que se recargue la pagina
        console.log(datosFormulario.current)//esto me devuelve el formulario
        const datform = new FormData(datosFormulario.current)//esto me devuelve un objeto con los datos del formulario
        const contacto = Object.fromEntries(datform)//esto me devuelve un objeto con los datos del formulario
        console.log(contacto)
        e.target.reset()//esto me limpia el formulario
        toast.success("Se envio correctamente el formulario")//esto me muestra un mensaje de exito
        navigate('/');//siempre que se envie el formulario se va a la pagina principal, se pone al ultimo siempre este navigate

    }
    return (
    <div className='container' style={{marginTop:"50px"}}>

        <form onSubmit={consultarFormulario} ref={datosFormulario}>
            
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre </label>
          <input type="text" className="form-control" name='nombre'  />
        </div>
        <div className="mb-3">
          <label htmlFor="apellido" className="form-label">Apellido</label>
          <input type="text" className="form-control" name='apellido'  />
        </div>

        <div className="mb-3">
          <label htmlFor="celular" className="form-label">Celular</label>
          <input type="text" className="form-control" name='celular'  />
        </div>


        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" name='email' />
        </div>

        <div className="mb-3">
          <label htmlFor="textarea" className="form-label">Consulta</label>
          <textarea type="textarea" className="form-control" name='textarea' rows={3} defaultValue={""}/>
        </div>


        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
    );
}

export default Contacto;
