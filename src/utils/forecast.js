const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=2ca0bfc5c5e44d3e6405a5008ca91de7&query=' + latitude + ',' + longitude

    request({url, json: true},(error, {body}) => {

    if(error){
       callback('Unable to connect to weather services', undefined)
    }
    else if(body.error){
        callback('Unable to find location', undefined)
    }
    else{
        callback(undefined, body.current.weather_descriptions[0] 
                            + ' It is currently ' + body.current.temperature + '°C '
                            + ' Precipitation ' + body.current.precip +'%'
                            + ' Feels like  : ' + body.current.feelslike + ' degrees'
                            + ' Wind speed : ' + body.current.wind_speed + 'km/hr'
                            + ' Wind Direction : ' + body.current.wind_dir
                            + ' Humidity : ' + body.current.humidity +'%'
                            + ' Is Day : ' + body.current.is_day 
                            + ' Observation Time : ' + body.current.observation_time
        ) 
    }
})    
}

module.exports = forecast

// Destructuring response object 
