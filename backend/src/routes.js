import { Router } from 'express'
import QuestionController from './modules/question/QuestionController'

const Routes = Router()

Routes.get('/question', QuestionController.index)
Routes.post('/question', QuestionController.store)

export default Routes
