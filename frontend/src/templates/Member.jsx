import React from 'react'
import {MemberMenu as Menu} from '../common'
import {MemberNav as Nav} from '../member'

const Member = ({children}) => (<>

    <table style={{width: '100%', height: '100%'}}>
        <tr><td colSpan={2} ><h2 style={{textAlign: 'center'}}>Member</h2></td></tr>
        <tr>
            <td style={{width: '20%'}}><Menu/></td>
            <td style={{width: '80%'}}> {children}</td>
        </tr>
    </table>   
</>)

export default Member
