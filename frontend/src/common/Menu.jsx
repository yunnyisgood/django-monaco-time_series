import React from 'react'
import {Link} from 'react-router-dom'

export const UserMenu = () => (
<nav>
    <ol>
       <li><Link to='/signup-form'>회원가입</Link></li> 
       <li><Link to='/login-form'> 로그인</Link></li> 
       <li><Link to='/user-detail'>회원정보상세</Link></li> 
       <li><Link to='/user-edit'>회원정보수정</Link></li> 
       <li><Link to='/user-remove'>회원정보삭제</Link></li> 
    </ol>
</nav>
)

export const ItemMenu = () => (
    <nav>
        <ol>
           <li><Link to='/item-list'>아이템목록</Link></li> 
           <li><Link to='/item-register'>아이템등록</Link></li> 
           <li><Link to='/item-detail'>아이템 상세</Link></li> 
           <li><Link to='/item-remove'>아이템 삭제</Link></li> 
        </ol>
    </nav>
)

export const ArticleMenu = () => (
    <nav>
        <ol>
            <li><Link to='/article-list'>게시물 목록</Link></li> 
            <li><Link to='/article-write'>게시물 작성</Link></li> 
            <li><Link to='/article-read'>게시물 상세</Link></li> 
            <li><Link to='/article-remove'>게시물 삭제</Link></li> 
        </ol>
    </nav>
)

export const TodosMenu = () => (
    <nav>
        <ol>
            <li><Link to='/todos'>할일 작성 및 출력</Link></li>
        </ol>
    </nav>
)