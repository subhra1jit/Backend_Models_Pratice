import mongoose from 'mongoose';

const subtodo = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    reference: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Todo',
    },
    'completion date': {
      type: Date,
      required: true,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
);

export const SubTodo = mongoose.model('Subtodo', subtodo);
