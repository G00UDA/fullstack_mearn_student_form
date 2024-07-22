import express from 'express';
import mongoose from 'mongoose';
import { StudentModel } from './models/Student';
import cors from "cors";
import studentsRouter from "./routers/students"

const app = express();


app.use(cors({
  origin: "http://localhost:5173"
}))
app.use(express.json());
const port = 5000;

mongoose.connect('mongodb://127.0.0.1:27017/Students')
  .then(() => console.log('Connected!'));

app.use('/students' , studentsRouter);

app.listen(port,()=>{
    console.log("running on port " + port);
});

