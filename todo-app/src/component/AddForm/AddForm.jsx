import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoSlice";
import "./addForm.css";

const AddForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    !title
      ? alert("You must add a title!")
      : dispatch(addTodo({ title, isCompleted }));

    setTitle("");
    setIsCompleted(false);
  };
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Completed</label>
      <input
        type="checkbox"
        checked={isCompleted}
        value={isCompleted}
        onChange={(e) => setIsCompleted(e.currentTarget.checked)}
      />
      <input type="submit" placeholder="Add" />
    </form>
  );
};

export default AddForm;
