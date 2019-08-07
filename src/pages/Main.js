import React,{ useEffect, useState } from 'react'
import api from '../services/api'
import logo from '../assets/logo.svg'
import like from '../assets/like.svg'
import deslike from '../assets/dislike.svg'
import '../pages/Main.css'

export default function Main({ match:{ params }}) {
    const [ users, setUsers ] = useState([])

    useEffect(() => {
       const header = { headers: { user:params.id } }
       api.get('/devs',header)
       .then(item => setUsers(item.data))
    },[params.id])

    return (
       <div className="main-container">
           <img src={logo} alt=""/>
           <ul>
{
    users.map(item => {
        return  <li key={item._id}>
                <img src={`${item.avatar}`} alt=""/>
                <footer>
                    <strong>{item.name}</strong>
                    <p>{item.bio}</p>
                </footer>
                <div className="buttons">
                    <button type="button"><img src={like} alt=""/></button>
                    <button src={deslike} type="button"><img src={deslike} alt=""/></button>
                </div>
            </li>
    })
}
           </ul>
       </div>   
    )
}
