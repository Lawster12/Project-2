const router = require('express').Router();
const { Module, Lessons} = require('../models');
const axios = require('axios');

router.get('/', async (req, res) => {
    try {
        
        const moduleData = await Module.findAll({
            include: [Lessons]
        })
        const modules = moduleData.map((module) => module.get({ plain: true }));
        console.log("modules", modules)
;
        res.render('home', { modules  });
    } catch (error) {
        res.json(error)
    }
});

router.get('/login', async (req, res) => {
    res.render('login');
});

router.get('/signup', async (req, res) => {
    res.render('signup');
});

module.exports = router;