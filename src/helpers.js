const getIcon = weatherType => {
  let weatherStyle

  switch (weatherType) {
    case 'lightrainday':
      weatherStyle = <i className='fa-solid fa-cloud-rain'></i>
      break
    case 'clear':
      weatherStyle = <i className='fas fa-sun'></i>
      break
    case 'mcloudy':
      weatherStyle = <i className='fas fa-cloud'></i>
      break
    case 'cloudy':
      weatherStyle = <i className='fa-solid fa-cloud'></i>
      break
    case 'pcloudy':
      weatherStyle = <i className='fa-solid fa-cloud'></i>
      break
    case 'snow':
      weatherStyle = <i className='fa-solid fa-snowflake'></i>
      break
    case 'ts':
      weatherStyle = <i className='fas fa-bolt'></i>
      break
    case 'lightrain':
      weatherStyle = <i className='fa-solid fa-cloud-rain'></i>
      break
    case 'rainnight':
      weatherStyle = <i className='fa-solid fa-cloud-rain'></i>
      break
    case 'cloudyday':
      weatherStyle = <i className='fa-solid fa-cloud'></i>
      break
    case 'rain':
      weatherStyle = <i className='fas fa-droplet'></i>
      break
    case 'isshower':
      weatherStyle = (
        <i className='fa-solid fa-cloud-showers-heavy'></i>
      )
      break

    default:
      weatherStyle = <i className='fas fa-sun'></i>
  }
  return weatherStyle
}

const convertToFahrenheit = celcius => {
  return (celcius * 9) / 5 + 32
}

const convertToKelvin = celcius => {
  return celcius + 273.15
}

const convertUnit = (unit, currentTemp) => {
  let temp
  switch (unit) {
    case 'celcius':
      temp = currentTemp
      break
    case 'fahrenheit':
      temp = convertToFahrenheit(currentTemp)
      break
    case 'kelvin':
      temp = convertToKelvin(currentTemp)
      break
    default:
      temp = ''
  }
  return temp
}

export { getIcon, convertUnit }
