const router = require('express').Router();
const { Module } = require('../../models');
const withEmail = require('../../utils/loggedin');

// Create a new Module
router.post(`/module`, withEmail, async (req, res) => {
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

module.exports = router