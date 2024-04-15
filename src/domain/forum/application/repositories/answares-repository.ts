import { Answer } from '../../enterprise/entities/answer'

export interface AnswaresRepository {
  create(answer: Answer): Promise<void>
}
