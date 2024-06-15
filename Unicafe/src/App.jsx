import { useState } from 'react'
import Button from './components/Button';
import Statistics from './components/Statistics';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const handleClickGood = ()=>{
    const updatedGood = good +1;
    const newAll = updatedGood+neutral+bad;
    setGood(updatedGood)
    setAll(newAll)
    setAverage(doingAverage(updatedGood, neutral, bad))
    setPositive(updatedGood/newAll*100)
  }
  const handleClickNeutral = ()=>{
    const updatedNeutral = neutral +1;
    const newAll = good + updatedNeutral + bad;
    setNeutral(updatedNeutral)
    setAll(newAll)
    setAverage(doingAverage(good, updatedNeutral, bad))
    setPositive(good/newAll*100)
  }
  const handleClickBad = ()=>{
    const updatedBad = bad +1;
    const newAll = good+neutral+updatedBad;
    setBad(updatedBad)
    setAll(newAll)
    setAverage(doingAverage(good, neutral, updatedBad))
    setPositive(good/newAll*100)    
  }

  const doingAverage = (good, neutral, bad)=>{
    const aGood = good;
    const aNeutral = neutral*0;
    const aBad = bad*-1;
    const ave = (aGood + aNeutral + aBad)/(good + neutral + bad);
    return ave;

  }
  return (
    <>
      <h3><strong>Give feedback</strong></h3>
      <Button handleClick={handleClickGood} text='good'/>
      <Button handleClick={handleClickNeutral} text='neutral'/>
      <Button handleClick={handleClickBad} text='bad'/>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
    </>
  )
}

export default App
