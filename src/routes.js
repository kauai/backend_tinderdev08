import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from './pages/Main'
import Loggin from './pages/Login'

export default function Routes() {
   return(
       <Router>
           <Route path="/" exact component={ Loggin }/>
           <Route path="/devs/:id" component={ Main }/>
       </Router>
   )
}