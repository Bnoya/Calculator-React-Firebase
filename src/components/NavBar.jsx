import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../actions/auth';

const NavBar = () => {

    const dispatch = useDispatch();

    const handelLogout = () =>{
        dispatch(logout());
    }

    return (
    <nav className='light-green'>
        <div className="nav-wrapper">
            <span className="brand-logo">Calculadora Nominal</span>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><button onClick={handelLogout} className='btn red waves-effect waves-light'>Logout</button></li>
            </ul>
        </div>
    </nav>
    )
}

export default NavBar