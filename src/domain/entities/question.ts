import { randomUUID } from "node:crypto"

interface QuestionProps {
  title: string
  content: string 
  authorId: string
}

export class Question {
  public id: string
  public title: string
  public content: string
  public authorId: string

  constructor({title, content, authorId}: QuestionProps, id?: string) {
    this.title = title
    this.authorId = authorId
    this.content = content
    this.id = id ?? randomUUID()
  }

}