import { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddForm from "./component/AddForm/AddForm";
import Header from "./component/Header/Header";
import Todos from "./component/Todos/Todos";

function App() {
  const [showAdd, setShowAdd] = useState();
  return (
      <div className="container">
        <Header showAdd={() => setShowAdd(!showAdd)} />
        {showAdd && <AddForm />}
        <Todos />
      </div>
  );
}

export default App;
