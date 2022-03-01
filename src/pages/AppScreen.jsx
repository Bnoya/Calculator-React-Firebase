import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { crearRegistro } from '../actions/nomina'
import FormAdd from '../components/FormAdd'
import NavBar from '../components/NavBar'
const AppScreen = () => {

  const name = useSelector(state => state.auth.displayName)


  return (
    <>
        <NavBar />

        <div className='container'>
        <h1 className='center'>Hola {name}</h1>
        <hr />

        <FormAdd />

        </div>
    </>
  )
}

export default AppScreen