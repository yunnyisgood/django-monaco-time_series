import { MemberLoginForm } from '..' 
import '../styles/MemberLogin.css'
import { MemberMenu as Menu } from '../../common'
import { Nav } from '../../common'


const MemberLogin = () => {
  return (<>
  <Nav/>
    <table style={{width: '100%', height: '100%'}}>
        <tr>
            <td style={{width: '20%'}}> <Menu/> </td>
            <td style={{width: '80%'}}> <MemberLoginForm/> </td>
        </tr>
    </table>
  </>)
}

export default MemberLogin