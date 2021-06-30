import axios from 'axios'
import React, { useState } from 'react'
import {  postWrite  } from '../../api'
import './PostWrite.css'
import {useHistory} from 'react-router'
import {Button} from '@material-ui/core'


const PostWrite = () => {

    const [postInfo, setPostInfo] = useState({
        title: '',
        content: ''
    
      })


    const {title, content} = postInfo

    const handleSubmit = e => {
        e.preventDefault()
        alert(`전송 클릭: ${JSON.stringify({...postInfo})}`)
        postWrite({...postInfo})
        .then(res => {
           alert(`작성 완료 : ${res.data.result}`)
          //  history.push('login')
        })
        .catch(err => {
          alert(`회원가입 실패 : ${err }`)
        })
        }

    const handleClick = e => {
        e.preventDefault()
        alert('작성 취소')
    
        }

    const handleChange = e => {

        const {name, value} = e.target
        setPostInfo({
            ...postInfo,
            [name]:value
        }) 
    
        }
        

    return (<>
    <div className="PostWrite">
    <form onSubmit={handleSubmit} method="post" style={{border:"1px solid #ccc"}}>
  <div className="container">
    <h1>게시글 쓰기</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>

    <label for="title"><b>title</b></label>
    <input type="text" placeholder="Enter title" onChange={handleChange} name="title" value={title} />

    <label for="content"><b>content</b></label>
    <input type="text" placeholder="Enter your content" onChange={handleChange} name="content" value={content}/>
    
    <p>By creating an account you agree to our <a href="#" style={{color:"dodgerblue"}}>Terms & Privacy</a>.</p>

    <div class="clearfix">
      <button type="submit" class="writebtn">Post write</button>
      <button type="button" class="cancelbtn" onClick={handleClick}>Cancel</button>
    </div>
  </div>
</form>
</div>
    </>)
}



export default PostWrite