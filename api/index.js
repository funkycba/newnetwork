const router = require('express').Router();
const userRoutes = require('./routesUsers');
const thoughtRoutes = require('./routesThoughts');

router.use('/routesUsers', userRoutes);
router.use('/routesThoughts', thoughtRoutes);

module.exports = router;
