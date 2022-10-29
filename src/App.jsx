// import React, { useState } from 'react'

// const App = () => {
// let [title, setTitle] = useState("")
// let [note, setNote] = useState("")
// let [ display, setDisplay] = useState([])
// let [ checked, setChecked] = useState([])

// let handleSubmit=(e)=>
// {
//   e.preventDefault()
//   let data = {title, note}
//   setDisplay((ps)=>[...ps,data])
// }

// let handleDelete=(ind)=>
// {
//   display.splice(ind,1)
//   setDisplay([...display])
// }

// let allDelete =()=>
// {
// //  display.splice(0,display.length)
// //  setDisplay([...display])
//   let converted =[]
//   for(let i=0;i<checked.length;i++)
//   {
//     converted.push(+checked[i])
//   }
//   let filtered 
//    for (const i of converted) {
//     filtered = display.filter((ele,ind)=> ele )
//    }
//     setDisplay([...filtered])

//   //  console.log(filtered)

// }


// let handleChange =(e)=>
// {
//   let pushed =[]
//    if(e.target.checked)
//    {
//     console.log(e.target.id);
//     setChecked([...checked,e.target.id])    
//    }
  
// }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} />
//         <input type="text" value={note} onChange={(e)=> setNote(e.target.value)} />
//         <button>submit</button>
        
//       </form>
//       <button onClick={()=>allDelete()}>all delete</button>
//       {display.map((ele,ind)=>
//       {
//         let {title,note} = ele
//         return (
//           <div key={ind}>
//             <input type="checkbox" name={ele} value={[title,note]} id={ind} onChange={handleChange} />
//               <h1>{title}</h1>
//               <h2>{note}</h2>
//               <button onClick={()=>handleDelete(ind)} >delete</button>
//           </div>
//         )
//       })}
//     </div>
//   )
//     }
// export default App



import React from 'react'
import {Routes, Route} from  'react-router-dom'
import AddUsers from './pages/AddUsers'
import EditUsers from './pages/EditUsers'
import Home from './pages/Home'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/addUsers"  element={<AddUsers/>} />
        <Route path="/editUsers/:id"  element={<EditUsers/>} />
      </Routes>
    </div>
  )
}

export default App