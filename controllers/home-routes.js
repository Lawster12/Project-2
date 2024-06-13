const router = require('express').Router();
const { Module, Lessons} = require('../models');
const withEmail = require('../utils/loggedin');

router.get('/', withEmail, async (req, res) => {

    try {
        const moduleData = await Module.findAll({
            include: [{ 
                model: Lessons                
            },

        ],

        order: [
            [Lessons, 'id', 'ASC']
        ]
        });
        const modules = moduleData.map((module) => module.get({ plain: true }));
        console.log("modules_lessons", modules[0].lessons);
        // modules[0].lessons.sort((a, b) => {
        //     if (a[0] !== b[0]) {
        //         return a[0] - b[0];
        //     }
        //     if (a[1] < b[1]) {
        //         return -1;
        //     }
        //     if (a[1] > b[1]) {
        //         return 1;
        //     }
        //     return 0; // second elements are equal
        // // });
        // console.log(lessons);;


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