const Card = ({ day }) => {
  console.log(day)
  return (
    <div className='card-container'>
      <p>{day.weather}</p>
      <p>{day.temp2m.max}</p>
      <p>{day.temp2m.min}</p>
      <p>XXX</p>
    </div>
  )
}

export default Card
