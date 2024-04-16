import { AnswaresRepository } from '@/domain/forum/application/repositories/answares-repository'
import { Answer } from '@/domain/forum/enterprise/entities/answer'

export class InMemoryAnswersRepository implements AnswaresRepository {
  public items: Answer[] = []

  async create(answer: Answer) {
    this.items.push(answer)
  }
}
