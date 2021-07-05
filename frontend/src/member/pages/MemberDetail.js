import React from 'react'
import '../styles/MemberDetail.css'
import { MemberDetailComponent } from '..' 
import { MemberMenu as Menu } from '../../common'
import { MemberNav as Nav } from '..'

const MemberDetail = () => {
  return (<>
  <Nav/>
    <table style={{width: '100%', height: '100%'}}>
        <tr>
            <td style={{width: '20%'}}> <Menu/> </td>
            <td style={{width: '80%'}}> <MemberDetailComponent/> </td>
        </tr>
    </table>
  </>)
}

export default MemberDetail