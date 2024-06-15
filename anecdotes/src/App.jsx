import { useState } from 'react'
import Button from './components/Button'

function App() {
  
  const [selected, setSelected] = useState(-1) 
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [points, setPoints] = useState(new Array(8).fill(0));
 
  const randomGenerator = ()=>{
    let number = Math.floor(Math.random()*10)
    if (number === 9) {
      number = number-2

    }
    if (number === 8) {
      number = number-1

    }
    setSelected(number);
  }

  const handleClickVote = ()=>{
    const newPoints = [...points];
    newPoints[selected] +=1;
    setPoints(newPoints);
  }

  const mostVoted = points.reduce((bigger, current, index) => {
    if (current > bigger.value) {
      return { value: current, index: index };
    } else return bigger;
  }, { value: -Infinity, index: -1 });//Initial values, they had to be negatives to be smaller than the current value

  return (
    <>
      <p>Anecdote of the day</p>
      {anecdotes[selected]}
      <p>This anecdote has: {points[selected]}</p>
      <Button handleClick={handleClickVote} text = 'Vote'/>
      <Button handleClick={randomGenerator} text = 'Next anecdote'/>
      <p>Anecdote with most votes</p>
      <p>{anecdotes[mostVoted.index]}</p>
      <p>This anecdote has: {mostVoted.value}</p>
    </>
  )
}

export default App
