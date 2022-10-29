import * as types from './actionTypes'
import axios from 'axios'

let getUsers =(users)=>
({
    type: types.GET_USERS,
    payload:users,
    
    })

let userDeleted =()=>({
    type: types.DELETE_USERS
})
let usersAdded =()=>({
    type:types.ADD_USERS,
}) 

let usersEditted=(user)=>(
{
    type:types.EDIT_USERS,
    payload:user,
})

let usersUpdated =()=>({
    type:types.UPDATE_USERS,
}) 


export let loadUsers =()=>
{
   return function(dispatch){
    axios.get(`http://localhost:5000/user`).then((resp)=>
    {
        // console.log("resp",resp)
        dispatch(getUsers(resp.data))
    }).catch(error => console.log(error))
   } 
}

export let deleteUsers =(id)=>
{
   return function(dispatch){
    axios.delete(`http://localhost:5000/user/${id}`).then((resp)=>
    {
        // console.log("resp",resp)
        dispatch(userDeleted())
        dispatch(loadUsers())
    }).catch(error => console.log(error))
   } 
}

export let addUsers =(user)=>
{
   return function(dispatch){
    axios.post(`http://localhost:5000/user`, user).then((resp)=>
    {
        console.log("resp",resp)
        dispatch(usersAdded())
        dispatch(loadUsers())
    }).catch(error => console.log(error))
   } 
}

export let editUsers =(id)=>
{
   return function(dispatch){
    axios.get(`http://localhost:5000/user/${id}`).then((resp)=>
    {
        // console.log("resp",resp)
        dispatch(usersEditted(resp.data))
    }).catch(error => console.log(error))
   } 
}

export let updateUsers =(user,id)=>
{
   return function(dispatch){
    axios.put(`http://localhost:5000/user/${id}`, user).then((resp)=>
    {
        // console.log("resp",resp)
        dispatch(usersUpdated())
    }).catch(error => console.log(error))
   } 
}

