const Module = require('./Module');
const Lessons = require('./Lessons');

Module.hasMany(Lessons, {
    foreignKey: 'module_id',
    onDelete: 'CASCADE'
});

Lessons.belongsTo(Module, {
    foreignKey: 'module_id'
});

module.exports = { Module, Lessons };
