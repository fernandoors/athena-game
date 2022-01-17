import { Schema, model } from 'mongoose'

const Question = new Schema(
  {
    question: {
      type: String,
      required: true
    },
    answers: {
      options: [Number],
      correct: Number
    },
    allowed: { type: Boolean, default: false }
  },
  { timestamps: true }
)

export default model('Question', Question)
