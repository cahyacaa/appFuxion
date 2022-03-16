const HttpError = require('../../../../common/create-http-error');
const TodoItemRepository = require('../../../../repository/todoItems');
const TodoListRepository = require('../../../../repository/todoList');

exports.editTodoItemsService = async(id,data) => {
    const recordTodoList = await TodoItemRepository.findOne('id',id);
    if(!recordTodoList){
        throw new HttpError('items not found', 404);
    }
    const result = await TodoItemRepository.update(id, data);
    return result;
}