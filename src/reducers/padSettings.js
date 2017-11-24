import { actions, pads } from '../types'

function padSettings(state = pads, action) {
  switch (action.type) {
    case actions.INITIALIZE_GAME:
      return {
        ...state,
        ...pads
      }

    case actions.APPLY_HIGHLIGHT:
      return {
        ...state,
        [action.pad.name]: { ...action.pad, highlight: true }
      }

    case actions.REMOVE_HIGHLIGHT:
      return {
        ...state,
        [action.pad.name]: { ...action.pad, highlight: false }
      }

    default:
      return state
  }
}

export default padSettings
