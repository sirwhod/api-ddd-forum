import { AnswerQuestionUseCase } from './answer-question'
import { AnswaresRepository } from '../repositories/answares-repository'
import { Answer } from '../entities/answer'

const fakeAnsweresRepository: AnswaresRepository = {
  create: async (answer: Answer) => {
     return
  },
}

test('Create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnsweresRepository)

  const answer = await answerQuestion.execute({
    questionId: '1',
    instructorId: '1',
    content: 'Nova resposta'
  })

  expect(answer.content).toEqual('Nova resposta')
})