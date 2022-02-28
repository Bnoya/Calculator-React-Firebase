import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { register } from '../actions/auth'

const RegisterScreen = () => {

    const dispatch = useDispatch()

    const [data, setData] = useState({
        email: "",
        password: "",
        password2: "",
        username: "",
    });

    const {email, username, password, password2} = data

    const handelChange = (e) => {
        const value =  e.target.value; 

        setData({
            ... data, 
            [e.target.name]: value
        })

    }
    const handelRegister = (e) => {
        e.preventDefault();

        if (email.trim() === "" || !email.trim().includes("@") ) {
            return;
        } 
        if (username.trim().length < 2) {
            return;
        }
        if (password.trim().length < 6 ) {
            return;
        }else  {
            if (password.trim() !== password2.trim()) {
                return
            }
        }

        dispatch(register(email, password, username))
    }
    return (
        <div className='container'>
            <h3>Register</h3>
            <hr />
            <div className='row container'>

            <form onSubmit={handelRegister} className='col s12'>
            <div className="row">
                <div className="input-field col s12">
                    <i className="material-icons prefix">email</i>
                    <input onChange={handelChange} value={email} id="icon_prefix2" className="validate" type="email" name='email'/>
                    <label htmlFor="icon_prefix2">Email</label>
                </div>
                <div className="input-field col s12">
                    <i className="material-icons prefix">account_circle</i>
                    <input onChange={handelChange} value={username} id="icon_prefix3" className="validate" type="text" name='username'/>
                    <label htmlFor="icon_prefix3">Username</label>
                </div>
                <div className="input-field col s12">
                    <i className="material-icons prefix">vpn_key</i>
                    <input onChange={handelChange} value={password} id="icon_prefix4" className="validate" name='password' type="password"/>
                    <label htmlFor="icon_prefix4">Password</label>
                </div>
                <div className="input-field col s12">
                    <i className="material-icons prefix">vpn_key</i>
                    <input onChange={handelChange} value={password2} id="icon_prefix5" name='password2' className="validate" type="password"/>
                    <label htmlFor="icon_prefix5">Confirm Password</label>
                </div>

            </div>

            <button className='btn blue waves-effect waves-light' type='submit'>Sign up</button>
            <hr />



            <Link to="/login">Already have and account? Sing in!</Link>
            </form>

            </div>
        </div>
    )
}

export default RegisterScreen