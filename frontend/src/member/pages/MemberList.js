import React, { useEffect, useState } from 'react'
import '../styles/MemberList.css'
import { MemberListComponent } from '..'
import { MemberMenu as Menu } from '../../common' 
import { MemberNav as Nav } from '..' 

const MemberList = () => {
  return (<>
  <Nav/>
    <table style={{width: '100%', height: '100%'}}>
        <tr>
            <td style={{width: '20%'}}> <Menu/> </td>
            <td style={{width: '80%'}}> <MemberListComponent /> </td>
        </tr>
    </table>
  </>)
}

export default MemberList