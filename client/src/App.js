import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoTable from './components/TodoTable';
import { getTodos, createTodo, updateTodo, deleteTodo } from './api/api';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const { data } = await getTodos();
      setTodos(data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const handleAddOrUpdateTodo = async (todo) => {
    try {
      if (todo._id) {
        const { data } = await updateTodo(todo._id, todo);
        setTodos(todos.map((t) => (t._id === todo._id ? data : t)));
      } else {
        const { data } = await createTodo(todo);
        setTodos([...todos, data]);
      }
    } catch (error) {
      console.error('Error saving todo:', error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const handleEditTodo = (todo) => {
    setCurrentTodo(todo);
  };

  const clearForm = () => {
    setCurrentTodo(null);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">To-Do Application</h1>
      <TodoForm currentTodo={currentTodo} onSubmit={handleAddOrUpdateTodo} clearForm={clearForm} />
      <TodoTable todos={todos} onEdit={handleEditTodo} onDelete={handleDeleteTodo} />
    </div>
  );
};

export default App;
