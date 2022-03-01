import React from 'react'
import { Navigate } from 'react-router-dom'

const PublicRouter = ({log, children}) => {
  return !log ? children : <Navigate to="/app" />
}

export default PublicRouter