import React from "react";

function TodoItem({ todo, onToggle, onDelete, onUpdate }) {
  return (
    <li style={{ margin: "10px" }}>
      <span
        onClick={() => onToggle(todo.id)}
        style={{
          cursor: "pointer",
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.title}
      </span>

      <button
        onClick={() => {
          const newTitle = prompt("Update todo", todo.title);
          if (newTitle) onUpdate(todo.id, newTitle);
        }}
      >
        Edit
      </button>

      <button onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;