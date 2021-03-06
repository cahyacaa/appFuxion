const { TodoList } = require('../models');

const TodoListRepository = {

    async findAll() {
        const result = await TodoList.findAll({
            raw: true
        });
        return result;
    },

    async findOne(field, params) {
        const result = await TodoList.findOne({
            where: {
                [field]: params
            },
            raw: true
        });
        return result;
    },

    async create(data) {
        const result = await TodoList.create(data);
        return result.get({ plain: true });
    },


    async update(id, data) {
        const result = await TodoList.update(data, {
            where: {
                id: id
            }
        });
        return result;
    },


};

module.exports = TodoListRepository;