const router = require('express').Router();
const { Module } = require('../../models');
const withEmail = require('../../utils/loggedin');



// get all modules
router.get(`/`, async (req, res) => {
    try {
        const ModuleData = await Module.findAll();
        res.json(ModuleData);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Create a new Module
router.post(`/`, async (req, res) => {
    try {
        const ModuleDataNew = await Module.create({module_title: req.body.module_title

        });
        res.json(ModuleDataNew);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//Update a module
router.put(`/:id`, async (req, res) => {
    try {
        const moduleId = req.params.id;
        const moduleDataUpdate = await Module.update(
            {
            module_title: req.body.module_title

        },
        {
        where: {
            id: moduleId
        },
        }
);

if (moduleDataUpdate[0] === 0) {
    res.status(404).json({message:`No module found with this id`});
    return;
}
res.json({ message: `module id: ${moduleId} updated successfully` });
}
catch(err) {
    console.log(err);
    res.status(500).json(err);
}
});

router.delete('/:id', async (req, res) => {
    // delete a module by its `id` value
    try {
      const moduleId = req.params.id;
  
      const moduleDataDelete = await Module.destroy({
          where: {
              id: moduleId,
          },
      });
  
      if (moduleDataDelete === 0) {
          res.status(404).json({ message: 'No module found with this id' });
          return;
      }
  
      res.json({ message: `module id: ${moduleId} deleted successfully` });
      
  } catch(err) {
      console.log(err);
      res.status(500).json(err);
  }
  });
  


module.exports = router