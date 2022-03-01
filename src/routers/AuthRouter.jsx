import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { login } from '../actions/auth';

import {firebase} from '../firebase/config-firebase'
import LoginScreen from '../pages/LoginScreen';
import RegisterScreen from '../pages/RegisterScreen';

const AuthRouter = () => {


    return (
            <Routes>
                <Route exact path='/login' element={<LoginScreen/>} /> 
                <Route exact path='/register' element={<RegisterScreen/>} /> 
            </Routes>
    )
}

export default AuthRouter