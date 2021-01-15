import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Article from './components/Article/Article'
import Register from './components/Register/Register'
import Login from './components/Login/Login'

export default (
    <Switch>
        <Route exact path = '/' component= {Home}/>
        <Route path = '/article/:article_id' component= {Article}/>
        <Route path = '/subscribe' component= {Register}/>
        <Route path = '/login' component= {Login}/>
    </Switch>
)