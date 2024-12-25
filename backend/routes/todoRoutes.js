const express = require('express');
const { getTodos, createTodo, updateTodo, deleteTodo } = require('../todocontrollers/todoController');
const router = express.Router();

// routes todo
router.get('/', getTodos);
router.post('/', createTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;
