import { actions } from '../types'

export function initializeGame() {
  return { type: actions.INITIALIZE_GAME }
}

export function startGame() {
  return { type: actions.START_GAME }
}

export function endGame(isWin = false) {
  return {
    type: actions.END_GAME,
    result: isWin ? 'YOU WON' : 'GAME OVER'
  }
}

export function generateMove(pad) {
  return {
    type: actions.GENERATE_MOVE,
    pad
  }
}

export function addPlayerMove(name) {
  return {
    type: actions.ADD_PLAYER_MOVE,
    name
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

export function repeatAttempt() {
  return { type: actions.REPEAT_ATTEMPT }
}

export function passControlToPlayer() {
  return { type: actions.PASS_CONTROL_TO_PLAYER }
}

export function passControlToComputer() {
  return { type: actions.PASS_CONTROL_TO_COMPUTER }
}

export function emptyPlayerMoves() {
  return { type: actions.EMPTY_PLAYER_MOVES }
}

export function toggleStrictMode() {
  return { type: actions.TOGGLE_STRICT_MODE }
}
