import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    image:String
})

const TodosModels = mongoose.model("images",TodoSchema)

export default TodosModels;
