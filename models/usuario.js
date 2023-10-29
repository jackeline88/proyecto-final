import mongoose from "mongoose";

const usuario = new mongoose.Schema({
    nombre:{
        required: true,
        type: String,
    },
    fechaNacimiento:{
        required: false,
        type: String
    },
    email:{
        required: true,
        type: String
    },
    promedio:{
        required: true,
        type: Number
    },
    password:{
        required: true,
        type: String
    }
});

export default mongoose.model('usuario', usuario)