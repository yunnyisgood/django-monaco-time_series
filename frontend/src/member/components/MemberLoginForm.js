import axios from 'axios'
import React, { useState } from 'react'
import {  memberLogin } from '../../api'
import '../styles/MemberLogin.css'
import {useHistory} from 'react-router'

const MemberLoginForm = () => {
  const history = useHistory()
  const [login, setLogin] = useState({
    username: '',
    password: '',

  })

  const {username, password} = `login`

  const handleSubmit = e => {
    e.preventDefault()
    memberLogin({...login})
    .then(res => {
      if(res.data.result == 'PASSWORD-FAILED'){
        alert(`비밀번호가 틀립니다`) 
        document.getElementById("username").value = ""
        document.getElementById("password").value = "" 
      }else if(res.data.result == 'USERNAME-FAIL'){
        alert(`아이디가 틀립니다`)
      }else{
        alert('로그인 성공')
        localStorage.setItem("loginedMember", JSON.stringify(res.data))
        history.push('/member-list')

      }
    })
    .catch(err => {
      alert(`로그인 실패 : ${err} `)
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
    <form method="post" onSubmit={handleSubmit}>
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
export default MemberLoginForm