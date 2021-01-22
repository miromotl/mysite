    let getjson = require('get-json');

    module.exports = async () => {
        
        return getjson("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson")
        .then(response => {
            //console.log(response);
            return response;
        })
        .catch(error => {
            return error;
        });
    };

