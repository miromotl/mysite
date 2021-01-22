let getjson = require('get-json');

module.exports = async () => {
    
    return getjson("https://restcountries.eu/rest/v2/alpha/gb")
    .then(country => {
        return getjson("https://api.covid19api.com/total/dayone/country/uk")
        .then(covid19 => {
            return { 
                'data': covid19,
                'population': country.population
            };
        })
        .catch(error => {
            return error;
        });
    })
    .catch(error => {
        return error;
    });
};
