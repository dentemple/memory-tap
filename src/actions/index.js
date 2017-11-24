import { actions } from '../types'

export function startGame() {
  console.log(actions.START_GAME)
  return { type: actions.START_GAME }
}

export function clearGame() {
  console.log(actions.CLEAR_GAME)
  return { type: actions.CLEAR_GAME }
}

export function initializeGame() {
  return { type: actions.INITIALIZE_GAME }
}

export function generateMove(pad) {
  return {
    type: actions.GENERATE_MOVE,
    name: pad.name
  }
}

export function applyHighlight(pad) {
  return {
    type: actions.APPLY_HIGHLIGHT,
    pad
  }
}

export function removeHighlight(pad) {
  return {
    type: actions.REMOVE_HIGHLIGHT,
    pad
  }
}
