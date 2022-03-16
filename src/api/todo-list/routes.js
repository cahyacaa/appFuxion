const todoListHandler = require('./controller/todoList');

const router = require('express').Router();


router.post('/todo-list', todoListHandler.todoList);

module.exports = router;