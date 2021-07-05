import React from 'react'
import {MemberRetrieve, MemberRegister, MemberModify, MemberLogin, MemberList, MemberDetail, MemberDelete } from './member'
import {Home, Member, Board, Item, Stock} from './templates'
import {Nav} from './common'
import { Redirect, Route} from "react-router-dom"
import {BrowserRouter as Router} from 'react-router-dom'
import {PostDelete, PostList, PostRetrieve, PostRegister, PostModify, PostDetail} from './board'
import {ItemModify, ItemDelete, ItemDetail, ItemList, ItemRegister, ItemRetrieve} from './item'




const App = () => {
  return (<div>
    <Router>
   
        <Route exact path='/home' component={Home}/>
        <Redirect exact from={'/'} to={'/home'}/>
        {/* <Redirect exact from={'/member-logout'} to={'/home'}/> */}
        <Route exact path='/member-logout' component={Home}/>

        <Route exact path='/member' component={Member}/>
        <Route exact path='/member-detail/:id' component={MemberDetail}/>
        <Route exact path='/member-list' component={MemberList}/>
        <Route exact path='/member-login' component={MemberLogin}/>        
        <Route exact path='/member-modify' component={MemberModify}/>
        <Route exact path='/member-register' component={MemberRegister}/>

        <Route exact path='/item' component={Item}/>
        <Route exact path='/item-detail' component={ItemDetail}/>
        <Route exact path='/item-list' component={ItemList}/>
        <Route exact path='/item-modify' component={ItemModify}/>
        <Route exact path='/item-register' component={ItemRegister}/>
        
        <Route exact path='/board' component={Board}/>
        <Route exact path='/post-detail' component={PostDetail}/>
        <Route exact path='/post-list' component={PostList}/>
        <Route exact path='/post-modify' component={PostModify}/>
        <Route exact path='/post-register' component={PostRegister}/>
        <Route exact path='/stock' component={Stock}/>
    </Router>
  </div>)
}



export default App