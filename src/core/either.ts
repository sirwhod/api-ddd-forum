/**
 * Error handler
 *
 * @readonly value: The error message
 * */
export class Left<L> {
  readonly value: L

  constructor(value: L) {
    this.value = value
  }
}

/**
 * Success handler
 *
 * @readonly value: The result of the operation
 */
export class Right<R> {
  readonly value: R

  constructor(value: R) {
    this.value = value
  }
}

export type Either<L, R> = Left<L> | Right<R>

export const left = <L, R>(value: L): Either<L, R> => {
  return new Left(value)
}

export const right = <L, R>(value: R): Either<L, R> => {
  return new Right(value)
}
