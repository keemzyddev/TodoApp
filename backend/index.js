import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { Todos } from "./Todos.js";


const app = express();
app.use(cors());

const connDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://keem:12345@node-tut.k0bi4.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Database connected!");
  } catch (error) {
    console.log(error);
  }
};
connDB();
const PORT = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/todo", async (req, res) => {
  try {
    const todo = await Todos.create(req.body);

    res.status(200).json(todo);
  } catch (error) {
    console.log(error);
  }
});

app.get("/", async (req, res) => {
  try {
    const todos = await Todos.find();

    res.status(200).json(todos);
  } catch (error) {
    console.log(error);
  }
});
app.patch("/todo/:id", async (req, res) => {
  const { id } = req.params;
  const { title, isCompleted } = req.body;
  try {
    const todos = await Todos.findByIdAndUpdate(
      {_id: id},
      { $set: { title, isCompleted } },
      { new: true } 
    );

    res.status(200).json(todos);
  } catch (error) {
    console.log(error);
  }
});
app.delete("/todo/:id", async (req, res) => {
  try {
    await Todos.findByIdAndDelete(req.params.id);

    res.status(200).json("Todo has been deleted!");
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => console.log(`Server listening on Port: ${PORT}`));
