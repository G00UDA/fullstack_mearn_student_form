
import { useEffect, useState } from 'react'
import Add_Student from './components/Add_Student'
import Student_Table from './components/Student_Table'
import { Student } from './utils/Data';
import { fetchStudents } from './api/students';
// import { Data , Student } from './utils/Data';


function App() {

  const [student , setstudent] = useState<Student[]>([]);

  // const getStudents = async () => {
  //   const data = await fetchStudents();
  //   setstudent(data);
  // }

  useEffect(()=>{
    fetchStudents().then((data)=> setstudent(data)).catch((err)=> alert(err))
  },[])

  return (
    <>
    <div style={{  display:"flex",flexDirection:"column",alignItems:"center" , justifyContent:"center"}}>
      <Student_Table student = {student} />
      <Add_Student student={student} setstudent = {setstudent}/>
    </div>
    </>
  )
}

export default App
