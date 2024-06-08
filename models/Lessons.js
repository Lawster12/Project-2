const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Lessons extends Model {};

Lessons.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        lesson_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        url: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        module_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'module',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'lessons'
    }
);

module.exports = Lessons;