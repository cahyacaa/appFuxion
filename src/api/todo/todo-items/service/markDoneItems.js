const HttpError = require('../../../../common/create-http-error');
const { Sequelize } = require('../../../../models');
const TodoItemRepository = require('../../../../repository/todoItems');
const TodoListRepository = require('../../../../repository/todoList');

exports.markItemsDone = async(id,data) => {
    const recordTodoList = await TodoItemRepository.findOne('id',id);
    if(!recordTodoList){
        throw new HttpError('items not found', 404);
    }
    if(recordTodoList.isDone === 1){
         throw new HttpError(`task ${recordTodoList.name} already done`, 500);
     }
    await Promise.all([
        TodoItemRepository.update(id, data),
        TodoListRepository.update(recordTodoList.todoListId, {
            taskDone : Sequelize.literal('taskDone + 1') 
        })
    ]);
    return {
        name : recordTodoList.name || 'No Name'
    };
}