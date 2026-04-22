import React, { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem";
import {
  fetchTodos,
  addTodoAPI,
  toggleTodoAPI,
  deleteTodoAPI,
  updateTodoAPI,
} from "./services/api";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    fetchTodos().then(setTodos);
  }, []);

  const addTodo = async () => {
    if (!newTodo.trim()) return;

    const data = await addTodoAPI(newTodo);
    setTodos([{ ...data, id: Date.now() }, ...todos]);
    setNewTodo("");
  };

  const toggleTodo = async (id) => {
    const todo = todos.find((t) => t.id === id);

    await toggleTodoAPI(id, !todo.completed);

    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = async (id) => {
    await deleteTodoAPI(id);
    setTodos(todos.filter((t) => t.id !== id));
  };

  const updateTodo = async (id, newTitle) => {
    await updateTodoAPI(id, newTitle);

    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, title: newTitle } : t
      )
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Todo App</h1>

      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new todo..."
      />
      <button onClick={addTodo}>Add</button>

      <ul style={{ listStyle: "none" }}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onUpdate={updateTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;