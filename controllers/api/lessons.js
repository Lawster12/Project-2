
const router = require('express').Router();
const { Lessons } = require('../../models');
const withEmail = require('../../utils/loggedin');

//Create a new lesson

router.post(`/lessons`,   async (req, res) => {
    try{
        const LessonsDataNew = await Lessons.create({
            lesson_title: req.body.lesson_title,
            url: req.body.url,
            module_id: req.body.module_id

        });
        res.json(LessonsDataNew);
    }
    catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;