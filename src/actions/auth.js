import { types } from "../types/types";
import {firebase, googleAuthProvider} from '../firebase/config-firebase'

export const googleLogin = () => {
    return (dispatch) => { firebase.auth().signInWithPopup(googleAuthProvider).then(({user}) => {
        console.log(user);
        dispatch(login(user.uid, user.displayName))
    });
    }
}

export const register = (email, password, username) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then((data) => console.log(data));
    }
}

export const login = (uid, displayName) => {
    console.log(uid, displayName)
    return {
        type: types.login,
        payload: {
            uid,
            displayName,
        }

    }
}