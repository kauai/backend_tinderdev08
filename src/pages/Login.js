import React,{ useState, useEffect } from 'react'
import api from '../services/api'
import './Loggin.css'
import logo from '../assets/logo.svg'

const Login = ({ history }) => {
 const [ userName, setUserName ] = useState('')

 async function handleSubmit(e) {
   e.preventDefault()
    const { data:{ _id } } = await api.post('/devs',{ username: userName })
    history.push('/devs/'+ _id)
    // const { target: { name: { value } } } = e
    // console.log(userName,value)
 }

 return (
    <div className="login-container">
        <form onSubmit={handleSubmit}>
          {userName}
          <img src={logo} alt="tinDev"/>
          <input 
            name="name"
            user={userName}
            type="text" 
            placeholder="Digite seu usuario no github"
            onChange={({ target: { value } }) => setUserName(value)}
          />
          <button type="submit">Enviar</button>
        </form> 
    </div>
 )
}

export default Login