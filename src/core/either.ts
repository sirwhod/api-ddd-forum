export class Left<L, R> {
  readonly value: L

  constructor(value: L) {
    this.value = value
  }

  isRight(): this is Right<L, R> {
    return false
  }

  isLeft(): this is Left<L, R> {
    return true
  }
}

/**
 * Success handler
 *
 * @readonly value: The result of the operation
 *
 * @method isRight returns true
 * @method isLeft returns false
 */
export class Right<L, R> {
  readonly value: R

  constructor(value: R) {
    this.value = value
  }

  isRight(): this is Right<L, R> {
    return true
  }

  isLeft(): this is Left<L, R> {
    return false
  }
}

/**
 * Error type
 *
 * @param L - is the type of result if the operation failed
 * @param R - is the type of result if the operation success
 *
 * @example
 *
 * type ReturnResponse = Either<string,object>
 * */
export type Either<L, R> = Left<L, R> | Right<L, R>

/**
 * Error handler
 *
 * @readonly value: The error message
 *
 * @method isRight returns false
 * @method isLeft returns true
 * */
export const left = <L, R>(value: L): Either<L, R> => {
  return new Left(value)
}

/**
 * Success handler
 *
 * @readonly value: The result of the operation
 *
 * @method isRight returns true
 * @method isLeft returns false
 */
export const right = <L, R>(value: R): Either<L, R> => {
  return new Right(value)
}
