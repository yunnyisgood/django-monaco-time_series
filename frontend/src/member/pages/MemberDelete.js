import React,{useState} from 'react'
import '../styles/MemberDelete.css'
import { MemberDeleteForm } from '..' 
import { MemberMenu as Menu } from '../../common' 
import { MemberNav as Nav } from '..'
const MemberDelete = () => {
    return (<>
    <Nav/>
      <table style={{width: '100%', height: '100%'}}>
          <tr>
              <td style={{width: '20%'}}> <Menu/> </td>
              <td style={{width: '80%'}}> <MemberDeleteForm/> </td>
          </tr>
      </table>
    </>)
}

export default MemberDelete