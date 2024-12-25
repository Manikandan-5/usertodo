const Todo = require('../modals/Todo');

// get  todos
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// post todo
const createTodo = async (req, res) => {
  try {
    const { name, age, phonenumber, address } = req.body;
    const todo = new Todo({ name, age, phonenumber, address });
    const savedTodo = await todo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update  todo
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete  todo
const deleteTodo = async (req, res) => {
    try {
      const { id } = req.params;
  
      // delete the id todo
      const todo = await Todo.findByIdAndDelete(id);
  
      if (!todo) {
        return res.status(404).json({ message: 'To-Do not found' });
      }
  
      res.status(200).json({ message: 'To-Do deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };
  

module.exports = { getTodos, createTodo, updateTodo, deleteTodo };
