import { useState } from "react";
export const ItemCount = ({ValInicial, stock}) => {
    const [contador,setContador]=useState(ValInicial);
//  var    //modificador var //EStado inicial

    const sumar=()  => (contador < stock) && setContador(contador+1)
    const restar=() => (contador > ValInicial) && setContador(contador-1)// operador ternario sin else


    return (
        <>
            <button className="btn btn-dark" onClick={()=> sumar() }>+</button>
            {contador}
            <button className="btn btn-dark" onClick={()=> restar()}>-</button>
        </>
    );
}

export default ItemCount;
