import '@fortawesome/fontawesome-free/js/all.js'

const TodayDisplay = ({ today, location }) => {
  console.log('ON THE TODAYDISPLAY', today, location)
  return (
    <div className='today-container'>
      <div className='info-container'>
        <h1>Today's forecast</h1>
        <h3>
          For the location of lng {location?.longitude} and lat{' '}
          {location?.latitude}
        </h3>
      </div>
      <div className='info-container'>ICON</div>
    </div>
  )
}

export default TodayDisplay
