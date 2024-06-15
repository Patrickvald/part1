const StatisticLine = ({data, text}) => {
  const rounded = Number(data.toFixed(3));
    if(text === 'positive'){
        return(
          <tr>
            <td>{text} </td> 
            <td>{rounded}%</td>
        </tr>
        )
    }
  return (
    <tr>
      <td>{text} </td> 
      <td>{rounded}</td>
    </tr>
  )
}

export default StatisticLine