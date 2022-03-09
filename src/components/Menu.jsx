import React, {useEffect, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from '../firebaseConfig'


const Menu = () => {
    const historial = useHistory()
    const [usuario, setUsuario] = useState(null)
    //const email = auth.currentUser.email;
    useEffect(() => {
        const usuario = onAuthStateChanged(auth,(user) =>{
            console.log(usuario)
            if(user) {
                setUsuario(user.email)
            }
        }) 
    },[])

    const CerrarSession = () => {
        auth.signOut()
        setUsuario(null)
        historial.push('/')
    }


  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className='navbar-brand' to='/'>Inicio</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {
                                !usuario ? 
                                (
                                    <Link className='nav-link' aria-current="page" to='/login'>Login</Link>
                                )
                                :
                                (
                                    <span></span>
                                )
                            }
                        </li>
                        <li className="nav-item">
                            {
                                usuario === 'admin@admin.com' ? 
                                (
                                    <Link className='nav-link' to='/admin'>Admin</Link>
                                )
                                :
                                (
                                    <span></span>
                                )
                            }
                        </li>
                        {
                            usuario ? 
                            (
                                
                                <span className='badge bg-secondary'>{/*email*/}</span>
                            )
                            :
                            (
                                <span></span>
                            )
                        }
                    </ul>
                        {
                            usuario ? 
                            (
                                <button onClick={CerrarSession} className='btn btn-warning btn-sm'>Cerrar Session</button>
                            )
                            :
                            (
                                <span></span>
                            )
                        }
                </div>
            </div>
        </nav>
    </div>

    
  )
}

export default Menu