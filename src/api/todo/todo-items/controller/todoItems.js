const { editTodoItemsService } = require("../service/editTodoItems");
const { createTodoItemsService } = require("../service/createTodoItems");

async function addTodoItems(req, res, next) {
    const data = req.body;
    const result = await createTodoItemsService(data)
    return res.API.success(result);
}

async function editTodoItems(req, res, next) {
    const { name } = req.body;
    const data = {
        name
    };
    const id = req.params.id;
    await editTodoItemsService(id,data);
    return res.API.success();
}

module.exports = {
    addTodoItems,
    editTodoItems
};