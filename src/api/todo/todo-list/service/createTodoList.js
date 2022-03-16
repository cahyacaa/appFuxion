const HttpError = require('../../../../common/create-http-error');
const TodoListRepository = require('../../../../repository/todoList');

exports.createTodoListService = async(data) => {
    if(!data?.name){
        throw new HttpError('name must be provided',400);
    }
    const result = await TodoListRepository.create(data);
    return result;
}