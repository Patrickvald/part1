import StatisticLine from "./StatisticLine"

const Statistics = ({good, neutral, bad, all, average, positive}) => {
    if(good === 0 && neutral === 0 && bad === 0){
        return (
            <div>The app does not have any feedback</div>
        )
    }
  return (
    <>
        <h3>Statistics</h3>
        <table>
          <thead>
            <tr>
              <td>Content</td>
              <td>Value</td>
            </tr>
          </thead>  
          <tbody>
            <StatisticLine data={good} text='good'/>
            <StatisticLine data={neutral} text='neutral'/>
            <StatisticLine data={bad} text='bad'/>
            <StatisticLine data={all} text='all'/>
            <StatisticLine data={average} text='average'/>
            <StatisticLine data={positive} text='positive'/>
          </tbody>
        </table>
    </>
  )
}

export default Statistics