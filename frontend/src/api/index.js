import axios from 'axios'
import redux from 'redux'
const SERVER = 'http://127.0.0.1:8000/'
const headers = {'Content-Type':'application/json'}

export const userSignup = body => axios.post(`${SERVER}member/signup`, {headers, body})

export const userLogin = loginRequest => axios.get(`${SERVER}member/login/${loginRequest.username}/`, loginRequest)

export const postWrite = body => axios.post(`${SERVER}board/write`, {headers, body})
