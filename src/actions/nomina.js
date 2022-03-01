/*

{
    id: "kuhaikhdskjhaskdha",
    fecha: "1/12/2021",
    pago: 300.00
}

*/

import { db } from "../firebase/config-firebase";


export const crearRegistro = (pago) => {

    return async (dispatch, getState) => {
        const {uid} = getState().auth;

        const datos = {
            fecha: new Date(),
            pago,
        };

        const referencia = await db.collection(`${uid}/nominas/nomina`).add(datos);
        console.log(referencia);
    }
}