const {Lessons} = require('../models');

const lessonData = [
    {
        lesson_title: 'HTML Introduction',
        module_id: 1,
        url: 'https://www.w3schools.com/html/html_intro.asp'
    },
    {
        lesson_title: 'HTML Forms',
        module_id: 1,
        url: 'https://www.w3schools.com/html/html_forms.asp'
    },
    {
        lesson_title: 'HTML Canvas Graphics',
        module_id: 1,
        url: 'https://www.w3schools.com/html/html5_canvas.asp'
    },
    {
        lesson_title: 'HTML Media',
        module_id: 1,
        url: 'https://www.w3schools.com/html/html_media.asp'
    },
    {
        lesson_title: 'HTML Geolocation API',
        module_id: 1,
        url: 'https://www.w3schools.com/html/html5_geolocation.asp'
    },
    {
        lesson_title: 'HTML Examples',
        module_id: 1,
        url: 'https://www.w3schools.com/html/html_examples.asp'
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
  
];

const seedLesson = () => Lessons.bulkCreate(lessonData);

module.exports = seedLesson;
