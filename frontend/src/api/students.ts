import { Student } from "../utils/Data";

const BASE_URL = `http://localhost:5000/students`;

export const fetchStudents = async () =>{

    

    // eslint-disable-next-line no-useless-catch
    try {
        const res = await fetch(BASE_URL)

        if(!res.ok){
            throw new Error(`${res.statusText}: ${res.status}`)
        }

        return await res.json();
    } catch (err) {
        throw err;
    }

}

export const createstudent = async (data: Student) =>{

    try {
        const res = await fetch( BASE_URL,{
            method: "POST",
            body: JSON.stringify(data),
            headers:{
                "Content-Type": "application/json"
            }
        })
        return await res.json();
    } catch (error) {
        alert(error)
    }

}