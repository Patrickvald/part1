const Total = ({course}) => {
    const array = course.parts;
    const sum = array.reduce((sum,part)=> sum + part.exercises,0)
  return (
    <>
        <p>Number of exercises: {sum}</p>
    </>

  )
}

export default Total