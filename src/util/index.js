/* eslint-disable array-callback-return */

import { possibilities } from '../types'

export function selectRandomPad() {
  return possibilities[Math.floor(Math.random() * possibilities.length)]
}

export function compareArrays(smallArr, bigArr) {
  smallArr.map(i => {
    if (smallArr[i] !== bigArr[i]) {
      return false
    }
  })
  return true
}

export const mapNamesToArray = pads => pads.map(pad => pad.name)

export function delayedLoopExecution(elements, addTime, execute, done) {
  let waitTime = addTime / 2

  elements.map(element => {
    setTimeout(() => {
      execute(element)
    }, waitTime)
    waitTime = waitTime + addTime
  })

  setTimeout(() => {
    done()
  }, waitTime)
}
