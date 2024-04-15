import { Answer } from '../entities/answer'

export interface AnswaresRepository {
  create(answer: Answer): Promise<void>
}
