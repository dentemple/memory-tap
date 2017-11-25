import { actions } from '../types'

export function initializeGame() {
  console.log(actions.INITIALIZE_GAME)
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
  console.log(actions.ADD_PLAYER_MOVE)
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

export function passControlToPlayer() {
  console.log(actions.PASS_CONTROL_TO_PLAYER)
  return { type: actions.PASS_CONTROL_TO_PLAYER }
}

export function passControlToComputer() {
  console.log(actions.PASS_CONTROL_TO_COMPUTER)
  return { type: actions.PASS_CONTROL_TO_COMPUTER }
}

export function emptyPlayerMoves() {
  return { type: actions.EMPTY_PLAYER_MOVES }
}
