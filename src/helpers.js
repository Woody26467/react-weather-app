const getIcon = weatherType => {
  let weatherStyle

  switch (weatherType) {
    case 'cloudyday':
      weatherStyle = <i className='fas fa-cloud-rain'></i>
      break
    default:
      weatherStyle = <i className='fas fa-sun'></i>
  }
  return weatherStyle
}
