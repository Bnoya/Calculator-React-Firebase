import React  from 'react'
import { Navigate } from 'react-router-dom'


const PrivateRouter = ({log, children}) => {
    return ( log ? children : <Navigate to={"/login"} /> )
}

export default PrivateRouter