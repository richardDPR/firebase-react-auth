import React, {useState} from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../firebaseConfig'
import {useHistory} from 'react-router-dom'

const Login = () => {
    const historial = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [msgerror, setMsgerror] = useState(null)

    const RegistrarUsuario = (event) => {
        event.preventDefault()
        const user = createUserWithEmailAndPassword(auth,email,password)
        //console.log(user)

            user.then((r) => {
                historial.push('/')
            })
                
            .catch (event => {
                if(event.code === 'auth/invalid-email'){
                    setMsgerror('Email incorrecto')
                }
                if(event.code === 'auth/weak-password'){
                    setMsgerror('La contraseña es demasiado corta')
                }
            })
    }

    const LoginUsuario = () => {
        const login = signInWithEmailAndPassword(auth,email,password)

            login.then((r) => {
                historial.push('/')
            })
            .catch((error) => {
                if(error.code === 'auth/wrong-password'){
                    setMsgerror('Contraseña incorrecta')
                }
            })
    }

  return (
    <div className='row mt-5'>
        <h3 className='text-info'><center>Login</center></h3>
        <div className='col'></div>
        <div className='col'>
            <form onSubmit={RegistrarUsuario} className='form-group d-grid gap-2'>
                <input onChange={(event) => { setEmail(event.target.value);} }  className='form-control' type="email" placeholder='Email' />
                <input onChange={(event) => { setPassword(event.target.value);} }  className='form-control mt-2' type="password" placeholder='password' />
                <input className='btn btn-dark' type="submit" value="Registrar Usuario"/>
            </form>
            <div className='d-grid gap-2'>
                <button onClick={LoginUsuario} className='btn btn-primary mt-2'>Iniciar Session</button>
            </div>
            
            {
                msgerror != null ? 
                (
                    <div className='alert alert-danger mt-3'>{msgerror}</div>
                )
                :
                (
                    <span></span>
                )
            }
        </div>
        <div className='col'></div>

    </div>
  )
}

export default Login