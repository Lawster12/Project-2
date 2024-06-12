const router = require('express').Router();

const userRoutes = require('./user-routes');
const moduleRoutes = require(`./module`);
const lessonsRoutes = require(`./lessons`)

router.use('/users', userRoutes);
router.use(`/lessons`, lessonsRoutes);
router.use(`/modules`, moduleRoutes)

module.exports = router;