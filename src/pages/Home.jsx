import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'
import {useDispatch, useSelector} from 'react-redux'
import { deleteUsers, loadUsers } from '../redux/action';
import { Button, ButtonGroup } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  



const Home = () => {
    let dispatch = useDispatch()
   let {users} = useSelector(state => state.data)
   let navigate = useNavigate()
    useEffect(()=>{
     dispatch(loadUsers())
    },[])

    let handleDelete =(id)=>
    {
      dispatch(deleteUsers(id))
    }

  return (
    <div>
      <Button variant="contained" sx={{position:"relative", left:"46%", top:"80px"}} color="primary"
       onClick={()=> navigate("/addUsers")} >ADD USER</Button>

         <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 , marginTop: "100px"}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Address</StyledTableCell>
            <StyledTableCell align="center">Contact</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users && users.map((user) => (
            <StyledTableRow key={user.id}>
              <StyledTableCell component="th" scope="row">
                {user.name}
              </StyledTableCell>
              <StyledTableCell align="center">{user.email}</StyledTableCell>
              <StyledTableCell align="center">{user.address}</StyledTableCell>
              <StyledTableCell align="center">{user.contact}</StyledTableCell>
              <StyledTableCell align="center">
              <ButtonGroup variant="contained"  aria-label="outlined primary button group">
      <Button  sx={{backgroundColor:"green", marginRight:"10px"}} 
      onClick={()=> navigate(`/editUsers/${user.id}`)} >Edit </Button>
      <Button   sx={{backgroundColor:"red"}} onClick={()=> handleDelete(user.id)} >Delete</Button>
    </ButtonGroup>
              </StyledTableCell> 
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Home