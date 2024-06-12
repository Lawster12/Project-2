const router = require('express').Router();
const { Lessons } = require('../../models');
const withEmail = require('../../utils/loggedin');

//Create a new lesson

router.post(`/`, async (req, res) => {
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


//Update a lessons
router.put(`/:id`, async (req, res) => {
    try {
        const lessonsId = req.params.id;
        const lessonsDataUpdate = await Lessons.update(
            {
                lesson_title: req.body.lesson_title,
                url: req.body.url,
                module_id: req.body.module_id

        },
        {
        where: {
            id: lessonsId
        },
        }
);

if (lessonsDataUpdate[0] === 0) {
    res.status(404).json({message:`No lessons found with this id`});
    return;
}
res.json({ message: `lesson id: ${lessonsId} updated successfully` });
}
catch(err) {
    console.log(err);
    res.status(500).json(err);
}
});


 // delete a lesson by its `id` value
router.delete('/:id', async (req, res) => {
    
    try {
      const lessonsId = req.params.id;
  
      const lessonsDataDelete = await Lessons.destroy({
          where: {
              id: lessonsId,
          },
      });
  
      if (lessonsDataDelete === 0) {
          res.status(404).json({ message: 'No lessons found with this id' });
          return;
      }
  
      res.json({ message: `lesson id: ${lessonsId} deleted successfully` });
      
  } catch(err) {
      console.log(err);
      res.status(500).json(err);
  }
  });
  


module.exports = router;
