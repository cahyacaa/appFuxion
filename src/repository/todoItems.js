const { TodoItem } = require('../models');

const TodoItemRepository = {

    async findAll() {
        const result = await TodoItem.findAll({
            raw: true
        });
        return result;
    },

    async findOne(field, params) {
        const result = await TodoItem.findOne({
            where: {
                [field]: params
            },
            raw: true
        });
        return result;
    },

    async create(data) {
        const result = await TodoItem.create(data);
        return result.get({ plain: true });
    },


    async update(id, data) {
        const result = await TodoItem.update(data, {
            where: {
                id: id
            }
        });
        return result;
    },

    async delete(id) {
        const result = await TodoItem.destroy({
            where: {
                id: id
            }
        });
        return result;
    },



};

module.exports = TodoItemRepository;