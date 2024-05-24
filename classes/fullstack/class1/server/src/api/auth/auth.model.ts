import { Schema, model } from "mongoose";

const adminSchema: Schema = new Schema({
    username: {
        type: String, 
        unique: true,
        required: true
    } ,
    password: {
        type: String, 
        required: true
    },
    role: {
        type: Number, 
        enum: [1, 2, 3],
        required: true, 
        default: 1
    },
    firstName: {
        type: String, 
        required: true
    },
    lastName: {
        type: String, 
        required: true
    }
});

const Admin = model("Admin", adminSchema);

export default Admin;