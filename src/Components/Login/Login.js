import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
const Login = () => {
    //google Loginsing in
    const [loginUser, setLoginUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app(); // if already initialized, use that one
    }

    const provider = new firebase.auth.GoogleAuthProvider();

    const hendelGoogle = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const singUser = { name: displayName, email: email }
                setLoginUser(singUser);
                history.replace(from);


            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;

            });
    }
    // email/password sing up
    // const hendelFrom = () => {
    //     firebase.auth().createUserWithEmailAndPassword(email, password)
    //         .then((userCredential) => {
    //             // Signed in 
    //             var user = userCredential.user;
    //             console.log(user);
    //             // ...
    //         })
    //         .catch((error) => {
    //             var errorCode = error.code;
    //             var errorMessage = error.message;
    //             // ..
    //         });
    // }
    return (
        <div>
            <h1>This is a login</h1>
            <button onClick={hendelGoogle} >sing withe google</button>
            <br />
            <br />
            {/* <form action="">
                <input onChange={hendelFrom} type="text" name="email" id="" placeholder="your email" />
                <br />
                <br />
                <input onChange={hendelFrom} type="password" name="password" id="" placeholder="your password" />
                <br />
                <br />
                <input type="submit" value="submit" />
            </form> */}
        </div>
    );
};

export default Login;