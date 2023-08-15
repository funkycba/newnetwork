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
            const thought = await Thought.find();

            const thoughtObj = {
                thoughtNum: await thoughtNum(),
            };
            res.json(thoughtObj);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async getOneThought(req, res) {
        try {
          const thought = await Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v');
    
          if (!thought) {
            return res.status(404).json({ message: 'No thought with that ID' });
          }
    
          res.json(thought);
        } catch (err) {
          res.status(500).json(err);
        }
      },
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndRemove({ _id: req.params.thoughtId });
            if (!thought) {
                return res
                    .status(404)
                    .json({ message: 'No thought with that ID :(' });
            }

            res.json({ message: 'Thought successfully deleted' });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }

    },
        async removeThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId }
            );
            if (!thought) {
                return res
                    .status(404)
                    .json({ message: 'No thought with that ID :(' });
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    }
};

