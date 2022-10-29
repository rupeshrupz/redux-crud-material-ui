import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUsers } from '../redux/action'

const AddUsers = () => {

let [state, setState] = useState({
    name:"",
    address:"",
    email:"",
    contact:""
})
let [empty, setEmpty]= useState("")

let navigate = useNavigate()
let dispatch = useDispatch()

let handleSubmit=(e)=>
{
  e.preventDefault()
  if(!name || !address || !email || !contact)
  {
    setEmpty("please enter all the fields")
  }else{
    dispatch(addUsers(state))
    navigate("/")
    setEmpty("")
  }
}

let handleInputChange =(e)=>
{
    let {name, value} = e.target;
    setState({...state, [name]:value})
}
  let {name, address, email, contact} = state

  return (
    <div >

<Button variant="contained" sx={{position:"relative", left:"46%", top:"80px"}} color="success"
       onClick={()=> navigate("/")} >GO BACK</Button>
       {empty && <h1 style={{color:"red"}} >{empty}</h1>}
         <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '40ch' },
        height:"97vh",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center"
      }}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
         
      <TextField id="name"  name="name"  type="text" label="Name" variant="outlined"
      onChange={handleInputChange}  value={name} /> 
      <TextField id="address" name="address" type="text" label="Address" variant="outlined"
      onChange={handleInputChange}  value={address} /> 
      <TextField id="email" name="email"  type="email" label="Email" variant="outlined"
      onChange={handleInputChange}  value={email} /> 
      <TextField id="contact" name="contact" type="number"  label="Contact" variant="outlined"
      onChange={handleInputChange}  value={contact} />
      <Button variant="contained" type="submit" onChange={handleInputChange} >ADD USER</Button>

    </Box>
    </div>
  )
}

export default AddUsers