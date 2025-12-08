import { useState, useEffect } from "react";
import * as client from "./client";

const HTTP_SERVER = import.meta.env.VITE_HTTP_SERVER;
const TODOS_API = `${HTTP_SERVER}/lab5/todos`;

export default function WorkingWithArrays() {
  const [todos, setTodos] = useState<any[]>([]);
  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });

  const fetchTodos = async () => {
    const todos = await client.fetchTodos();
    setTodos(todos);
  };

  const removeTodo = async (id: number) => {
    const updatedTodos = await client.removeTodo(id);
    setTodos(updatedTodos);
  };

  const createTodo = async () => {
    const updatedTodos = await client.createTodo();
    setTodos(updatedTodos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div id="wd-working-with-arrays">
      <h3>Working With Arrays</h3>

      <h4>Retrieving Arrays</h4>
      <a
        id="wd-retrieve-todos"
        className="btn btn-primary mb-2"
        href={`${TODOS_API}`}
      >
        Get Todos
      </a>
      <hr />

      <h4>Retrieving an Item from an Array by ID</h4>
      <input
        className="form-control w-25 mb-2"
        value={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <a
        id="wd-retrieve-todo-by-id"
        className="btn btn-primary"
        href={`${TODOS_API}/${todo.id}`}
      >
        Get Todo by ID
      </a>
      <hr />

      <h4>Filtering Array Items</h4>
      <a
        id="wd-retrieve-completed-todos"
        className="btn btn-primary"
        href={`${TODOS_API}?completed=true`}
      >
        Get Completed Todos
      </a>
      <hr />

      <h4>Creating new Items in an Array</h4>
      <button className="btn btn-success mb-2" onClick={createTodo}>
        Create Todo
      </button>
      <hr />

      <h4>Deleting from an Array</h4>
      <a
        id="wd-delete-todo"
        className="btn btn-danger"
        href={`${TODOS_API}/${todo.id}/delete`}
      >
        Delete Todo with ID = {todo.id}
      </a>
      <hr />

      <h4>Updating an Item in an Array</h4>
      <a
        href={`${TODOS_API}/${todo.id}/title/${todo.title}`}
        className="btn btn-primary mb-2"
      >
        Update Todo Title
      </a>
      <input
        className="form-control w-25 mb-2"
        value={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <input
        className="form-control w-50 mb-2"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <hr />

      <h4>Update Description</h4>
      <a
        href={`${TODOS_API}/${todo.id}/description/${todo.description}`}
        className="btn btn-primary mb-2"
      >
        Update Description
      </a>
      <textarea
        className="form-control w-75 mb-2"
        value={todo.description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
      <hr />

      <h4>Update Completed Status</h4>
      <a
        href={`${TODOS_API}/${todo.id}/completed/${todo.completed}`}
        className="btn btn-primary mb-2"
      >
        Update Completed
      </a>
      <label className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
        />
        Completed
      </label>
      <hr />

      <h4>Todos List</h4>
      <ul className="list-group">
        {todos.map((t) => (
          <li
            key={t.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>
              {t.title} - {t.completed ? "Completed" : "Not Completed"}
            </span>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => removeTodo(t.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
