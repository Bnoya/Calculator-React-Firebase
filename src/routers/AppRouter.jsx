import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { login } from '../actions/auth';
import { leerRegistros } from '../actions/nomina';
import {firebase} from '../firebase/config-firebase';
import { loadData } from '../helpers/loadData';
import AppScreen from '../pages/AppScreen';

import AuthRouter from './AuthRouter';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';


const AppRouter = () => {
    const distpach = useDispatch();

    const [log, setLog] = useState(false);

        useEffect(() => {
        
            firebase.auth().onAuthStateChanged(
                async (user) => {
                    if (user) {
                        distpach(login(user.uid, user.displayName));
                        setLog(true);

                        const nominaData = await loadData(user.uid);
                        distpach(leerRegistros(nominaData));
                    }else {
                        setLog(false);
                    }
                }
            )

        }, [distpach])
        
        
        return (
            <Router>
                <Routes>
                    <Route path="/app" element={
                        <PrivateRouter log={log}>
                            <AppScreen />
                        </PrivateRouter>
                    }/>
                    <Route path="*" element={
                        <PublicRouter log={log}>
                            <AuthRouter/>
                        </PublicRouter>
                    }/>
                </Routes>
            </Router>
        )
}

export default AppRouter