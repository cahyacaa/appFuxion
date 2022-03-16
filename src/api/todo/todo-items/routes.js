const todoListItemsHandler = require('./controller/todoItems');

const router = require('express').Router();


router.post('/', todoListItemsHandler.addTodoItems);
router.put('/:id', todoListItemsHandler.editTodoItems);
router.put('/:id/mark-done', todoListItemsHandler.markDoneItems);


module.exports = router;