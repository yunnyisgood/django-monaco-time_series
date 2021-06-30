import axios from 'axios'
import React, { useState } from 'react'
import {  userLogin } from '../../api'
import './Login.css'
import {useHistory} from 'react-router'

const Login = () => {

  const [login, setLogin] = useState({
    username: '',
    password: '',

  })

  const {username, password} = login

  const handleSubmit = e => {
    e.preventDefault()
    alert(`전송 클릭: ${JSON.stringify({...login})}`)
    userLogin({...login})
    .then((res) => {
       alert(`로그인 완료 : ${res.data.result}`)
      //  history.push('login')
    })
    .catch(err => {
      alert(`로그인 실패 : ${err }`)
    })
    }

  const handleClick = e => {
    e.preventDefault()
    alert('취소')

  }
  const handleChange = e => {

    const {name, value} = e.target
    setLogin({
      ...login,
      [name]:value
    }) 

  }


    return (<>
    <div className="Login">
    <form method="get" onSubmit={handleSubmit}>
  <div className="imgcontainer">
    <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" class="avatar"/>
  </div>

  <div className="container">
    <label labelFor="username"><b>username</b></label>
    <input type="text" placeholder="Enter username" name="username" value={username} onChange={handleChange}/>

    <label for="password"><b>Password</b></label>
    <input type="password" placeholder="Enter password" name="password" value={password} onChange={handleChange}/>
        
    <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"/> Remember me
    </label>
  </div>

  <div className="container" style={{backgroundColor:"#f1f1f1"}}>
    <button type="button" className="cancelbtn" onClick={handleClick}>Cancel</button>
    <span className="psw">Forgot <a href="#">password?</a></span>
  </div>
</form>
</div>
    </>)
}
export default Login