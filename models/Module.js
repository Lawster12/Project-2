const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Module extends Model {};

Module.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        module_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'module'
    }
);

module.exports = Module;