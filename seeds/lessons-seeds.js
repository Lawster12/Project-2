const {Lessons} = require('../models');

const lessonData = [
    {
        lesson_title: 'HTML Basics',
        module_id: 1
    },
    {
        lesson_title: 'CSS Basics',
        module_id: 2
    },
    {
        lesson_title: 'JavaScript Basics',
        module_id: 3
    },
    {
        lesson_title: 'Node.js basics',
        module_id: 4
    },
    {
        lesson_title: 'Express.js basics',
        module_id: 5
    },
];

const seedLesson = () => Lessons.bulkCreate(lessonData);

module.exports = seedLesson;