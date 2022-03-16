const { editTodoItemsService } = require("../service/editTodoItems");
const { createTodoItemsService } = require("../service/createTodoItems");
const { markItemsDone } = require("../service/markDoneItems");
const { deleteItemsService } = require("../service/deleteItems");

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

async function markDoneItems(req, res, next) {
    const { isDone } = req.body;
    const data = {
        isDone
    };
    const id = req.params.id;
    const result = await markItemsDone(id,data);
    return res.API.success({}, `Success update mark items ${result?.name} to done`);
}

async function deleteItems(req, res, next) {
    const id = req.params.id;
    const result = await deleteItemsService(id);
    return res.API.success({}, `Success delete items ${result?.name}`);
}


module.exports = {
    addTodoItems,
    editTodoItems,
    markDoneItems,
    deleteItems
};