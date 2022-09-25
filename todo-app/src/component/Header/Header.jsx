import { FaPlusCircle } from "react-icons/fa";
import "./header.css";
const Header = ({ showAdd }) => {
  const showForm = () => {
    showAdd();
  };
  return (
    <header className="header">
      <h1>Todo App</h1>
      <FaPlusCircle className="add" onClick={showForm} />
    </header>
  );
};

export default Header;
