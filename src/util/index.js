import { possibilities } from '../types'

export function selectRandomPad() {
  return possibilities[Math.floor(Math.random() * possibilities.length)]
}
