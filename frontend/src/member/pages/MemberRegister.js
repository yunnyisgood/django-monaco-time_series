import React,{useState} from 'react'
import '../styles/MemberLogin.css'
import { MemberRegisterForm } from '..'
import { MemberMenu as Menu } from '../../common'

const MemberRegister = () => {
    return (<>
      <table style={{width: '100%', height: '100%'}}>
          <tr>
              <td style={{width: '20%'}}> <Menu/> </td>
              <td style={{width: '80%'}}> <MemberRegisterForm/> </td>
          </tr>
      </table>
    </>)
}

export default MemberRegister