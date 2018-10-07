const request = require('request');

module.exports = {
    update_availability(data) {
        let payload = {
            'is_available': data.is_available
        };
        const url = 'http://localhost:3002/' + data.hospital_id + '/' + data.equipment_id + '/equipment/';

        request.put({
            url: url,
            json: payload
        }, (error, response, body) => {
            console.log('error:', error);
            console.log('status_code:', response && response.statusCode);
            console.log('body:', body);
        });
    }
};