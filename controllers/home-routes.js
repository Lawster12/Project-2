const router = require('express').Router();
const { Module, Lessons} = require('../models');
const withEmail = require('../utils/loggedin');

router.get('/home', withEmail, async (req, res) => {
    console.log("home route");
    try {
        const moduleData = await Module.findAll({
            include: [Lessons]
        });
        const modules = moduleData.map((module) => module.get({ plain: true }));
        console.log("modules", modules);

        res.render('home', { 
            modules: modules,
            email: req.session.email,
        });

    } catch (error) {
        res.json(error)
    }
});

router.get('/', async (req, res) => {
    if (req.session.email) {
        res.redirect('/home');
        return;
    }
    res.render('login');
});

router.get('/signup', async (req, res) => {
    res.render('signup');
});

router.post('/logout', (req, res) => {
    if (req.session.email) {
        req.session.destroy(() => {
            res.status(204).end();
            res.redirect('/');
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;