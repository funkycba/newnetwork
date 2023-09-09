const router = require('express').Router();
const userRoutes = require('./routesUsers');
const thoughtRoutes = require('./routesThoughts');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;
