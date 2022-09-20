import { FaTimes, FaCheckDouble } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../../redux/todoSlice";
import "./todo.css";
const Todo = ({ title, id, isCompleted }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const handleCompleted = () => {
    dispatch(updateTodo(id));
    
  };
  return (
    <div
      className={`todo ${isCompleted ? "completed" : ""}`}
      onDoubleClick={handleCompleted}
    >
      <div className="title">
        <h3>
          {title} 
        </h3>
      </div>
      <div>
      {isCompleted && <FaCheckDouble className="check"/>}
      <FaTimes className="remove" onClick={handleDelete} />
      </div>
    </div>
  );
};

export default Todo;