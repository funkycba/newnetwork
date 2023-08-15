const { ObjectId } = require('mongoose').Types;
const Thought = require('../models');

const thoughtNum = async () => {
    const numberOfThoughts = await Thought.aggregate()
        .count('thoughtCount');
    return numberOfThoughts;
}
module.exports = {
    async gatherThoughts(req, res) {
        try {
            const thoughts = await Thought.find();

            const thoughtObj = {
                thoughtNum: await thoughtNum(),
            };
            res.json(thoughtObj);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async createThought(req, res) {
        try {
            const student = await Thought.create(req.body);
            res.json(student);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteThought(req, res) {
        try {
            const student = await Thought.findOneAndRemove({_id: req.params.thoughtId});
        }
        
      res.json({ message: 'Student successfully deleted' });
      catch (err) {
      console.log(err);
      res.status(500).json(err);
    },
    async removeThought(req, res) {

    }
},
}
