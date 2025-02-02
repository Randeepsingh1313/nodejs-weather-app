const request = require('request')

// Geocoding App using Mapbox API services
// Adddress => API => Long/Lat 
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoicmFuZGVlcHNpbmdoMTMiLCJhIjoiY2t5NTI4cmgzMDE2aDJvcW10dG44MTRudCJ9.HWMOfkD_HRLsChTPKkV6YA&limit=1'

    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to find location services!!!!', undefined )
        }
        else if(body.features.length === 0){
            callback('Unable to find location. Try another search', undefined )
        }
        else{
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })

            console.log(body);
        }
    })
}

module.exports = geocode

