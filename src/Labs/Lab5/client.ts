import axios from "axios";

const HTTP_SERVER = import.meta.env.VITE_HTTP_SERVER;

export const fetchWelcomeMessage = async () => {
  const response = await axios.get(`${HTTP_SERVER}/lab5/welcome`);
  return response.data;
};

export const fetchAssignment = async () => {
  const response = await axios.get(`${HTTP_SERVER}/lab5/assignment`);
  return response.data;
};

export const updateTitle = async (title: string) => {
  const response = await axios.get(
    `${HTTP_SERVER}/lab5/assignment/title/${title}`
  );
  return response.data;
};

export const fetchTodos = async () => {
  const response = await axios.get(`${HTTP_SERVER}/lab5/todos`);
  return response.data;
};

export const removeTodo = async (id: number) => {
  const response = await axios.get(`${HTTP_SERVER}/lab5/todos/${id}/delete`);
  return response.data;
};

export const createTodo = async () => {
  const response = await axios.get(`${HTTP_SERVER}/lab5/todos/create`);
  return response.data;
};

export const updateTodoTitle = async (id: number, title: string) => {
  const response = await axios.get(
    `${HTTP_SERVER}/lab5/todos/${id}/title/${title}`
  );
  return response.data;
};

const MODULE_API = `${HTTP_SERVER}/lab5/module`;

export const fetchModule = async () => {
  const response = await axios.get(`${MODULE_API}`);
  return response.data;
};

export const updateModuleName = async (name: string) => {
  const response = await axios.get(`${MODULE_API}/name/${name}`);
  return response.data;
};
