import React from 'react'
import {BoardMenu as Menu} from '../common'

const Board = ({children}) => (<>
<h1>Blog</h1>
<Menu/>
{children}
</>)
export default Board
