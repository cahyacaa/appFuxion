'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TodoList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TodoList.hasMany(models.TodoItem, {
        foreignKey: 'todoListId',
        as: 'items'
      })
    }
  }
  TodoList.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    taskDone: DataTypes.INTEGER,
    isAllDone: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'TodoList',
  });
  return TodoList;
};