import React, { useState } from 'react'
import Button from './components/Button'
import Statistics from './components/Statistics'
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleGood = () => {
    setGood(good + 1)

  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
  }
  return (
    <>
      {/* header */}
      <h1>give feedback</h1>
      {/* buttons */}
      <Button handleClick={handleGood} text={'good'} />
      <Button handleClick={handleNeutral} text={'neutral'} />
      <Button handleClick={handleBad} text={'bad'} />
      {/* content */}
      <Statistics goods={good} neutrals={neutral} bads={bad} />
    </>
  )
}

export default App