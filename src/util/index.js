/* eslint-disable array-callback-return */

import { possibilities } from '../types'

export const mapNamesToArray = pads => pads.map(pad => pad.name)

export const selectRandomPad = () =>
  possibilities[Math.floor(Math.random() * possibilities.length)]

export const arrayIsPartOf = (smallerArr, largerArr) =>
  smallerArr.every((_, index) => smallerArr[index] === largerArr[index])

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
