import express, { Express } from "express";
import { StudentModel } from "../models/Student";
const router = express.Router();

router.get("/" ,  async (req, res)=>{
    try {
        const students = await StudentModel.find()
        res.status(200).send(students);
    } catch{
        res.status(500).send("Somthing is not available")
    }

})

router.put("/:id", async (req, res)=>{
    const id = req.params.id;
    const data = req.body;

    const student = await StudentModel.findByIdAndUpdate(id , data , {new : true});

    if(!student){
        res.status(404).send("Student not found");

    }
    res.status(204).send(student);
})

router.post("/" , async (req , res)=>{

    try {
        const data = req.body;
        console.log({data});
        const newstudent = await StudentModel.create(data)
        newstudent.save();
        res.status(201).send(newstudent);
    } catch (err: any) {
        res.status(500).send(err.message);
    }


})


export default router;