import mongoose, {Schema , Document} from "mongoose";

interface Istudent extends Document {
    name: string;
    age: string;
    class: string;
    email: string;
}

const StudnetSchema : Schema = new Schema ({
    name: {type: String, required: true},
    age: {type: String},
    class: {type: String},
    email: {type: String}
})

export const StudentModel = mongoose.model<Istudent>("students", StudnetSchema);