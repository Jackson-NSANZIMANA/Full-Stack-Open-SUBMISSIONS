import React from 'react'

const NextAnecdoteButton = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

export default NextAnecdoteButton