import React from 'react'
// import {Login, Signup, UserDetail, UserEdit, UserList} from './user'
import {Home} from './templates'
import {Nav} from './common'
// import {todoReducer} from 'store'
import { Redirect, Route} from "react-router-dom"
import {BrowserRouter as Router} from 'react-router-dom'
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'


// const rootReducer = combineReducers({todoReducer})

const App = () => {
  return (<div>
    <Router>

        
      <Nav/>
    <Route exact path='/home' component={Home}/>
    <Redirect exact from ={'/'} to={'/home'}/>
    {/* <Route exact path='/user' component={User}/>

    <Route exact path='/login-form' component={Login}/>
    <Route exact path='/signup-form' component={Signup}/>
    <Route exact path='/user-detail' component={UserDetail}/>
    <Route exact path='/user-edit' component={UserEdit}/>
    <Route exact path='/uesr-list' component={UserList}/> */}


    </Router>
  </div>)
}


export default App