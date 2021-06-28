import React from 'react'
import {Login, Signup, UserDetail, UserEdit, UserList} from './user'
import {Home, User, Blog, Item, Stock} from './templates'
import {Nav} from './common'
import { Redirect, Route} from "react-router-dom"
import {BrowserRouter as Router} from 'react-router-dom'
import { Link } from 'react-router-dom'




const App = () => {
  return (<div>
    <Router> 
    <Nav/>
    <nav style={{width:"500px", margin:"0 auto"}}>
      
      </nav>
    <Route exact path='/home' component={Home}/>
    <Redirect exact from ={'/'} to={'/home'}/>
    <Route exact path='/user' component={User}/>
    <Route exact path='/login-form' component={Login}/>
    <Route exact path='/signup-form' component={Signup}/>
    <Route exact path='/user-detail' component={UserDetail}/>
    <Route exact path='/user-edit' component={UserEdit}/>
    <Route exact path='/uesr-list' component={UserList}/>
    <Route exact path='/item' component={Item}/>
    <Route exact path='/blog' component={Blog}/>
    <Route exact path='/stock' component={Stock}/>
    </Router>
  </div>)
}


export default App