import { actions, possibilities } from '../types'

export function testDispatch() {
  console.log(actions.TEST_DISPATCH)
  return { type: actions.TEST_DISPATCH }
}

export function initializeGame() {
  console.log(actions.INITIALIZE_GAME)
  return { type: actions.INITIALIZE_GAME }
}

export function clearGame() {
  console.log(actions.CLEAR_GAME)
  return { type: actions.CLEAR_GAME }
}

export function generateMove() {
  console.log(actions.GENERATE_MOVE)
  return {
    type: actions.GENERATE_MOVE,
    payload:
      possibilities[Math.floor(Math.random() * possibilities.length)].name
  }
}
