const HttpError = require('../../../../common/create-http-error');
const { Sequelize } = require('../../../../models');
const TodoItemRepository = require('../../../../repository/todoItems');
const TodoListRepository = require('../../../../repository/todoList');

exports.deleteItemsService = async(id,data) => {
    const recordTodoList = await TodoItemRepository.findOne('id',id);
    if(!recordTodoList){
        throw new HttpError('items not found', 404);
    }
    await TodoItemRepository.delete(id, data);
    if(recordTodoList.isDone === 1) await TodoListRepository.update(recordTodoList.todoListId, { taskDone : Sequelize.literal('taskDone - 1') })
    return {
        name : recordTodoList.name || 'No Name'
    };
}