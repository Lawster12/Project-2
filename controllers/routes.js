const router = require('express').Router();
const { Module, Lessons} = require('../models');



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


module.exports = router;