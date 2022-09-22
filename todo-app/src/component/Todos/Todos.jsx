import Todo from "./Todo/Todo";
import "./todos.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTodos } from "../../redux/todoSlice";

const Todos = () => {
  const dispatch = useDispatch();

  const { todoList } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);
// console.log(todoList)
  return (
    <div className="todos">
      {todoList?.map((todo) => (
        <Todo
          key={todo._id}
          title={todo.title}
          _id={todo._id}
          isCompleted={todo.isCompleted}
        />
      ))}
    </div>
  );
};

export default Todos;
