import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { login } from '../actions/auth';
import {firebase} from '../firebase/config-firebase';
import AppScreen from '../pages/AppScreen';
import LoginScreen from '../pages/LoginScreen';
import RegisterScreen from '../pages/RegisterScreen';
import AuthRouter from './AuthRouter';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';


const AppRouter = () => {
    const distpach = useDispatch();

    const [log, setLog] = useState(false);

        useEffect(() => {
        
            firebase.auth().onAuthStateChanged(
                (user) => {
                    if (user) {
                        distpach(login(user.uid, user.displayName));
                        setLog(true)
                    }else {
                        setLog(false);
                    }
                }
            )

        }, [distpach])
        
        
        return (
            <Router>

                <Routes>
                
                    <Route>
                    <Route exact path="/app" element={
                        <PrivateRouter log={log}>
                            <AppScreen />
                        </PrivateRouter>
                    }/>
                    <Route path="*" element={
                        <PublicRouter log={log}>
                            <AuthRouter/>
                        </PublicRouter>
                    }/>
                    </Route>
                </Routes>

            </Router>
        )
}

export default AppRouter