import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Todo from '../todo/todo'
import About from '../about/about'

// Router engloba as rotas
// Route é a rota que entra dentro da pasta='' e carrega o componente=''
export default props => (
    <Router history={hashHistory}>
        <Route path='/todos' component={Todo}/>
        <Route path='/about' component={About}/>
        <Redirect from='*' to='/todos' />
    </Router>
)
