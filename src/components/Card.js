import { getIcon, convertUnit } from '../helpers'

const Card = ({ day, index, unit }) => {
  // console.log(day.date.toString())
  const date = day.date.toString()
  const year = date.slice(0, 4)
  const month = date.slice(4, 6)
  const dayOfTheMonth = date.slice(6, 8)
  // console.log(date, year, month, dayOfTheMonth)
  const formattedDate = new Date(year, month - 1, dayOfTheMonth)
    .toDateString()
    .slice(0, 3)
  // console.log(formattedDate)

  const unitShorthand =
    unit === 'kelvin'
      ? unit.slice(0, 1).toUpperCase()
      : '°' + unit.slice(0, 1).toUpperCase()

  return (
    <div className='card-container'>
      <h3>{index === 0 ? 'Today' : formattedDate}</h3>
      <div className='icon-container'>
        {day.weather && getIcon(day.weather)}
      </div>
      <p>{day.weather}</p>
      <div className='min-max-container'>
        <div className='max-container'>
          <p>max</p>
          <p>
            {convertUnit(unit, day.temp2m.max)} {unitShorthand}{' '}
          </p>
        </div>
        <div className='min-container'>
          <p>min</p>
          <p>
            {convertUnit(unit, day.temp2m.min)} {unitShorthand}{' '}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
