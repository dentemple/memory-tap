import { actions } from '../types'

export function startGame() {
  return { type: actions.START_GAME }
}

export function clearGame(isWin = false) {
  return {
    type: actions.CLEAR_GAME,
    isWin
  }
}

export function initializeGame() {
  return { type: actions.INITIALIZE_GAME }
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
