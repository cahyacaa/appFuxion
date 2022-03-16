const { createTodoListService } = require("../service/createTodoList");
const { editTodoListService } = require("../service/editTodoList");

async function todoList(req, res, next) {
    const data = req.body;
    const result = await createTodoListService(data)
    return res.API.success(result);
}


async function editTodoList(req, res, next) {
    const { name } = req.body;
    const data = {
        name
    };
    const id = req.params.id;
    await editTodoListService(id,data);
    return res.API.success();
}


module.exports = {
    todoList,
    editTodoList
};