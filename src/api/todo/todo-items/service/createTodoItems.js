const HttpError = require('../../../../common/create-http-error');
const TodoItemRepository = require('../../../../repository/todoItems');
const TodoListRepository = require('../../../../repository/todoList');

exports.createTodoItemsService = async(data) => {
    const recordTodoList = await TodoListRepository.findOne('id', data.todoListId);
    if(!recordTodoList){
        throw new HttpError('todo list items not found', 404);
    }
    const result = await TodoItemRepository.create(data);
    return result;
}