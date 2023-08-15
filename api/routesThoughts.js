const userSchema = require('express').Router();
const {
    gatherThoughts,
    getOneThought,
    createThought,
    deleteThought,
    removeThought,

} = require('../../controllers/thoughtController.js');
router.route('/').get(gatherThoughts).post(createThought);

router.route('/:thoughtId').get(getOneThought)
module.exports = userSchema