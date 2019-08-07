import React from 'react'
import './Loggin.css'
import logo from '../assets/logo.svg'

const Login = () => (
    <div className="login-container">
        <form>
          <img src={logo} alt="tinDev"/>
          <input type="text" placeholder="Digite seu usuario no github"/>
          <button type="submit">Enviar</button>
        </form> 
    </div>
)

export default Login