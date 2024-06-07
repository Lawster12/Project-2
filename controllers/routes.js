const router = require('express').Router();
const { Module } = require('../models');
const { Lessons } = require('../models');


router.get('/', async (req, res) => {
    const moduleData = await Module.findAll().catch((err) => { res.json(err); });
    const modules = moduleData.map((module) => module.get({ plain: true }));
    const lessonData = await Lessons.findAll().catch((err) => { res.json(err); });
    const lessons = lessonData.map((lesson) => lesson.get({ plain: true }));
    res.render('home', { modules, lessons });
});

module.exports = router;