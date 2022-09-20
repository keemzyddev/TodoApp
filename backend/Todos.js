import mongoose from "mongoose";
const { Schema } = mongoose;
const TodoSchema = new Schema(
    {
    title: {type : String},
    isCompleted: {type: Boolean, default: false},
  },
    {timestamps: true},
  );
  
  export const Todos = mongoose.model('Test', TodoSchema);

Todos.createCollection();
  