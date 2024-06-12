const router = require('express').Router();
const { Module, Lessons} = require('../models');
const withEmail = require('../utils/loggedin');

router.get('/', withEmail, async (req, res) => {

    try {
        const moduleData = await Module.findAll({
            include: [Lessons]
        });
        const modules = moduleData.map((module) => module.get({ plain: true }));
        console.log("modules", modules);

        res.render('home', { 
            modules: modules,
            email: req.session.loggedIn,
        });

    } catch (error) {
        res.json(error)
    }
});

router.get('/login', async (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
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