import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { NavLink } from 'react-router-dom';
import AuthForm from '../components/AuthForm/AuthForm';
import {loginOperation, registerOperation} from '../redux/auth/authOperation';

const AuthPage = ({match}) => {
    const dispatch = useDispatch()

    const {url} = match

    const [dataForm, setDataForm] = useState({
        email: "",
        password: ""
    })

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setDataForm({...dataForm,[name]: value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        url === '/login' && dispatch(loginOperation(dataForm))
        url === '/register' && dispatch(registerOperation(dataForm))
    }

    return (
        <>
            <AuthForm handleInputChange={handleInputChange} dataForm={dataForm} handleSubmit={handleSubmit}/>
            <NavLink to={"/login"}>Login</NavLink>
            <br/>
            <NavLink to={"/register"}>Register</NavLink>
        </>
    );
}
 
export default AuthPage;