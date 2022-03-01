import React from 'react'
import { useSelector } from 'react-redux'
import Element from '../components/Element'
import FormAdd from '../components/FormAdd'
import NavBar from '../components/NavBar'
const AppScreen = () => {

  const name = useSelector(state => state.auth.displayName)

  const data = useSelector(state => state.nomina.data);

  return (
    <>
        <NavBar />

        <div className='container animate__animated animate__zoomInUp '>
        <h1 className='center'>Hola {name}</h1>
        <hr />

        <FormAdd />

        <table className='highlight'>
          <thead>
            <tr>
                <th>Fecha</th>
                <th>Cantidad</th>
                <th>Borrar</th>
            </tr>
          </thead>
          <tbody>
          {
            data.map((element)=> {
              return (<tr className='animate__animated animate__fadeInLeft' key={element.id}> <Element data= {element}/> </tr>)
            })
          }
          
          </tbody>
        </table>

        </div>
    </>
  )
}

export default AppScreen