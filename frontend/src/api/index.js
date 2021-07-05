import axios from 'axios'
import redux from 'redux'
const SERVER = 'http://127.0.0.1:8000/'
const headers = {'Content-Type':'application/json'}

export const memberDetail = id => axios.get(`${SERVER}api/member/detail/${id}`)
export const memberDelete = body => axios.delete(`${SERVER}api/member/delete`,{headers, body})
export const memberList = () => axios.get(`${SERVER}adm/member/list`)
export const memberLogin = body => axios.post(`${SERVER}api/member/login`,{headers, body})
export const memberModify = body => axios.put(`${SERVER}api/member/modify`,{headers, body})
export const memberRegister = body => axios.post(`${SERVER}api/member/register`,{headers, body})
export const memberRetrieve = name => axios.get(`${SERVER}adm/member/retrieve/${name}`)

/* Board */
export const postDetail = body => axios.post(`${SERVER}api/board/detail`,{headers, body})
export const postDelete = body => axios.post(`${SERVER}api/board/delete`,{headers, body})
export const postList = body => axios.post(`${SERVER}api/board/list`,{headers, body})
export const postModify = body => axios.post(`${SERVER}api/board/modify`,{headers, body})
export const postRegister = body => axios.post(`${SERVER}api/board/register`,{headers, body})
export const postRetrieve = body => axios.post(`${SERVER}api/board/retrieve`,{headers, body})
/* Common */
/* 공통은 네이밍 컨벤션에서 벗어남 */
/* Item */
export const itemDetail = body => axios.post(`${SERVER}item/detail`,{headers, body})
export const itemDelete = body => axios.post(`${SERVER}item/delete`,{headers, body})
export const itemList = body => axios.post(`${SERVER}item/list`,{headers, body})
export const itemModify = body => axios.post(`${SERVER}item/modify`,{headers, body})
export const itemRegister = body => axios.post(`${SERVER}item/register`,{headers, body})
export const itemRetrieve = body => axios.post(`${SERVER}item/retrieve`,{headers, body})






