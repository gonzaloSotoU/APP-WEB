import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://gonzalosotou:DesarrolloAPPTEL335@cluster0.p2krtuo.mongodb.net/?retryWrites=true&w=majority");
        console.log(">>> DB is connect")

    }catch (error) {
        console.log(error);
    }
};