import React,{ useState, useEffect } from 'react'
import './Loggin.css'
import logo from '../assets/logo.svg'

const Login = () => {
 const [ userName, setUserName ] = useState({ name: '' ,password:''})

 function user(e){
    setUserName({...userName,[e.target.name]:e.target.value })
 }

 return (
    <div className="login-container">
        <form>
          {JSON.stringify(userName)}
          <img src={logo} alt="tinDev"/>
          <input 
          name="name"
          user={userName.name}
          type="text" 
          placeholder="Digite seu usuario no github"
          onChange={user}
          />
          <input 
          name="password"
          user={userName.password}
          type="text" 
          placeholder="Digite sua senha"
          onChange={user}
          />
          <button type="submit">Enviar</button>
        </form> 
    </div>
)
}

export default Login