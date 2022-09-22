import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const addTodo = createAsyncThunk("todos/addTodo", async (todos) => {
  const res = await axios.post("http://localhost:5000/todo", todos);
  return res.data;
});

export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  const res = await axios.get("http://localhost:5000");
//   console.log(res.data)
  return res.data;
});

export const updateTodo = createAsyncThunk("todos/updateTodo", async ({_id, isCompleted}) => {
  // console.log("test of id and isCompleted", _id, isCompleted)
  const res = await axios.patch(`http://localhost:5000/todo/${_id}`,  {isCompleted : isCompleted} );
  // console.log(res.data)
  return (res.data);
});

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
  await axios.delete(`http://localhost:5000/todo/${id}`);
  return (id);
});


export const todosSlice = createSlice({
  name: "todos",
  initialState: {
  todoList: [],
  isSuccess: false,
  loading: false,
  error: null,
},
  
    reducers: {},
  extraReducers: {
    [addTodo.pending]: (state) => {
      state.loading = true;
    },
    [addTodo.fulfilled]: (state, action) => {
      state.loading = false;
      state.todoList = [...state.todoList, action.payload];
      state.isSuccess = true;
    },
    [addTodo.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [getTodos.pending]: (state) => {
      state.loading = true;
    },
    [getTodos.fulfilled]: (state, action) => {
      state.loading = false;
      state.todoList = action.payload;
      state.isSuccess = true;
    },
    [getTodos.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [updateTodo.pending]: (state) => {
      state.loading = true;
    },
    [updateTodo.fulfilled]: (state, action) => {
      state.loading = false;
      // state.todoList = [...state.todoList, action.payload];
      state.todoList = [state.todoList?.map((todo) => todo._id === action.payload && {...todo, isCompleted: !todo.isCompleted} )];
      state.isSuccess = true;
    },
    [updateTodo.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [deleteTodo.pending]: (state) => {
      state.loading = true;
    },
    [deleteTodo.fulfilled]: (state, action) => {
      state.loading = false;
      state.todoList = state.todoList.filter((todo) => todo._id !== action.payload);
      state.isSuccess = true;
    },
    [deleteTodo.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default todosSlice.reducer;
