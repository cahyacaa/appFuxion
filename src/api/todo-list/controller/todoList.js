const { createTodoListService } = require("../service/createTodoList");

async function todoList(req, res, next) {
    const data = req.body;
    const result = await createTodoListService(data)
    return res.API.success(result);
}

module.exports = {
    todoList
};