let getjson = require('get-json');

module.exports = async () => {
    
    return getjson("http://api.open-notify.org/astros.json")
    .then(response => {
        //console.log(response);
        return response;
    })
    .catch(error => {
        return error;
    });
};

