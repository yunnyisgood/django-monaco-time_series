import React from 'react'
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router'

export const MemberMenu = () => {

    const history = useHistory()
    
return (<nav>
    {
        localStorage.getItem("loginedMember") === ''?
    <ol>
       <li><Link to='/member-register'>회원가입</Link></li> 
       <li><Link to='/member-login'> 로그인</Link></li>
    </ol>
    :
    <ol>
       <li><Link to='/member-list'>회원정보 목록</Link></li> 
       <li><Link to='/member-detail'>회원정보 조회</Link></li> 
       <li><Link to='/member-modify'>회원정보 수정</Link></li> 
       <li><Link to='/member-retrieve'>회원정보 검색</Link></li> 
       <li><Link to='/member-delete'>회원정보 삭제</Link></li> 
       <li><Link to='/member-logout' onClick={() => {localStorage.setItem("loginedMember", "")
                                                     history.push("/home")}}>로그아웃</Link></li> 
    </ol>
    }
</nav>
)
}


export const ItemMenu = () => (
    <nav>
        <ol>
           <li><Link to='/item-list'>아이템목록</Link></li> 
           <li><Link to='/item-register'>아이템등록</Link></li> 
           <li><Link to='/item-retrieve'>아이템조회</Link></li> 
           <li><Link to='/item-detail'>아이템 상세</Link></li> 
           <li><Link to='/item-modify'>아이템 수정</Link></li> 
           <li><Link to='/item-delete'>아이템 삭제</Link></li> 
        </ol>
    </nav>
)

export const BoardMenu = () => (
    <nav>
        <ol>
        <li><Link to='/post-list'>게시글 목록</Link></li>
        <li><Link to='/post-register'>게시물 작성</Link></li>
        <li><Link to='/post-retrieve'>게시글 검색</Link></li>
        <li><Link to='/post-detail'>게시글 조회</Link></li>
        <li><Link to='/post-modify'>게시글 수정</Link></li>
        <li><Link to='/post-delete'>게시글 삭제</Link></li>
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