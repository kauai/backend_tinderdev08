import React,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../services/api'
import logo from '../assets/logo.svg'
import like from '../assets/like.svg'
import deslike from '../assets/dislike.svg'
import '../pages/Main.css'

export default function Main({ match: { params } } ) {
    const [ users, setUsers ] = useState([])

    useEffect(() => {
       const header = { headers: { user:params.id } }
       api.get('/devs',header)
       .then(item => setUsers(item.data))
    },[params.id])

    const handleLike = async (id) => {
        const header = { headers: { user:params.id } }
        await api.post(`/devs/${id}/likes`,null,header)
    }

    const handleDeslike = async (id) => {
        const header = { headers: { user:params.id } }
        await api.post(`/devs/${id}/deslikes`,null,header)
        setUsers(users.filter(item => item._id != id))
    }

    return users.length ? (
       <div className="main-container">
           <Link to="/">
             <img src={logo} alt=""/>
           </Link>
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
                    <button onClick={() => handleLike(item._id)} type="button"><img src={like} alt=""/></button>
                    <button onClick={() => handleDeslike(item._id)} src={deslike} type="button"><img src={deslike} alt=""/></button>
                </div>
            </li>
    })
}
        </ul>
       </div> 
    ) : (
        <div className="main-container">
             <Link to="/">
               <img src={logo} alt=""/>
             </Link> 
            <div><h2 class="no-followers">Nao temos usuarios cadastrados que <span style={{ fontSize:30 }}>💩💩💩</span></h2></div>
        </div>
    )
}
