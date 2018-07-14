const facilities = require('../models').facilities;

module.exports = {
    create_basic(basic_id, data) {
        facilities
        .create({
            equipments_type_basic_id: basic_id,
            facilities_name: data.facilities_name,
            facilities_desc: data.facilities_desc,
            facilities_sn: data.facilities_sn,
            facilities_qrcode: data.facilities_qrcode,
            facilities_status: data.facilities_status,
            facilities_loc: data.facilities_loc,
        })
        .catch(error => console.log(error));
    },
    
    create_medium(medium_id, data) {
        facilities
        .create({
            equipments_type_medium_id: medium_id,
            facilities_name: data.facilities_name,
            facilities_desc: data.facilities_desc,
            facilities_sn: data.facilities_sn,
            facilities_qrcode: data.facilities_qrcode,
            facilities_status: data.facilities_status,
            facilities_loc: data.facilities_loc,
        })
        .catch(error => console.log(error));
    }, 

    create_high(high_id, data) {
        facilities
        .create({
            equipments_type_high_id: high_id,
            facilities_name: data.facilities_name,
            facilities_desc: data.facilities_desc,
            facilities_sn: data.facilities_sn,
            facilities_qrcode: data.facilities_qrcode,
            facilities_status: data.facilities_status,
            facilities_loc: data.facilities_loc,
        })
        .catch(error => console.log(error));
    }
};