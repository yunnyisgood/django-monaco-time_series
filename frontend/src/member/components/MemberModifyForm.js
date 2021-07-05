import React from 'react'
import '../styles/MemberModify.css'
import { useState, useEffect } from 'react'
import {memberModify} from '../../api'


const MemberModifyForm = () => {
  const [changedPassword, setChangedPassword] = useState('')


  const handleSubmit = e => {
    e.preventDefault()
    const member = JSON.parse(localStorage.getItem("loginedMember"))
    alert(changedPassword)
    member.password = changedPassword
    alert(JSON.stringify(member))
    
    memberModify({member})
    .then(res => {
      alert(`비밀번호 수정 완료 : ${res.data.result} `)
      localStorage.setItem("loginedMember", res.data.result)      
    })
    .catch(err => {
      alert(`비밀번호 수정 실패 : ${err} `)

    })
  }

  return (<>
  <form method="put" onSubmit={handleSubmit} >
          
              <h2 style={{"text-align":"center"}}>비밀번호 수정</h2>
      <div className="container">
        <label labelFor="psw"><b>변경할 비밀번호</b></label>
        <input type="password" placeholder="Enter Password" onChange={e => {setChangedPassword(e.target.value)}} name="password" required/>
            
        <button type="submit">확 인</button>
       
      </div>

    </form>

     
    </>)
}

export default MemberModifyForm