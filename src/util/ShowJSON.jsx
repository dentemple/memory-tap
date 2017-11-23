import React from 'react'

const ShowJSON = ({ json }) => {
  const style = {
    backgroundColor: '#f3f3f3',
    color: 'black',
    minHeight: 60,
    margin: 40,
    padding: 10,
    width: '70vh',
    fontFamily: 'monospace',
    fontSize: 14,
    borderRadius: 5
  }
  return <pre style={style}>{JSON.stringify(json, null, 2)}</pre>
}

export default ShowJSON
