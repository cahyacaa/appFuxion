const todoListItemsHandler = require('./controller/todoItems');

const router = require('express').Router();


router.post('/', todoListItemsHandler.addTodoItems);
router.put('/:id', todoListItemsHandler.editTodoItems);


module.exports = router;