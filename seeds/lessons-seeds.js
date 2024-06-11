const {Lessons} = require('../models');

const lessonData = [
    {
        lesson_title: 'HyperText Markup Language',
        module_id: 1,
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
    },
    {
        lesson_title: 'HTML Attribute',
        module_id: 1,
        url: 'https://developer.mozilla.org/en-US/docs/Glossary/Attribute'
    },
    {
        lesson_title: 'HTML Element Reference',
        module_id: 1,
        url: 'https://www.w3schools.com/tags/default.asp'
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