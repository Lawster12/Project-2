const {Lessons} = require('../models');

const lessonData = [
    {
        lesson_title: 'HTML Basics 1',
        module_id: 1,
        // url: ''
    },
    {
        lesson_title: 'CSS Basics',
        module_id: 2,
        // url: ''
    },
    {
        lesson_title: 'JavaScript Basics',
        module_id: 3,
        // url: ''
    },
    {
        lesson_title: 'Node.js basics',
        module_id: 4,
        // url: ''
    },
    {
        lesson_title: 'Express.js basics',
        module_id: 5,
        // url: ''
    },
    {
        lesson_title: 'HTML basics 2',
        module_id: 1,
        // url: ''
    },
];

const seedLesson = () => Lessons.bulkCreate(lessonData);

module.exports = seedLesson;