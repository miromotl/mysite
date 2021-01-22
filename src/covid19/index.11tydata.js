let getjson = require('get-json');

module.exports = async () => {
    
    return getjson("https://api.covid19api.com/summary")
    .then(response => {
        //console.log(response);
        return { 'summary': response };
    })
    .catch(error => {
        return error;
    });
};

