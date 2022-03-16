const todoListHandler = require('./controller/todoList');

const router = require('express').Router();


router.post('/', todoListHandler.todoList);
router.put('/:id', todoListHandler.editTodoList);

module.exports = router;