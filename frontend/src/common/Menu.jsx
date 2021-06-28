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
           <li><Link to='/item-retrieve'>아이템조회</Link></li> 
           <li><Link to='/item-detail'>아이템 상세</Link></li> 
           <li><Link to='/item-update'>아이템 수정</Link></li> 
           <li><Link to='/item-delete'>아이템 삭제</Link></li> 
        </ol>
    </nav>
)

export const BlogMenu = () => (
    <nav>
        <ol>
            <li><Link to='/post-list'>게시물 목록</Link></li> 
            <li><Link to='/post-write'>게시물 작성</Link></li> 
            <li><Link to='/post-retrieve'>게시물 상세</Link></li> 
            <li><Link to='/post-update'>게시물 수정</Link></li> 
            <li><Link to='/post-delete'>게시물 삭제</Link></li> 
        </ol>
    </nav>
)

export const StockMenu = () => (
    <nav>
        <ol>
            <li><Link to='/stock-list'>주식 목록</Link></li> 
            <li><Link to='/stock-register'>주식 등록</Link></li> 
            <li><Link to='/stock-retrieve'>주식 상세</Link></li> 
            <li><Link to='/stock-update'>주식 수정</Link></li> 
            <li><Link to='/stock-delete'>주식 삭제</Link></li> 
        </ol>
    </nav>
)