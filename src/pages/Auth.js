import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { mainContext } from '../context/MainContext';

const Auth = () => {
    const { authUser, setUser, user } = useContext(mainContext)
    const history = useHistory()

    useEffect(() => {
       setUser()
    }, [])

    if (user) {
        history.push("/")
    }
    
    return (
        <div className = 'block' >    
            <div className = 'auth-block'>
                <h2>Регистрация</h2>
                <button onClick ={authUser}>Войти </button>
            </div>
        </div>
    );
};

export default Auth;