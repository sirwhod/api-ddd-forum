import { Answer } from "../entities/answer"
import { AnswaresRepository } from "../repositories/answares-repository"

interface AnswerQuestionUseCaseRequest {
  instructorId: string
  questionId: string
  content: string
}

export class AnswerQuestionUseCase {
  constructor(
    private answersRepository: AnswaresRepository
  ) {}
  async execute({instructorId, questionId, content}: AnswerQuestionUseCaseRequest) {
    const answer = new Answer({
      content, 
      authorId: instructorId, 
      questionId
    })


    await this.answersRepository.create(answer)

    return answer
  }
}