const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = async () => {
  const res = await fetch(`${API_URL}?_limit=5`);
  return res.json();
};

export const addTodoAPI = async (title) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, completed: false }),
  });
  return res.json();
};

export const toggleTodoAPI = async (id, completed) => {
  await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed }),
  });
};

export const deleteTodoAPI = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};

export const updateTodoAPI = async (id, title) => {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, completed: false }),
  });
};