const pads = Object.freeze({
  topLeft: {
    name: 'topLeft',
    value: '⬉',
    backgroundColor: '#00a74a' /* green */,
    highlight: false,
    highlightColor: '#13ff7c' /* lighter green */,
    audio: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3')
  },
  topRight: {
    name: 'topRight',
    value: '⬈',
    backgroundColor: '#9f0f17' /* red */,
    highlight: false,
    highlightColor: '#ff4c4c' /* lighter red */,
    audio: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3')
  },
  bottomLeft: {
    name: 'bottomLeft',
    value: '⬋',
    backgroundColor: '#cca707' /* yellow */,
    highlight: false,
    highlightColor: '#fed93f' /* lighter yellow */,
    audio: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3')
  },
  bottomRight: {
    name: 'bottomRight',
    value: '⬊',
    backgroundColor: '#094a8f' /* blue */,
    highlight: false,
    highlightColor: '#1c8cff' /* lighter blue */,
    audio: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
  }
})

export default pads
