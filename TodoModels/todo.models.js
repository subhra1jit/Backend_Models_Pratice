import mongoose from 'mongoose';

const todos = new mongoose.Schema(
  {
    content: {
      type: String,
      default: '',
      required: true,
    },
    progress: {
      type: Boolean,
      default: false,
      percentage: Number,
    },
    allTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subtodos',
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Todo = mongoose.model('Todo', todos);
