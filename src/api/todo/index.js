const router = require('express').Router();
const todoRoutes = require('./todo-list/routes');
const todoListItemsRoutes = require('./todo-items/routes');



router.use('/todo-list', todoRoutes);
router.use('/items', todoListItemsRoutes);


module.exports = router;