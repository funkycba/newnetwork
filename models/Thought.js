const { Schema, Types } = require('mongoose');
const reactionSchema = require('./Reactions')
const userSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    username: {
      type: String,
      required: true,
    },
      reactions: [reactionSchema],

  },
  {
    toJSON: {
        virtuals: true,
    },
    id: false,
},
);
userSchema.virtual('reactionCounts').get(function () {
    return this.reactions.length;
});