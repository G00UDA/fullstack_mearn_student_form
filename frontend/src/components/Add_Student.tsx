import { Button, Paper, TextField } from '@mui/material'
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { Student } from '../utils/Data'
import { createstudent } from '../api/students'

interface props{
    student: Student,
    setstudent: Dispatch<SetStateAction<Student>>
}
const defaults = {id: 3 , name: "" , age: "" , email:"", class:"" }
export default function Add_Student({setstudent , student}: props) {
    const [formdata , setformdata] = useState({
        id: 3 , name: "" , age: "" , email:"", class:"" 
    })
    


    function handle_change(e){
        setformdata({...formdata  , [e.target.name] : e.target.value})
    }

    async function handleSubmit(){
        const data = await createstudent(formdata);
        setstudent([...student, data])
        setformdata(defaults)
    }


    useEffect(()=>{
        if(formdata.name == "admin"){
            alert(" YOU CAN USE THE ADMIN NAME")
            setformdata(defaults)
        }
    },[formdata.name])

  return (
        <Paper sx={{display:"flex" , flexDirection:"column" , gap:2 , width:"300px" ,marginTop:"15px" , padding:"10px" }}>
            <TextField value={formdata.name} onChange={handle_change} id="outlined-basic" name="name" label="Name" variant="outlined" />
            <TextField value={formdata.age} onChange={handle_change} id="outlined-basic" name="age" label="Age" variant="outlined" />
            <TextField value={formdata.email} onChange={handle_change} id="outlined-basic" name="email" label="Email" variant="outlined" />
            <TextField value={formdata.class} onChange={handle_change} id="outlined-basic" name="class" label="Class" variant="outlined" />
            <Button onClick={handleSubmit} variant="contained">Submit</Button>
        </Paper>
  )
}
