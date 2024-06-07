const {Module} = require('../models');

const moduleData = [
    {
        module_title: 'HTML'
    },
    {
        module_title: 'CSS'
    },
    {
        module_title: 'JavaScript'
    },
    {
        module_title: 'Node.js'
    },
    {
        module_title: 'Express.js'
    },
];

const seedModule = () => Module.bulkCreate(moduleData);

module.exports = seedModule;