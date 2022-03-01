import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { crearRegistro } from '../actions/nomina'
const FormAdd = () => {

    const dispatch = useDispatch();
    const [cantidadPago, setCantidadPago] = useState({
        precioHora: 0,
        horas: 0,
    });
    const {precioHora, horas} = cantidadPago

    const [viewForm, setViewForm] = useState(false);
    
    const handelClick = () => {
        setViewForm(!viewForm)
    }
    const handelChange = (e) => {
        setCantidadPago({
            ...cantidadPago,
            [e.target.name] : e.target.value,
        });


    }
    const handelSave = () => {
        const cantidadFinal = horas * precioHora;
        dispatch( crearRegistro(cantidadFinal));
    } 
    return (
        <div className='row'>
        <div className='input-field col s12'>

            <button onClick={handelClick} className={!viewForm ?  "btn green" : "btn red" }>
            {!viewForm ?  "Agregar" : "Cerrar" }
            </button>
            {
                viewForm && <div className="row center">
                <div className='input-field col s12'>

                <i className="material-icons prefix">attach_money</i>
                <input onChange={handelChange} value={precioHora} name="precioHora" id="icon_prefix1" className="materialize-textarea" type="text" placeholder='Ingrese cantidad de pago'/>
                    <br></br>
                </div>
                <div className='input-field col s12'>

                <i className="material-icons prefix">access_time</i>
                <input onChange={handelChange} value={horas} name="horas" id="icon_prefix1" className="materialize-textarea" type="text" placeholder='Ingrese cantidad de horas'/>
                    <br></br>
                </div>
                <button className='btn info' onClick={handelSave}>Calcular y Guardar</button>
                </div>
            }
        </div>
        </div>
    )
}

export default FormAdd