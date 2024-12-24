import axios from 'axios';


// all api

const API = axios.create({ baseURL: 'http://localhost:5000/api/todos' });

export const getTodos = () => API.get('/');
export const createTodo = (newTodo) => API.post('/', newTodo);
export const updateTodo = (id, updatedTodo) => API.put(`/${id}`, updatedTodo);
export const deleteTodo = (id) => API.delete(`/${id}`);
