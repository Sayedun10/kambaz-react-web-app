import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";
import { addTodo, deleteTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoList() {
  const { todos, todo } = useSelector((state: RootState) => state.todosReducer);
  const dispatch = useDispatch();

  return (
    <div id="wd-todo-list-redux">
      <h3>Todo List</h3>
      <input
        type="text"
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ title: e.target.value }))}
      />
      <button onClick={() => dispatch(addTodo(todo))} id="wd-add-todo-click">
        Add
      </button>
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              id="wd-delete-todo-click"
            >
              Delete
            </button>
            <button
              onClick={() => dispatch(setTodo(todo))}
              id="wd-set-todo-click"
            >
              Edit
            </button>
            {todo.title}
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
