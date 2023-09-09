// const {ObjectId} = require('mongoose').Types;
const { User } = require('../models');

module.exports = {
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
                .select('-__v');

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });

            if (!user) {
                res.status(404).json({ message: 'No user with that ID' })
            }
            res.json({ message: 'User deleted!' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // add and delete friends
    
    async createFriend(req, res) {
        try {
            const friend = await friends.create(req.body);
            res.json(friend);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async deleteFriend(req, res) {
        try {
            const friend = await friends.findOneAndRemove( {_id: req.params.friendId});
            if (!friend) {
                return res
                .status(404)
                .json({ message: 'No friend with that ID'});
            }
            res.json({ message: 'friend deleted'});
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
};


