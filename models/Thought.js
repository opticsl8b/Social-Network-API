const { Schema, model, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const ReactSchema = new Schema(
  {
    reactionId: {
      // set custom id to avoid confusion with parent thought_id
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: "reactionBody is a required field",
      validate: [
        ({ length }) => length <= 280,
        "reactionBody should be 280 max",
      ],
    },
    username: {
      type: String,
      required: "username is a required field",
    },
    createAt: {
      type: Date,
      default: Date.now,
      get: (rawDateData) => dateFormat(rawDateData),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: "reactionBody is a required field",
      validate: [
        ({ length }) => length <= 280,
        "reactionBody should be 280 max",
      ],
    },
    createAt: {
      type: Date,
      default: Date.now,
      get: (rawDateData) => dateFormat(rawDateData),
    },
    username: {
      type: String,
      required: "username is a required field",
    },
    reactions: [ReactSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

ThoughtSchema.virtual("reactionCount").get(()=>{
return this.reactions.length;
})

const Thought =model("Thought", ThoughtSchema);

module.exports = Thought;