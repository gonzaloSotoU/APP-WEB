import mongoose from "mongoose";

const reservaSchema = new mongoose.Schema({
    
    username: {
        type: String,
        require: true
    },
    rolUSM: {
        type: String,
        require: true
    },
    patente: {
        type: String,
        require: true,
    },
    fecha: {
        type: Date,
        require: true
    }

}, {
    timestamps: true
})

export default mongoose.model('Reserva', reservaSchema)