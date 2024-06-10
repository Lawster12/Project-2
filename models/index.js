const Module = require('./Module');
const Lessons = require('./Lessons');
const User = require('./User');

Module.hasMany(Lessons, {
    foreignKey: 'module_id',
    onDelete: 'CASCADE'
});

Lessons.belongsTo(Module, {
    foreignKey: 'module_id'
});

module.exports = { Module, Lessons, User };
