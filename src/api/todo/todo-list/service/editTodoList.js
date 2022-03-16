const HttpError = require('../../../../common/create-http-error');
const TodoListRepository = require('../../../../repository/todoList');

exports.editTodoListService = async(id,data) => {
    const recordTodoList = await TodoListRepository.findOne('id',id);
    if(!recordTodoList){
        throw new HttpError('todo list not found', 404);
    }
    const result = await TodoListRepository.update(id, data);
    return result;
}