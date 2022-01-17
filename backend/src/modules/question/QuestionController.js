import AppError from "../../shared/AppError"
import QuestionSchema from "./QuestionSchema"

function QuestionController() {
  return {
    async index(req, res) {
      const questions = await QuestionSchema.find({ allowed: true }).limit(10)
      return res.json(questions)
    },
    async store(req, res) {
      const { question, answers } = req.body

      const isAnswersValid = answers.options.includes(answers.correct)

      if (!isAnswersValid) {
        throw new AppError('Correct Answer must be in options Array')
      }

      const questionSaved = await QuestionSchema.create({ question, answers })
      return res.status(201).json({ question: questionSaved })
    }
  }
}

export default QuestionController()
