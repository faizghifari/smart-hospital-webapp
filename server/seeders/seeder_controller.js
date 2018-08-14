const states = require('../models').states;
const states_history = require('../models').states_history;
const hospitals = require('../models').hospitals;
const hospitals_history = require('../models').hospitals_history;
const department = require('../models').department;
const division = require('../models').division;
const roles = require('../models').roles;
const users = require('../models').users;
const buildings = require('../models').buildings;
const buildings_history = require('../models').buildings_history;
const levels = require('../models').levels;
const levels_history = require('../models').levels_history;
const rooms = require('../models').rooms;
const rooms_history = require('../models').rooms_history;
const rooms_productivity = require('../models').rooms_productivity;
const rooms_safety = require('../models').rooms_safety;
const rooms_security = require('../models').rooms_security;
const manufacturers = require('../models').manufacturers;
const beds = require('../models').beds;
const beds_history = require('../models').beds_history;
const beds_productivity = require('../models').beds_productivity;
const beds_safety = require('../models').beds_safety;
const beds_security = require('../models').beds_security;
const apparatus_type = require('../models').apparatus_type;
const apparatus = require('../models').apparatus;
const spare_part_type = require('../models').spare_part_type;
const spare_part = require('../models').spare_part;
const device = require('../models').device;
const medical_equipments_type = require('../models').medical_equipments_type;
const medical_equipments = require('../models').medical_equipments;
const medical_equipments_history = require('../models').medical_equipments_history;
const medical_equipments_productivity = require('../models').medical_equipments_productivity;
const medical_equipments_safety = require('../models').medical_equipments_safety;
const medical_equipments_security = require('../models').medical_equipments_security;
const medical_equipments_security_history = require('../models').medical_equipments_security_history;
const breakdown_reports = require('../models').breakdown_reports;
const maintenance_qty_task = require('../models').maintenance_qty_task;
const maintenance_ppm = require('../models').maintenance_ppm;
const maintenance_work_order = require('../models').maintenance_work_order;
const maintenance_cm = require('../models').maintenance_cm;
const disposal_request = require('../models').disposal_request;
const disposal_report = require('../models').disposal_report;
const disposal_equipment = require('../models').disposal_equipment;
const medical_equipments_booking = require('../models').medical_equipments_booking;
const suppliers = require('../models').suppliers;
const open_booking = require('../models').open_bookings;
const adverse_event_report = require('../models').adverse_event_reports;


module.exports = {
    seed() {
        states
            .create({
                state_name: 'UTM',
                count_hospitals: 3,
                current_safety: 3,
                current_security: 3,
                current_productivity: 3   
            }),
        states
            .create({
                state_name: 'Taman U',
                count_hospitals: 3,
                current_safety: 2,
                current_security: 3,
                current_productivity: 1
            }),
        states
            .create({
                state_name: 'Sri Pulai',
                count_hospitals: 3,
                current_safety: 1,
                current_security: 1,
                current_productivity: 1
            }),

        states_history
            .create({
                state_id: 1,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1 
            }),
        states_history
            .create({
                state_id: 2,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        states_history
            .create({
                state_id: 3,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1 
            }),

        hospitals
            .create({
                hospital_name: 'HOSPITAL UTM 1',
                count_buildings: 3,
                count_rooms: 3,
                current_safety: 3,
                current_security: 3,
                current_productivity: 3,
                state_id: 1,
                dep_code: 1
            }),
        hospitals
            .create({
                hospital_name: 'HOSPITAL UTM 2',
                count_buildings: 3,
                count_rooms: 3,
                current_safety: 2,
                current_security: 3,
                current_productivity: 1,
                state_id: 1,
                dep_code: 2
            }),
        hospitals
            .create({
                hospital_name: 'HOSPITAL UTM 3',
                count_buildings: 3,
                count_rooms: 3,
                current_safety: 1,
                current_security: 1,
                current_productivity: 1,
                state_id: 1,
                dep_code: 3
            }),
        hospitals
            .create({
                hospital_name: 'HOSPITAL TAMAN U 1',
                count_buildings: 3,
                count_rooms: 3,
                current_safety: 3,
                current_security: 3,
                current_productivity: 3,
                state_id: 2,
                dep_code: 1
            }),
        hospitals
            .create({
                hospital_name: 'HOSPITAL TAMAN U 2',
                count_buildings: 3,
                count_rooms: 3,
                current_safety: 2,
                current_security: 3,
                current_productivity: 1,
                state_id: 2,
                dep_code: 2
            }),
        hospitals
            .create({
                hospital_name: 'HOSPITAL TAMAN U 3',
                count_buildings: 3,
                count_rooms: 3,
                current_safety: 1,
                current_security: 1,
                current_productivity: 1,
                state_id: 2,
                dep_code: 3
            }),
        hospitals
            .create({
                hospital_name: 'HOSPITAL SRI PULAI 1',
                count_buildings: 3,
                count_rooms: 3,
                current_safety: 3,
                current_security: 3,
                current_productivity: 3,
                state_id: 3,
                dep_code: 1
            }),
        hospitals
            .create({
                hospital_name: 'HOSPITAL SRI PULAI 2',
                count_buildings: 3,
                count_rooms: 3,
                current_safety: 2,
                current_security: 3,
                current_productivity: 1,
                state_id: 3,
                dep_code: 2
            }),
        hospitals
            .create({
                hospital_name: 'HOSPITAL SRI PULAI 3',
                count_buildings: 3,
                count_rooms: 3,
                current_safety: 1,
                current_security: 1,
                current_productivity: 1,
                state_id: 3,
                dep_code: 3
            }),

        hospitals_history
            .create({
                hospital_id: 1,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        hospitals_history
            .create({
                hospital_id: 2,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        hospitals_history
            .create({
                hospital_id: 3,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        hospitals_history
            .create({
                hospital_id: 4,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        hospitals_history
            .create({
                hospital_id: 5,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        hospitals_history
            .create({
                hospital_id: 6,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        hospitals_history
            .create({
                hospital_id: 7,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        hospitals_history
            .create({
                hospital_id: 8,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        hospitals_history
            .create({
                hospital_id: 9,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        department
            .create({
                dep_name: 'Department 1',
                dep_desc: 'Desc department 1',
                hospital_id: 1
            }),
        department
            .create({
                dep_name: 'Department 2',
                dep_desc: 'Desc department 2',
                hospital_id: 1
            }),
        department
            .create({
                dep_name: 'Department 3',
                dep_desc: 'Desc department 3',
                hospital_id: 1  
            }),
        department
            .create({
                dep_name: 'Department 1',
                dep_desc: 'Desc department 1',
                hospital_id: 2
            }),
        department
            .create({
                dep_name: 'Department 2',
                dep_desc: 'Desc department 2',
                hospital_id: 2
            }),
        department
            .create({
                dep_name: 'Department 3',
                dep_desc: 'Desc department 3',
                hospital_id: 2
            }),
        department
            .create({
                dep_name: 'Department 1',
                dep_desc: 'Desc department 1',
                hospital_id: 3
            }),
        department
            .create({
                dep_name: 'Department 2',
                dep_desc: 'Desc department 2',
                hospital_id: 3
            }),
        department
            .create({
                dep_name: 'Department 3',
                dep_desc: 'Desc department 3',
                hospital_id: 3
            }),
        department
            .create({
                dep_name: 'Department 1',
                dep_desc: 'Desc department 1',
                hospital_id: 4 
            }),
        department
            .create({
                dep_name: 'Department 2',
                dep_desc: 'Desc department 2',
                hospital_id: 4
            }),
        department
            .create({
                dep_name: 'Department 3',
                dep_desc: 'Desc department 3',
                hospital_id: 4  
            }),
        department
            .create({
                dep_name: 'Department 1',
                dep_desc: 'Desc department 1',
                hospital_id: 5
            }),
        department
            .create({
                dep_name: 'Department 2',
                dep_desc: 'Desc department 2',
                hospital_id: 5  
            }),
        department
            .create({
                dep_name: 'Department 3',
                dep_desc: 'Desc department 3',
                hospital_id: 5 
            }),
        department
            .create({
                dep_name: 'Department 1',
                dep_desc: 'Desc department 1',
                hospital_id: 6
            }),
        department
            .create({
                dep_name: 'Department 2',
                dep_desc: 'Desc department 2',
                hospital_id: 6
            }),
        department
            .create({
                dep_name: 'Department 3',
                dep_desc: 'Desc department 3',
                hospital_id: 6
            }),
        department
            .create({
                dep_name: 'Department 1',
                dep_desc: 'Desc department 1',
                hospital_id: 7
            }),
        department
            .create({
                dep_name: 'Department 2',
                dep_desc: 'Desc department 2',
                hospital_id: 7
            }),
        department
            .create({
                dep_name: 'Department 3',
                dep_desc: 'Desc department 3',
                hospital_id: 7 
            }),
        department
            .create({
                dep_name: 'Department 1',
                dep_desc: 'Desc department 1',
                hospital_id: 8
            }),
        department
            .create({
                dep_name: 'Department 2',
                dep_desc: 'Desc department 2',
                hospital_id: 8
            }),
        department
            .create({
                dep_name: 'Department 3',
                dep_desc: 'Desc department 3',
                hospital_id: 8
            }),
        department
            .create({
                dep_name: 'Department 1',
                dep_desc: 'Desc department 1',
                hospital_id: 9
            }),
        department
            .create({
                dep_name: 'Department 2',
                dep_desc: 'Desc department 2',
                hospital_id: 9
            }),
        department
            .create({
                dep_name: 'Department 3',
                dep_desc: 'Desc department 3',
                hospital_id: 9
            }),
        division
            .create({
                div_name: 'Division 1',
                div_desc: 'Desc division 1',
                hospital_id: 1,
                dep_id: 1
            }),
        division
            .create({
                div_name: 'Division 2',
                div_desc: 'Desc division 2',
                hospital_id: 1,
                dep_id: 1
            }),
        division
            .create({
                div_name: 'Division 3',
                div_desc: 'Desc division 3',
                hospital_id: 1,
                dep_id: 1
            }),
        division
            .create({
                div_name: 'Division 1',
                div_desc: 'Desc division 1',
                hospital_id: 1,
                dep_id: 2
            }),
        division
            .create({
                div_name: 'Division 2',
                div_desc: 'Desc division 2',
                hospital_id: 1,
                dep_id: 2
            }),
        division
            .create({
                div_name: 'Division 3',
                div_desc: 'Desc division 3',
                hospital_id: 1,
                dep_id: 2
            }),
        division
            .create({
                div_name: 'Division 1',
                div_desc: 'Desc division 1',
                hospital_id: 1,
                dep_id: 3
            }),
        division
            .create({
                div_name: 'Division 2',
                div_desc: 'Desc division 2',
                hospital_id: 1,
                dep_id: 3
            }),
        division
            .create({
                div_name: 'Division 3',
                div_desc: 'Desc division 3',
                hospital_id: 1,
                dep_id: 3
            }),
        division
            .create({
                div_name: 'Division 1',
                div_desc: 'Desc division 1',
                hospital_id: 2,
                dep_id: 4
            }),
        division
            .create({
                div_name: 'Division 2',
                div_desc: 'Desc division 2',
                hospital_id: 2,
                dep_id: 4
            }),
        division
            .create({
                div_name: 'Division 3',
                div_desc: 'Desc division 3',
                hospital_id: 2,
                dep_id: 4
            }),
        division
            .create({
                div_name: 'Division 1',
                div_desc: 'Desc division 1',
                hospital_id: 2,
                dep_id: 5
            }),
        division
            .create({
                div_name: 'Division 2',
                div_desc: 'Desc division 2',
                hospital_id: 2,
                dep_id: 5
            }),
        division
            .create({
                div_name: 'Division 3',
                div_desc: 'Desc division 3',
                hospital_id: 2,
                dep_id: 5
            }),
        division
            .create({
                div_name: 'Division 1',
                div_desc: 'Desc division 1',
                hospital_id: 2,
                dep_id: 6
            }),
        division
            .create({
                div_name: 'Division 2',
                div_desc: 'Desc division 2',
                hospital_id: 2,
                dep_id: 6
            }),
        division
            .create({
                div_name: 'Division 3',
                div_desc: 'Desc division 3',
                hospital_id: 2,
                dep_id: 6
            }),
        division
            .create({
                div_name: 'Division 1',
                div_desc: 'Desc division 1',
                hospital_id: 3,
                dep_id: 7
            }),
        division
            .create({
                div_name: 'Division 2',
                div_desc: 'Desc division 2',
                hospital_id: 3,
                dep_id: 7
            }),
        division
            .create({
                div_name: 'Division 3',
                div_desc: 'Desc division 3',
                hospital_id: 3,
                dep_id: 7
            }),
        division
            .create({
                div_name: 'Division 1',
                div_desc: 'Desc division 1',
                hospital_id: 3,
                dep_id: 8
            }),
        division
            .create({
                div_name: 'Division 2',
                div_desc: 'Desc division 2',
                hospital_id: 3,
                dep_id: 8
            }),
        division
            .create({
                div_name: 'Division 3',
                div_desc: 'Desc division 3',
                hospital_id: 3,
                dep_id: 8
            }),
        division
            .create({
                div_name: 'Division 1',
                div_desc: 'Desc division 1',
                hospital_id: 3,
                dep_id: 9
            }),
        division
            .create({
                div_name: 'Division 2',
                div_desc: 'Desc division 2',
                hospital_id: 3,
                dep_id: 9
            }),
        division
            .create({
                div_name: 'Division 3',
                div_desc: 'Desc division 3',
                hospital_id: 3,
                dep_id: 9
            }),
        division
            .create({
                div_name: 'Division 1',
                div_desc: 'Desc division 1',
                hospital_id: 4,
                dep_id: 10
            }),
        division
            .create({
                div_name: 'Division 2',
                div_desc: 'Desc division 2',
                hospital_id: 4,
                dep_id: 10
            }),
        division
            .create({
                div_name: 'Division 3',
                div_desc: 'Desc division 3',
                hospital_id: 4,
                dep_id: 10
            }),
        division
            .create({
                div_name: 'Division 1',
                div_desc: 'Desc division 1',
                hospital_id: 4,
                dep_id: 11
            }),
        division
            .create({
                div_name: 'Division 2',
                div_desc: 'Desc division 2',
                hospital_id: 4,
                dep_id: 11
            }),
        division
            .create({
                div_name: 'Division 3',
                div_desc: 'Desc division 3',
                hospital_id: 4,
                dep_id: 11
            }),
        division
            .create({
                div_name: 'Division 1',
                div_desc: 'Desc division 1',
                hospital_id: 4,
                dep_id: 12
            }),
        division
            .create({
                div_name: 'Division 2',
                div_desc: 'Desc division 2',
                hospital_id: 4,
                dep_id: 12
            }),
        division
            .create({
                div_name: 'Division 3',
                div_desc: 'Desc division 3',
                hospital_id: 4,
                dep_id: 12
            }),
        division
            .create({
                div_name: 'Division 1',
                div_desc: 'Desc division 1',
                hospital_id: 5,
                dep_id: 13
            }),
        division
            .create({
                div_name: 'Division 2',
                div_desc: 'Desc division 2',
                hospital_id: 5,
                dep_id: 13
            }),
        division
            .create({
                div_name: 'Division 3',
                div_desc: 'Desc division 3',
                hospital_id: 5,
                dep_id: 13
            }),
        division
            .create({
                div_name: 'Division 1',
                div_desc: 'Desc division 1',
                hospital_id: 5,
                dep_id: 14
            }),
        division
            .create({
                div_name: 'Division 2',
                div_desc: 'Desc division 2',
                hospital_id: 5,
                dep_id: 14
            }),
        division
            .create({
                div_name: 'Division 3',
                div_desc: 'Desc division 3',
                hospital_id: 5,
                dep_id: 14
            }),
        division
            .create({
                div_name: 'Division 1',
                div_desc: 'Desc division 1',
                hospital_id: 5,
                dep_id: 15
            }),
        division
            .create({
                div_name: 'Division 2',
                div_desc: 'Desc division 2',
                hospital_id: 5,
                dep_id: 15
            }),
        division
            .create({
                div_name: 'Division 3',
                div_desc: 'Desc division 3',
                hospital_id: 5,
                dep_id: 15
            }),
        division
            .create({
                div_name: 'Division 1',
                div_desc: 'Desc division 1',
                hospital_id: 6,
                dep_id: 16
            }),
        division
            .create({
                div_name: 'Division 2',
                div_desc: 'Desc division 2',
                hospital_id: 6,
                dep_id: 16
            }),
        division
            .create({
                div_name: 'Division 3',
                div_desc: 'Desc division 3',
                hospital_id: 6,
                dep_id: 16
            }),
        division
            .create({
                div_name: 'Division 1',
                div_desc: 'Desc division 1',
                hospital_id: 6,
                dep_id: 17
            }),
        division
            .create({
                div_name: 'Division 2',
                div_desc: 'Desc division 2',
                hospital_id: 6,
                dep_id: 17
            }),
        division
            .create({
                div_name: 'Division 3',
                div_desc: 'Desc division 3',
                hospital_id: 6,
                dep_id: 17
            }),
        division
            .create({
                div_name: 'Division 1',
                div_desc: 'Desc division 1',
                hospital_id: 6,
                dep_id: 18
            }),
        division
            .create({
                div_name: 'Division 2',
                div_desc: 'Desc division 2',
                hospital_id: 6,
                dep_id: 18
            }),
        division
            .create({
                div_name: 'Division 3',
                div_desc: 'Desc division 3',
                hospital_id: 6,
                dep_id: 18
            }),
        division
            .create({
                div_name: 'Division 1',
                div_desc: 'Desc division 1',
                hospital_id: 7,
                dep_id: 19
            }),
        division
            .create({
                div_name: 'Division 2',
                div_desc: 'Desc division 2',
                hospital_id: 7,
                dep_id: 19
            }),
        division
            .create({
                div_name: 'Division 3',
                div_desc: 'Desc division 3',
                hospital_id: 7,
                dep_id: 19
            }),
        division
            .create({
                div_name: 'Division 1',
                div_desc: 'Desc division 1',
                hospital_id: 7,
                dep_id: 20
            }),
        division
            .create({
                div_name: 'Division 2',
                div_desc: 'Desc division 2',
                hospital_id: 7,
                dep_id: 20
            }),
        division
            .create({
                div_name: 'Division 3',
                div_desc: 'Desc division 3',
                hospital_id: 7,
                dep_id: 20
            }),
        division
            .create({
                div_name: 'Division 1',
                div_desc: 'Desc division 1',
                hospital_id: 7,
                dep_id: 21
            }),
        division
            .create({
                div_name: 'Division 2',
                div_desc: 'Desc division 2',
                hospital_id: 7,
                dep_id: 21
            }),
        division
            .create({
                div_name: 'Division 3',
                div_desc: 'Desc division 3',
                hospital_id: 7,
                dep_id: 21
            }),
        division
            .create({
                div_name: 'Division 1',
                div_desc: 'Desc division 1',
                hospital_id: 8,
                dep_id: 22
            }),
        division
            .create({
                div_name: 'Division 2',
                div_desc: 'Desc division 2',
                hospital_id: 8,
                dep_id: 22
            }),
        division
            .create({
                div_name: 'Division 3',
                div_desc: 'Desc division 3',
                hospital_id: 8,
                dep_id: 2
            }),
        division
            .create({
                div_name: 'Division 1',
                div_desc: 'Desc division 1',
                hospital_id: 8,
                dep_id: 23
            }),
        division
            .create({
                div_name: 'Division 2',
                div_desc: 'Desc division 2',
                hospital_id: 8,
                dep_id: 23
            }),
        division
            .create({
                div_name: 'Division 3',
                div_desc: 'Desc division 3',
                hospital_id: 8,
                dep_id: 23
            }),
        division
            .create({
                div_name: 'Division 1',
                div_desc: 'Desc division 1',
                hospital_id: 8,
                dep_id: 24
            }),
        division
            .create({
                div_name: 'Division 2',
                div_desc: 'Desc division 2',
                hospital_id: 8,
                dep_id: 24
            }),
        division
            .create({
                div_name: 'Division 3',
                div_desc: 'Desc division 3',
                hospital_id: 8,
                dep_id: 24
            }),
        division
            .create({
                div_name: 'Division 1',
                div_desc: 'Desc division 1',
                hospital_id: 9,
                dep_id: 25
            }),
        division
            .create({
                div_name: 'Division 2',
                div_desc: 'Desc division 2',
                hospital_id: 9,
                dep_id: 25
            }),
        division
            .create({
                div_name: 'Division 3',
                div_desc: 'Desc division 3',
                hospital_id: 9,
                dep_id: 25
            }),
        division
            .create({
                div_name: 'Division 1',
                div_desc: 'Desc division 1',
                hospital_id: 9,
                dep_id: 26
            }),
        division
            .create({
                div_name: 'Division 2',
                div_desc: 'Desc division 2',
                hospital_id: 9,
                dep_id: 26
            }),
        division
            .create({
                div_name: 'Division 3',
                div_desc: 'Desc division 3',
                hospital_id: 9,
                dep_id: 26
            }),
        division
            .create({
                div_name: 'Division 1',
                div_desc: 'Desc division 1',
                hospital_id: 9,
                dep_id: 27
            }),
        division
            .create({
                div_name: 'Division 2',
                div_desc: 'Desc division 2',
                hospital_id: 9,
                dep_id: 27
            }),
        division
            .create({
                div_name: 'Division 3',
                div_desc: 'Desc division 3',
                hospital_id: 9,
                dep_id: 27
            }),

        roles
            .create({
                scope: 'moh'
            }),
        roles
            .create({
                scope: 'management'
            }),
        roles
            .create({
                scope: 'management_user'
            }),
        roles
            .create({
                scope: 'user'
            }),
        roles
            .create({
                scope: 'engineer'
            }),
        roles
            .create({
                scope: 'superuser'
            }),

        users
            .create({
                fullname: 'Muhammad Adib Arinanda',
                username: 'adibarinanda',
                staffId: '5115100111',
                email: 'arinanda.adib@gmail.com',
                role_id: 1,
                hospital_id: 1,
                dep_id: 1,
                div_id: 1
            }),
        users
            .create({
                fullname: 'Rezky Alamsyah',
                username: 'rezkyalamsyah',
                staffId: '5115100112',
                email: 'rezkyal2@gmail.com',
                role_id: 2,
                hospital_id: 1,
                dep_id: 1,
                div_id: 1
            }),
        users
            .create({
                fullname: 'Zahri Rusli',
                username: 'zahrirusli',
                staffId: '5115100113',
                email: 'zahri.rusli@gmail.com',
                role_id: 3,
                hospital_id: 1,
                dep_id: 1,
                div_id: 1
            }),
        users
            .create({
                fullname: 'Nancy Silvia Tanjung',
                username: 'nancysilvia',
                staffId: '5115100114',
                email: 'arinanda.adib@gmail.com',
                role_id: 4,
                hospital_id: 1,
                dep_id: 1,
                div_id: 1
            }),
        users
            .create({
                fullname: 'Faiz Haznitrama',
                username: 'faizhaznitrama',
                staffId: '5115100115',
                email: 'rezkyal2@gmail.com',
                role_id: 5,
                hospital_id: 1,
                dep_id: 1,
                div_id: 1
            }),
        users
            .create({
                fullname: 'Rumanda Engala Kapisa',
                username: 'rumandaengala',
                staffId: '5115100116',
                email: 'zahri.rusli@gmail.com',
                role_id: 6,
                hospital_id: 1,
                dep_id: 1,
                div_id: 1
            }),

        buildings
            .create({
                building_name: 'UTM 1',
                count_levels: 3,
                count_rooms: 3,
                current_safety: 3,
                current_security: 3,
                current_productivity: 3,
                pic_id: 1,
                hospital_id: 1
            }),
        buildings
            .create({
                building_name: 'UTM 2',
                count_levels: 3,
                count_rooms: 3,
                current_safety: 3,
                current_security: 3,
                current_productivity: 3,
                pic_id: 2,
                hospital_id: 1
            }),
        buildings
            .create({
                building_name: 'UTM 3',
                count_levels: 3,
                count_rooms: 3,
                current_safety: 3,
                current_security: 3,
                current_productivity: 3,
                pic_id: 3,
                hospital_id: 1
            }),
        buildings
            .create({
                building_name: 'Taman U 1',
                count_levels: 3,
                count_rooms: 3,
                current_safety: 3,
                current_security: 3,
                current_productivity: 3,
                pic_id: 1,
                hospital_id: 2
            }),
        buildings
            .create({
                building_name: 'Taman U 2',
                count_levels: 3,
                count_rooms: 3,
                current_safety: 3,
                current_security: 3,
                current_productivity: 3,
                pic_id: 2,
                hospital_id: 2
            }),
        buildings
            .create({
                building_name: 'Taman U 3',
                count_levels: 3,
                count_rooms: 3,
                current_safety: 3,
                current_security: 3,
                current_productivity: 3,
                pic_id: 3,
                hospital_id: 2
            }),
        buildings
            .create({
                building_name: 'Sri Pulai 1',
                count_levels: 3,
                count_rooms: 3,
                current_safety: 3,
                current_security: 3,
                current_productivity: 3,
                pic_id: 1,
                hospital_id: 3
            }),
        buildings
            .create({
                building_name: 'Sri Pulai 2',
                count_levels: 3,
                count_rooms: 3,
                current_safety: 3,
                current_security: 3,
                current_productivity: 3,
                pic_id: 2,
                hospital_id: 3
            }),
        buildings
            .create({
                building_name: 'Sri Pulai 3',
                count_levels: 3,
                count_rooms: 3,
                current_safety: 3,
                current_security: 3,
                current_productivity: 3,
                pic_id: 3,
                hospital_id: 3
            }),

        buildings_history
            .create({
                building_id: 1,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        buildings_history
            .create({
                building_id: 2,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        buildings_history
            .create({
                building_id: 3,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        buildings_history
            .create({
                building_id: 4,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        buildings_history
            .create({
                building_id: 5,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        buildings_history
            .create({
                building_id: 6,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        buildings_history
            .create({
                building_id: 7,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        buildings_history
            .create({
                building_id: 8,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        buildings_history
            .create({
                building_id: 9,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),

        levels
            .create({
                level_name: 'Aras 1',
                count_rooms: 3,
                current_safety: 3,
                current_security: 3,
                current_productivity: 3,
                pic_id: 1,
                building_id: 1,
                hospital_id: 1
            }),
        levels
            .create({
                level_name: 'Aras 2',
                count_rooms: 3,
                current_safety: 2,
                current_security: 3,
                current_productivity: 1,
                pic_id: 2,
                building_id: 1,
                hospital_id: 1
            }),
        levels
            .create({
                level_name: 'Aras 3',
                count_rooms: 3,
                current_safety: 1,
                current_security: 1,
                current_productivity: 1,
                pic_id: 3,
                building_id: 1,
                hospital_id: 1
            }),
        levels
            .create({
                level_name: 'Aras 1',
                count_rooms: 3,
                current_safety: 3,
                current_security: 3,
                current_productivity: 3,
                pic_id: 1,
                building_id: 4,
                hospital_id: 2
            }),
        levels
            .create({
                level_name: 'Aras 2',
                count_rooms: 3,
                current_safety: 2,
                current_security: 3,
                current_productivity: 1,
                pic_id: 2,
                building_id: 4,
                hospital_id: 2
            }),
        levels
            .create({
                level_name: 'Aras 3',
                count_rooms: 3,
                current_safety: 1,
                current_security: 1,
                current_productivity: 1,
                pic_id: 3,
                building_id: 4,
                hospital_id: 2
            }),
        levels
            .create({
                level_name: 'Aras 1',
                count_rooms: 3,
                current_safety: 3,
                current_security: 3,
                current_productivity: 3,
                pic_id: 1,
                building_id: 7,
                hospital_id: 3
            }),
        levels
            .create({
                level_name: 'Aras 2',
                count_rooms: 3,
                current_safety: 2,
                current_security: 3,
                current_productivity: 1,
                pic_id: 2,
                building_id: 7,
                hospital_id: 3
            }),
        levels
            .create({
                level_name: 'Aras 3',
                count_rooms: 3,
                current_safety: 1,
                current_security: 1,
                current_productivity: 1,
                pic_id: 3,
                building_id: 7,
                hospital_id: 3
            }),

        levels_history
            .create({
                level_id: 1,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        levels_history
            .create({
                level_id: 2,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        levels_history
            .create({
                level_id: 3,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        levels_history
            .create({
                level_id: 4,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        levels_history
            .create({
                level_id: 5,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        levels_history
            .create({
                level_id: 6,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        levels_history
            .create({
                level_id: 7,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        levels_history
            .create({
                level_id: 8,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        levels_history
            .create({
                level_id: 9,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),

        rooms
            .create({
                room_name: 'Room 1',
                room_sn: '1',
                latitude_low: 0,
                latitude_high: 7.5,
                longitude_low: 0,
                longitude_high: 13.36,
                current_safety: 3,
                current_security: 3,
                current_productivity: 3,
                pic_id: 1,
                level_id: 1,
                hospital_id: 1
            }),
        rooms
            .create({
                room_name: 'Room 2',
                room_sn: '2',
                latitude_low: 300,
                latitude_high: 600,
                longitude_low: 300,
                longitude_high: 600,
                current_safety: 2,
                current_security: 3,
                current_productivity: 1,
                pic_id: 1,
                level_id: 2,
                hospital_id: 1
            }),
        rooms
            .create({
                room_name: 'Room 3',
                room_sn: '3',
                latitude_low: 600,
                latitude_high: 900,
                longitude_low: 600,
                longitude_high: 900,
                current_safety: 1,
                current_security: 1,
                current_productivity: 1,
                pic_id: 1,
                level_id: 3,
                hospital_id: 1
            }),
        rooms
            .create({
                room_name: 'Room 1',
                room_sn: '4',
                latitude_low: 0,
                latitude_high: 300,
                longitude_low: 0,
                longitude_high: 300,
                current_safety: 3,
                current_security: 3,
                current_productivity: 3,
                pic_id: 2,
                level_id: 4,
                hospital_id: 1
            }),
        rooms
            .create({
                room_name: 'Room 2',
                room_sn: '5',
                latitude_low: 300,
                latitude_high: 600,
                longitude_low: 300,
                longitude_high: 600,
                current_safety: 2,
                current_security: 3,
                current_productivity: 1,
                pic_id: 2,
                level_id: 5,
                hospital_id: 1
            }),
        rooms
            .create({
                room_name: 'Room 3',
                room_sn: '6',
                latitude_low: 600,
                latitude_high: 900,
                longitude_low: 600,
                longitude_high: 900,
                current_safety: 1,
                current_security: 1,
                current_productivity: 1,
                pic_id: 2,
                level_id: 6,
                hospital_id: 1
            }),
        rooms
            .create({
                room_name: 'Room 1',
                room_sn: '7',
                latitude_low: 0,
                latitude_high: 300,
                longitude_low: 0,
                longitude_high: 300,
                current_safety: 3,
                current_security: 3,
                current_productivity: 3,
                pic_id: 3,
                level_id: 7,
                hospital_id: 1
            }),
        rooms
            .create({
                room_name: 'Room 2',
                room_sn: '8',
                latitude_low: 300,
                latitude_high: 600,
                longitude_low: 300,
                longitude_high: 600,
                current_safety: 2,
                current_security: 3,
                current_productivity: 1,
                pic_id: 3,
                level_id: 8,
                hospital_id: 1
            }),
        rooms
            .create({
                room_name: 'Room 3',
                room_sn: '9',
                latitude_low: 600,
                latitude_high: 900,
                longitude_low: 600,
                longitude_high: 900,
                current_safety: 1,
                current_security: 1,
                current_productivity: 1,
                pic_id: 3,
                level_id: 9,
                hospital_id: 1
            }),

        rooms_history
            .create({
                room_id: 1,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        rooms_history
            .create({
                room_id: 2,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        rooms_history
            .create({
                room_id: 3,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        rooms_history
            .create({
                room_id: 4,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        rooms_history
            .create({
                room_id: 5,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        rooms_history
            .create({
                room_id: 6,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        rooms_history
            .create({
                room_id: 7,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        rooms_history
            .create({
                room_id: 8,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        rooms_history
            .create({
                room_id: 9,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            });

        rooms_productivity
            .create({
                room_id: 1,
                count_usage: 10,
                standard_usage: 100
            }),
        rooms_productivity
            .create({
                room_id: 2,
                count_usage: 30,
                standard_usage: 100
            }),
        rooms_productivity
            .create({
                room_id: 3,
                count_usage: 50,
                standard_usage: 100
            }),
        rooms_productivity
            .create({
                room_id: 4,
                count_usage: 70,
                standard_usage: 100
            }),
        rooms_productivity
            .create({
                room_id: 5,
                count_usage: 90,
                standard_usage: 100
            }),
        rooms_productivity
            .create({
                room_id: 6,
                count_usage: 110,
                standard_usage: 100
            }),
        rooms_productivity
            .create({
                room_id: 7,
                count_usage: 130,
                standard_usage: 100
            }),
        rooms_productivity
            .create({
                room_id: 8,
                count_usage: 150,
                standard_usage: 100
            }),
        rooms_productivity
            .create({
                room_id: 9,
                count_usage: 170,
                standard_usage: 100
            }),

        rooms_safety
            .create({
                room_id: 1,
                current_temperature: 23,
                current_humidity: 10,
                current_smoke: 10,
                current_co: 10,
                current_methane: 10,
                current_lpg: 10,
                current_light: 10,
                current_led: 10,
                current_freq: 10
            }),
        rooms_safety
            .create({
                room_id: 2,
                current_temperature: 25,
                current_humidity: 10,
                current_smoke: 10,
                current_co: 10,
                current_methane: 10,
                current_lpg: 10,
                current_light: 10,
                current_led: 10,
                current_freq: 10
            }),
        rooms_safety
            .create({
                room_id: 3,
                current_temperature: 27,
                current_humidity: 10,
                current_smoke: 10,
                current_co: 10,
                current_methane: 10,
                current_lpg: 10,
                current_light: 10,
                current_led: 10,
                current_freq: 10
            }),
        rooms_safety
            .create({
                room_id: 4,
                current_temperature: 23,
                current_humidity: 10,
                current_smoke: 10,
                current_co: 10,
                current_methane: 10,
                current_lpg: 10,
                current_light: 10,
                current_led: 10,
                current_freq: 10
            }),
        rooms_safety
            .create({
                room_id: 5,
                current_temperature: 25,
                current_humidity: 10,
                current_smoke: 10,
                current_co: 10,
                current_methane: 10,
                current_lpg: 10,
                current_light: 10,
                current_led: 10,
                current_freq: 10
            }),
        rooms_safety
            .create({
                room_id: 6,
                current_temperature: 27,
                current_humidity: 10,
                current_smoke: 10,
                current_co: 10,
                current_methane: 10,
                current_lpg: 10,
                current_light: 10,
                current_led: 10,
                current_freq: 10
            }),
        rooms_safety
            .create({
                room_id: 7,
                current_temperature: 23,
                current_humidity: 10,
                current_smoke: 10,
                current_co: 10,
                current_methane: 10,
                current_lpg: 10,
                current_light: 10,
                current_led: 10,
                current_freq: 10
            }),
        rooms_safety
            .create({
                room_id: 8,
                current_temperature: 25,
                current_humidity: 10,
                current_smoke: 10,
                current_co: 10,
                current_methane: 10,
                current_lpg: 10,
                current_light: 10,
                current_led: 10,
                current_freq: 10
            }),
        rooms_safety
            .create({
                room_id: 9,
                current_temperature: 27,
                current_humidity: 10,
                current_smoke: 10,
                current_co: 10,
                current_methane: 10,
                current_lpg: 10,
                current_light: 10,
                current_led: 10,
                current_freq: 10
            }),

        rooms_security
            .create({
                room_id: 1,
                is_unauthorized: false,
                is_locked: true,
                is_pic_exist: true
            }),
        rooms_security
            .create({
                room_id: 2,
                is_unauthorized: false,
                is_locked: true,
                is_pic_exist: true
            }),
        rooms_security
            .create({
                room_id: 3,
                is_unauthorized: false,
                is_locked: true,
                is_pic_exist: true
            }),
        rooms_security
            .create({
                room_id: 4,
                is_unauthorized: false,
                is_locked: true,
                is_pic_exist: true
            }),
        rooms_security
            .create({
                room_id: 5,
                is_unauthorized: false,
                is_locked: true,
                is_pic_exist: true   
            }),
        rooms_security
            .create({
                room_id: 6,
                is_unauthorized: false,
                is_locked: true,
                is_pic_exist: true
            }),
        rooms_security
            .create({
                room_id: 7,
                is_unauthorized: false,
                is_locked: true,
                is_pic_exist: true
            }),
        rooms_security
            .create({
                room_id: 8,
                is_unauthorized: false,
                is_locked: true,
                is_pic_exist: true
            }),
        rooms_security
            .create({
                room_id: 9,
                is_unauthorized: false,
                is_locked: true,
                is_pic_exist: true  
            }),

        manufacturers
            .create({
                manufacturers_name: 'Manufacturers 1',
                manufacturers_desc: 'Desc manufacturers 1',
                manufacturers_sn: '1'
            }),
        manufacturers
            .create({
                manufacturers_name: 'Manufacturers 2',
                manufacturers_desc: 'Desc manufacturers 2',
                manufacturers_sn: '2'
            }),
        manufacturers
            .create({
                manufacturers_name: 'Manufacturers 3',
                manufacturers_desc: 'Desc manufacturers 3',
                manufacturers_sn: '3'
            }),
        manufacturers
            .create({
                manufacturers_name: 'Manufacturers 4',
                manufacturers_desc: 'Desc manufacturers 4',
                manufacturers_sn: '4'
            }),
        manufacturers
            .create({
                manufacturers_name: 'Manufacturers 5',
                manufacturers_desc: 'Desc manufacturers 5',
                manufacturers_sn: '5'
            }),
        manufacturers
            .create({
                manufacturers_name: 'Manufacturers 6',
                manufacturers_desc: 'Desc manufacturers 6',
                manufacturers_sn: '6'
            }),
        manufacturers
            .create({
                manufacturers_name: 'Manufacturers 7',
                manufacturers_desc: 'Desc manufacturers 7',
                manufacturers_sn: '7'
            }),
        manufacturers
            .create({
                manufacturers_name: 'Manufacturers 8',
                manufacturers_desc: 'Desc manufacturers 8',
                manufacturers_sn: '8'
            }),
        manufacturers
            .create({
                manufacturers_name: 'Manufacturers 9',
                manufacturers_desc: 'Desc manufacturers 9',
                manufacturers_sn: '9'
            }),

        beds
            .create({
                bed_name: 'Bed 1',
                bed_desc: 'Desc bed 1',
                bed_status: true,
                production_date: '2018-08-09 07:42:28',
                is_used: true,
                current_safety: 3,
                current_security: 3,
                current_productivity: 3,
                hospital_id: 1,
                room_id: 1,
                pic_id: 1
            }),
        beds
            .create({
                bed_name: 'Bed 2',
                bed_desc: 'Desc bed 2',
                bed_status: true,
                production_date: '2018-08-09 07:42:28',
                is_used: true,
                current_safety: 2,
                current_security: 3,
                current_productivity: 1,
                hospital_id: 1,
                room_id: 1,
                pic_id: 1
            }),
        beds
            .create({
                bed_name: 'Bed 3',
                bed_desc: 'Desc bed 3',
                bed_status: true,
                production_date: '2018-08-09 07:42:28',
                is_used: true,
                current_safety: 1,
                current_security: 1,
                current_productivity: 1,
                hospital_id: 1,
                room_id: 1,
                pic_id: 1
            }),
        beds
            .create({
                bed_name: 'Bed 1',
                bed_desc: 'Desc bed 1',
                bed_status: true,
                production_date: '2018-08-09 07:42:28',
                is_used: true,
                current_safety: 3,
                current_security: 3,
                current_productivity: 3,
                hospital_id: 2,
                room_id: 2,
                pic_id: 2
            }),
        beds
            .create({
                bed_name: 'Bed 2',
                bed_desc: 'Desc bed 2',
                bed_status: true,
                production_date: '2018-08-09 07:42:28',
                is_used: true,
                current_safety: 2,
                current_security: 3,
                current_productivity: 1,
                hospital_id: 2,
                room_id: 2,
                pic_id: 2
            }),
        beds
            .create({
                bed_name: 'Bed 3',
                bed_desc: 'Desc bed 3',
                bed_status: true,
                production_date: '2018-08-09 07:42:28',
                is_used: true,
                current_safety: 1,
                current_security: 1,
                current_productivity: 1,
                hospital_id: 2,
                room_id: 2,
                pic_id: 2
            }),
        beds
            .create({
                bed_name: 'Bed 1',
                bed_desc: 'Desc bed 1',
                bed_status: true,
                production_date: '2018-08-09 07:42:28',
                is_used: true,
                current_safety: 3,
                current_security: 3,
                current_productivity: 3,
                hospital_id: 3,
                room_id: 3,
                pic_id: 3
            }),
        beds
            .create({
                bed_name: 'Bed 2',
                bed_desc: 'Desc bed 2',
                bed_status: true,
                production_date: '2018-08-09 07:42:28',
                is_used: true,
                current_safety: 2,
                current_security: 3,
                current_productivity: 1,
                hospital_id: 3,
                room_id: 3,
                pic_id: 3
            }),
        beds
            .create({
                bed_name: 'Bed 3',
                bed_desc: 'Desc bed 3',
                bed_status: true,
                production_date: '2018-08-09 07:42:28',
                is_used: true,
                current_safety: 1,
                current_security: 1,
                current_productivity: 1,
                hospital_id: 3,
                room_id: 3,
                pic_id: 3
            }),

        beds_history
            .create({
                bed_id: 1,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        beds_history
            .create({
                bed_id: 2,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        beds_history
            .create({
                bed_id: 3,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        beds_history
            .create({
                bed_id: 4,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        beds_history
            .create({
                bed_id: 5,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        beds_history
            .create({
                bed_id: 6,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        beds_history
            .create({
                bed_id: 7,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        beds_history
            .create({
                bed_id: 8,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        beds_history
            .create({
                bed_id: 9,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),

        beds_productivity
            .create({
                bed_id: 1,
                count_usage: 10,
                standard_usage: 100
            }),
        beds_productivity
            .create({
                bed_id: 2,
                count_usage: 30,
                standard_usage: 100
            }),
        beds_productivity
            .create({
                bed_id: 3,
                count_usage: 50,
                standard_usage: 100
            }),
        beds_productivity
            .create({
                bed_id: 4,
                count_usage: 70,
                standard_usage: 100
            }),
        beds_productivity
            .create({
                bed_id: 5,
                count_usage: 90,
                standard_usage: 100
            }),
        beds_productivity
            .create({
                bed_id: 6,
                count_usage: 110,
                standard_usage: 100
            }),
        beds_productivity
            .create({
                bed_id: 7,
                count_usage: 130,
                standard_usage: 100
            }),
        beds_productivity
            .create({
                bed_id: 8,
                count_usage: 150,
                standard_usage: 100
            }),
        beds_productivity
            .create({
                bed_id: 9,
                count_usage: 170,
                standard_usage: 100
            }),

        beds_safety
            .create({
                bed_id: 1,
                bed_age: 10,
                last_maintenance_date: '2018-08-09 07:42:28',
                standard_maintenance: 100,
                is_reported: false
            }),
        beds_safety
            .create({
                bed_id: 2,
                bed_age: 30,
                last_maintenance_date: '2018-08-09 07:42:28',
                standard_maintenance: 100,
                is_reported: false
            }),
        beds_safety
            .create({
                bed_id: 3,
                bed_age: 50,
                last_maintenance_date: '2018-08-09 07:42:28',
                standard_maintenance: 100,
                is_reported: false
            }),
        beds_safety
            .create({
                bed_id: 4,
                bed_age: 70,
                last_maintenance_date: '2018-08-09 07:42:28',
                standard_maintenance: 100,
                is_reported: false
            }),
        beds_safety
            .create({
                bed_id: 5,
                bed_age: 90,
                last_maintenance_date: '2018-08-09 07:42:28',
                standard_maintenance: 100,
                is_reported: false
            }),
        beds_safety
            .create({
                bed_id: 6,
                bed_age: 110,
                last_maintenance_date: '2018-08-09 07:42:28',
                standard_maintenance: 100,
                is_reported: false
            }),
        beds_safety
            .create({
                bed_id: 7,
                bed_age: 130,
                last_maintenance_date: '2018-08-09 07:42:28',
                standard_maintenance: 100,
                is_reported: false
            }),
        beds_safety
            .create({
                bed_id: 8,
                bed_age: 150,
                last_maintenance_date: '2018-08-09 07:42:28',
                standard_maintenance: 100,
                is_reported: false
            }),
        beds_safety
            .create({
                bed_id: 9,
                bed_age: 170,
                last_maintenance_date: '2018-08-09 07:42:28',
                standard_maintenance: 100,
                is_reported: false
            }),

        beds_security
            .create({
                bed_id: 1,
                is_room_locked: false,
                room_id: 1,
                pic_id: 1
            }),
        beds_security
            .create({
                bed_id: 2,
                is_room_locked: false,
                room_id: 1,
                pic_id: 1
            }),
        beds_security
            .create({
                bed_id: 3,
                is_room_locked: false,
                room_id: 1,
                pic_id: 1
            }),
        beds_security
            .create({
                bed_id: 4,
                is_room_locked: false,
                room_id: 2,
                pic_id: 2
            }),
        beds_security
            .create({
                bed_id: 5,
                is_room_locked: false,
                room_id: 2,
                pic_id: 2
            }),
        beds_security
            .create({
                bed_id: 6,
                is_room_locked: false,
                room_id: 2,
                pic_id: 2
            }),
        beds_security
            .create({
                bed_id: 7,
                is_room_locked: false,
                room_id: 3,
                pic_id: 3
            }),
        beds_security
            .create({
                bed_id: 8,
                is_room_locked: false,
                room_id: 3,
                pic_id: 3
            }),
        beds_security
            .create({
                bed_id: 9,
                is_room_locked: false,
                room_id: 3,
                pic_id: 3
            }),

        apparatus_type
            .create({
                type_name: 'Type 1',
                type_desc: 'Desc type 1'
            }),
        apparatus_type
            .create({
                type_name: 'Type 2',
                type_desc: 'Desc type 2'
            }),
        apparatus_type
            .create({
                type_name: 'Type 3',
                type_desc: 'Desc type 3'
            }),

        apparatus
            .create({
                apparatus_name: 'Apparatus 1',
                apparatus_desc: 'Desc apparatus 1',
                apparatus_sn: '1',
                apparatus_calibration_due_on: '2018-08-09',
                apparatus_type_id: '1',
                hospital_id: '1'
            }),
        apparatus
            .create({
                apparatus_name: 'Apparatus 2',
                apparatus_desc: 'Desc apparatus 2',
                apparatus_sn: '2',
                apparatus_calibration_due_on: '2018-08-09',
                apparatus_type_id: '1',
                hospital_id: '1'
            }),
        apparatus
            .create({
                apparatus_name: 'Apparatus 3',
                apparatus_desc: 'Desc apparatus 3',
                apparatus_sn: '3',
                apparatus_calibration_due_on: '2018-08-09',
                apparatus_type_id: '1',
                hospital_id: '1'
            }),
        apparatus
            .create({
                apparatus_name: 'Apparatus 1',
                apparatus_desc: 'Desc apparatus 1',
                apparatus_sn: '4',
                apparatus_calibration_due_on: '2018-08-09',
                apparatus_type_id: '2',
                hospital_id: '2'
            }),
        apparatus
            .create({
                apparatus_name: 'Apparatus 2',
                apparatus_desc: 'Desc apparatus 2',
                apparatus_sn: '5',
                apparatus_calibration_due_on: '2018-08-09',
                apparatus_type_id: '2',
                hospital_id: '2'
            }),
        apparatus
            .create({
                apparatus_name: 'Apparatus 3',
                apparatus_desc: 'Desc apparatus 3',
                apparatus_sn: '6',
                apparatus_calibration_due_on: '2018-08-09',
                apparatus_type_id: '2',
                hospital_id: '2'
            }),
        apparatus
            .create({
                apparatus_name: 'Apparatus 1',
                apparatus_desc: 'Desc apparatus 1',
                apparatus_sn: '7',
                apparatus_calibration_due_on: '2018-08-09',
                apparatus_type_id: '3',
                hospital_id: '3'
            }),
        apparatus
            .create({
                apparatus_name: 'Apparatus 2',
                apparatus_desc: 'Desc apparatus 2',
                apparatus_sn: '8',
                apparatus_calibration_due_on: '2018-08-09',
                apparatus_type_id: '3',
                hospital_id: '3'
            }),
        apparatus
            .create({
                apparatus_name: 'Apparatus 3',
                apparatus_desc: 'Desc apparatus 3',
                apparatus_sn: '9',
                apparatus_calibration_due_on: '2018-08-09',
                apparatus_type_id: '3',
                hospital_id: '3'
            }),

        spare_part_type
            .create({
                type_name: 'Spare part type 1',
                type_desc: 'Desc spare part type 1'
            }),
        spare_part_type
            .create({
                type_name: 'Spare part type 2',
                type_desc: 'Desc spare part type 2'
            }),
        spare_part_type
            .create({
                type_name: 'Spare part type 3',
                type_desc: 'Desc spare part type 3'
            }),

        spare_part
            .create({
                part_name: 'Spare part 1',
                part_desc: 'Desc spare part 1',
                part_sn: '1',
                part_qty: 2,
                part_type_id: 1,
                hospital_id: 1
            }),
        spare_part
            .create({
                part_name: 'Spare part 2',
                part_desc: 'Desc spare part 2',
                part_sn: '2',
                part_qty: 2,
                part_type_id: 1,
                hospital_id: 1
            }),
        spare_part
            .create({
                part_name: 'Spare part 3',
                part_desc: 'Desc spare part 3',
                part_sn: '3',
                part_qty: 2,
                part_type_id: 1,
                hospital_id: 1
            }),
        spare_part
            .create({
                part_name: 'Spare part 1',
                part_desc: 'Desc spare part 1',
                part_sn: '4',
                part_qty: 2,
                part_type_id: 2,
                hospital_id: 2
            }),
        spare_part
            .create({
                part_name: 'Spare part 2',
                part_desc: 'Desc spare part 2',
                part_sn: '5',
                part_qty: 2,
                part_type_id: 2,
                hospital_id: 2
            }),
        spare_part
            .create({
                part_name: 'Spare part 3',
                part_desc: 'Desc spare part 3',
                part_sn: '6',
                part_qty: 2,
                part_type_id: 2,
                hospital_id: 2
            }),
        spare_part
            .create({
                part_name: 'Spare part 1',
                part_desc: 'Desc spare part 1',
                part_sn: '7',
                part_qty: 2,
                part_type_id: 3,
                hospital_id: 3
            }),
        spare_part
            .create({
                part_name: 'Spare part 2',
                part_desc: 'Desc spare part 2',
                part_sn: '8',
                part_qty: 2,
                part_type_id: 3,
                hospital_id: 3
            }),
        spare_part
            .create({
                part_name: 'Spare part 3',
                part_desc: 'Desc spare part 3',
                part_sn: '9',
                part_qty: 2,
                part_type_id: 3,
                hospital_id: 3
            }),

        device
            .create({
                device_sn: 1,
                device_sensors: [{}],
                hospital_id: 1
            }),
        device
            .create({
                device_sn: 2,
                device_sensors: [{}],
                hospital_id: 1
            }),
        device
            .create({
                device_sn: 3,
                device_sensors: [{}],
                hospital_id: 1
            }),
        device
            .create({
                device_sn: 4,
                device_sensors: [{}],
                hospital_id: 2
            }),
        device
            .create({
                device_sn: 5,
                device_sensors: [{}],
                hospital_id: 2
            }),
        device
            .create({
                device_sn: 6,
                device_sensors: [{}],
                hospital_id: 2
            }),
        device
            .create({
                device_sn: 7,
                device_sensors: [{}],
                hospital_id: 3
            }),
        device
            .create({
                device_sn: 8,
                device_sensors: [{}],
                hospital_id: 3
            }),
        device
            .create({
                device_sn: 9,
                device_sensors: [{}],
                hospital_id: 3
            }),

        medical_equipments_type
            .create({
                type_name: 'medical equipments type 1',
                type_desc: 'Desc medical equipments type 1',
                type_time_params: '10',
                type_level: 1,
                apparatus_type_id: [],
                spare_part_type_id: [],
                qualitative_tasks: [{}],
                preventive_tasks: [{}],
                disposal_tasks: [{}]
            }),
        medical_equipments_type
            .create({
                type_name: 'medical equipments type 2',
                type_desc: 'Desc medical equipments type 2',
                type_time_params: '10',
                type_level: 1,
                apparatus_type_id: [],
                spare_part_type_id: [],
                qualitative_tasks: [{}],
                preventive_tasks: [{}],
                disposal_tasks: [{}]
            }),
        medical_equipments_type
            .create({
                type_name: 'medical equipments type 3',
                type_desc: 'Desc medical equipments type 3',
                type_time_params: '10',
                type_level: 1,
                apparatus_type_id: [],
                spare_part_type_id: [],
                qualitative_tasks: [{}],
                preventive_tasks: [{}],
                disposal_tasks: [{}]
            }),
        medical_equipments_type
            .create({
                type_name: 'medical equipments type 4',
                type_desc: 'Desc medical equipments type 4',
                type_time_params: '10',
                type_level: 2,
                apparatus_type_id: [],
                spare_part_type_id: [],
                qualitative_tasks: [{}],
                preventive_tasks: [{}],
                disposal_tasks: [{}]
            }),
        medical_equipments_type
            .create({
                type_name: 'medical equipments type 5',
                type_desc: 'Desc medical equipments type 5',
                type_time_params: '10',
                type_level: 2,
                apparatus_type_id: [],
                spare_part_type_id: [],
                qualitative_tasks: [{}],
                preventive_tasks: [{}],
                disposal_tasks: [{}]
            }),
        medical_equipments_type
            .create({
                type_name: 'medical equipments type 6',
                type_desc: 'Desc medical equipments type 6',
                type_time_params: '10',
                type_level: 2,
                apparatus_type_id: [],
                spare_part_type_id: [],
                qualitative_tasks: [{}],
                preventive_tasks: [{}],
                disposal_tasks: [{}]
            }),
        medical_equipments_type
            .create({
                type_name: 'medical equipments type 7',
                type_desc: 'Desc medical equipments type 7',
                type_time_params: '10',
                type_level: 3,
                apparatus_type_id: [],
                spare_part_type_id: [],
                qualitative_tasks: [{}],
                preventive_tasks: [{}],
                disposal_tasks: [{}]
            }),
        medical_equipments_type
            .create({
                type_name: 'medical equipments type 8',
                type_desc: 'Desc medical equipments type 8',
                type_time_params: '10',
                type_level: 3,
                apparatus_type_id: [],
                spare_part_type_id: [],
                qualitative_tasks: [{}],
                preventive_tasks: [{}],
                disposal_tasks: [{}]
            }),
        medical_equipments_type
            .create({
                type_name: 'medical equipments type 9',
                type_desc: 'Desc medical equipments type 9',
                type_time_params: '10',
                type_level: 3,
                apparatus_type_id: [],
                spare_part_type_id: [],
                qualitative_tasks: [{}],
                preventive_tasks: [{}],
                disposal_tasks: [{}]
            }),

        medical_equipments
            .create({
                equipments_name: 'Equipments 1',
                equipments_desc: 'Desc equipments 1',
                equipments_sn: '',
                equipments_life_expectancy: 100,
                equipments_value: 50,
                equipments_value_currency: 'MYR',
                manufacturing_date: '2018-08-09 07:42:28',
                is_on: true,
                is_available: true,
                current_safety: 3,
                current_security: 3,
                current_productivity: 3,
                equipments_type_id: 1,
                manufacturers_id: 1,
                room_id: 1,
                pic_id: 1,
                pic_mt_id: 5,
                pic_usage_id: 1,
                device_id: 1,
                hospital_id: 1,
                dep_id: 1,
                div_id: 1,
                file: null
            }),
        medical_equipments
            .create({
                equipments_name: 'Equipments 2',
                equipments_desc: 'Desc equipments 2',
                equipments_sn: '',
                equipments_life_expectancy: 100,
                equipments_value: 50,
                equipments_value_currency: 'MYR',
                manufacturing_date: '2018-08-09 07:42:28',
                is_on: true,
                is_available: true,
                current_safety: 2,
                current_security: 3,
                current_productivity: 1,
                equipments_type_id: 1,
                manufacturers_id: 1,
                room_id: 1,
                pic_id: 1,
                pic_mt_id: 5,
                pic_usage_id: 1,
                device_id: 1,
                hospital_id: 1,
                dep_id: 1,
                div_id: 1,
                file: null
            }),
        medical_equipments
            .create({
                equipments_name: 'Equipments 3',
                equipments_desc: 'Desc equipments 3',
                equipments_sn: '',
                equipments_life_expectancy: 100,
                equipments_value: 50,
                equipments_value_currency: 'MYR',
                manufacturing_date: '2018-08-09 07:42:28',
                is_on: true,
                is_available: true,
                current_safety: 1,
                current_security: 1,
                current_productivity: 1,
                equipments_type_id: 1,
                manufacturers_id: 1,
                room_id: 1,
                pic_id: 1,
                pic_mt_id: 5,
                pic_usage_id: 1,
                device_id: 1,
                hospital_id: 1,
                dep_id: 1,
                div_id: 1,
                file: null
            }),
        medical_equipments
            .create({
                equipments_name: 'Equipments 1',
                equipments_desc: 'Desc equipments 1',
                equipments_sn: '',
                equipments_life_expectancy: 100,
                equipments_value: 50,
                equipments_value_currency: 'MYR',
                manufacturing_date: '2018-08-09 07:42:28',
                is_on: true,
                is_available: true,
                current_safety: 3,
                current_security: 3,
                current_productivity: 3,
                equipments_type_id: 2,
                manufacturers_id: 2,
                room_id: 2,
                pic_id: 2,
                pic_mt_id: 5,
                pic_usage_id: 2,
                device_id: 2,
                hospital_id: 2,
                dep_id: 2,
                div_id: 2,
                file: null
            }),
        medical_equipments
            .create({
                equipments_name: 'Equipments 2',
                equipments_desc: 'Desc equipments 2',
                equipments_sn: '',
                equipments_life_expectancy: 100,
                equipments_value: 50,
                equipments_value_currency: 'MYR',
                manufacturing_date: '2018-08-09 07:42:28',
                is_on: true,
                is_available: true,
                current_safety: 2,
                current_security: 3,
                current_productivity: 1,
                equipments_type_id: 2,
                manufacturers_id: 2,
                room_id: 2,
                pic_id: 2,
                pic_mt_id: 5,
                pic_usage_id: 2,
                device_id: 2,
                hospital_id: 2,
                dep_id: 2,
                div_id: 2,
                file: null
            }),
        medical_equipments
            .create({
                equipments_name: 'Equipments 3',
                equipments_desc: 'Desc equipments 3',
                equipments_sn: '',
                equipments_life_expectancy: 100,
                equipments_value: 50,
                equipments_value_currency: 'MYR',
                manufacturing_date: '2018-08-09 07:42:28',
                is_on: true,
                is_available: true,
                current_safety: 1,
                current_security: 1,
                current_productivity: 1,
                equipments_type_id: 2,
                manufacturers_id: 2,
                room_id: 2,
                pic_id: 2,
                pic_mt_id: 5,
                pic_usage_id: 2,
                device_id: 2,
                hospital_id: 2,
                dep_id: 2,
                div_id: 2,
                file: null
            }),
        medical_equipments
            .create({
                equipments_name: 'Equipments 1',
                equipments_desc: 'Desc equipments 1',
                equipments_sn: '',
                equipments_life_expectancy: 100,
                equipments_value: 50,
                equipments_value_currency: 'MYR',
                manufacturing_date: '2018-08-09 07:42:28',
                is_on: true,
                is_available: true,
                current_safety: 3,
                current_security: 3,
                current_productivity: 3,
                equipments_type_id: 3,
                manufacturers_id: 3,
                room_id: 3,
                pic_id: 3,
                pic_mt_id: 5,
                pic_usage_id: 3,
                device_id: 3,
                hospital_id: 3,
                dep_id: 3,
                div_id: 3,
                file: null
            }),
        medical_equipments
            .create({
                equipments_name: 'Equipments 2',
                equipments_desc: 'Desc equipments 2',
                equipments_sn: '',
                equipments_life_expectancy: 100,
                equipments_value: 50,
                equipments_value_currency: 'MYR',
                manufacturing_date: '2018-08-09 07:42:28',
                is_on: true,
                is_available: true,
                current_safety: 2,
                current_security: 3,
                current_productivity: 1,
                equipments_type_id: 3,
                manufacturers_id: 3,
                room_id: 3,
                pic_id: 3,
                pic_mt_id: 5,
                pic_usage_id: 3,
                device_id: 3,
                hospital_id: 3,
                dep_id: 3,
                div_id: 3,
                file: null
            }),
        medical_equipments
            .create({
                equipments_name: 'Equipments 3',
                equipments_desc: 'Desc equipments 3',
                equipments_sn: '',
                equipments_life_expectancy: 100,
                equipments_value: 50,
                equipments_value_currency: 'MYR',
                manufacturing_date: '2018-08-09 07:42:28',
                is_on: true,
                is_available: true,
                current_safety: 1,
                current_security: 1,
                current_productivity: 1,
                equipments_type_id: 3,
                manufacturers_id: 3,
                room_id: 3,
                pic_id: 3,
                pic_mt_id: 5,
                pic_usage_id: 3,
                device_id: 3,
                hospital_id: 3,
                dep_id: 3,
                div_id: 3,
                file: null
            }),

        medical_equipments_history
            .create({
                equipment_id: 1,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        medical_equipments_history
            .create({
                equipment_id: 2,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        medical_equipments_history
            .create({
                equipment_id: 3,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        medical_equipments_history
            .create({
                equipment_id: 4,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        medical_equipments_history
            .create({
                equipment_id: 5,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        medical_equipments_history
            .create({
                equipment_id: 6,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        medical_equipments_history
            .create({
                equipment_id: 7,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        medical_equipments_history
            .create({
                equipment_id: 8,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),
        medical_equipments_history
            .create({
                equipment_id: 9,
                date_time: '2018-08-09 07:42:28',
                record_safety: 1,
                record_security: 1,
                record_productivity: 1
            }),

        medical_equipments_productivity
            .create({
                equipment_id: 1,
                count_usage: 10,
                standard_usage: 100
            }),
        medical_equipments_productivity
            .create({
                equipment_id: 2,
                count_usage: 30,
                standard_usage: 100
            }),
        medical_equipments_productivity
            .create({
                equipment_id: 3,
                count_usage: 50,
                standard_usage: 100
            }),
        medical_equipments_productivity
            .create({
                equipment_id: 4,
                count_usage: 70,
                standard_usage: 100
            }),
        medical_equipments_productivity
            .create({
                equipment_id: 5,
                count_usage: 90,
                standard_usage: 100
            }),
        medical_equipments_productivity
            .create({
                equipment_id: 6,
                count_usage: 110,
                standard_usage: 100
            }),
        medical_equipments_productivity
            .create({
                equipment_id: 7,
                count_usage: 130,
                standard_usage: 100
            }),
        medical_equipments_productivity
            .create({
                equipment_id: 8,
                count_usage: 150,
                standard_usage: 100
            }),
        medical_equipments_productivity
            .create({
                equipment_id: 9,
                count_usage: 170,
                standard_usage: 100
            }),

        medical_equipments_safety
            .create({
                equipment_id: 1,
                equipments_age: 10,
                last_maintenance_date: '2018-08-09 07:42:28',
                standard_maintenance: 100,
                is_reported: false
            }),
        medical_equipments_safety
            .create({
                equipment_id: 2,
                equipments_age: 30,
                last_maintenance_date: '2018-08-09 07:42:28',
                standard_maintenance: 100,
                is_reported: false
            }),
        medical_equipments_safety
            .create({
                equipment_id: 3,
                equipments_age: 50,
                last_maintenance_date: '2018-08-09 07:42:28',
                standard_maintenance: 100,
                is_reported: false
            }),
        medical_equipments_safety
            .create({
                equipment_id: 4,
                equipments_age: 70,
                last_maintenance_date: '2018-08-09 07:42:28',
                standard_maintenance: 100,
                is_reported: false
            }),
        medical_equipments_safety
            .create({
                equipment_id: 5,
                equipments_age: 90,
                last_maintenance_date: '2018-08-09 07:42:28',
                standard_maintenance: 100,
                is_reported: false
            }),
        medical_equipments_safety
            .create({
                equipment_id: 6,
                equipments_age: 110,
                last_maintenance_date: '2018-08-09 07:42:28',
                standard_maintenance: 100,
                is_reported: false
            }),
        medical_equipments_safety
            .create({
                equipment_id: 7,
                equipments_age: 130,
                last_maintenance_date: '2018-08-09 07:42:28',
                standard_maintenance: 100,
                is_reported: false
            }),
        medical_equipments_safety
            .create({
                equipment_id: 8,
                equipments_age: 150,
                last_maintenance_date: '2018-08-09 07:42:28',
                standard_maintenance: 100,
                is_reported: false
            }),
        medical_equipments_safety
            .create({
                equipment_id: 9,
                equipments_age: 170,
                last_maintenance_date: '2018-08-09 07:42:28',
                standard_maintenance: 100,
                is_reported: false
            }),

        medical_equipments_security
            .create({
                equipment_id: 1,
                is_room_locked: false,
                room_id: 1,
                pic_id: 1
            }),
        medical_equipments_security
            .create({
                equipment_id: 2,
                is_room_locked: false,
                room_id: 1,
                pic_id: 1
            }),
        medical_equipments_security
            .create({
                equipment_id: 3,
                is_room_locked: false,
                room_id: 1,
                pic_id: 1
            }),
        medical_equipments_security
            .create({
                equipment_id: 4,
                is_room_locked: false,
                room_id: 2,
                pic_id: 2
            }),
        medical_equipments_security
            .create({
                equipment_id: 5,
                is_room_locked: false,
                room_id: 2,
                pic_id: 2
            }),
        medical_equipments_security
            .create({
                equipment_id: 6,
                is_room_locked: false,
                room_id: 2,
                pic_id: 2
            }),
        medical_equipments_security
            .create({
                equipment_id: 7,
                is_room_locked: false,
                room_id: 3,
                pic_id: 3
            }),
        medical_equipments_security
            .create({
                equipment_id: 8,
                is_room_locked: false,
                room_id: 3,
                pic_id: 3
            }),
        medical_equipments_security
            .create({
                equipment_id: 9,
                is_room_locked: false,
                room_id: 3,
                pic_id: 3
            }),

        medical_equipments_security_history
            .create({
                equipment_id: 1,
                security_desc: 'Desc security ',
                room_id: 1,
                pic_id: 1,
                security_id: 1
            }),
        medical_equipments_security_history
            .create({
                equipment_id: 2,
                security_desc: 'Desc security ',
                room_id: 1,
                pic_id: 1,
                security_id: 2
            }),
        medical_equipments_security_history
            .create({
                equipment_id: 3,
                security_desc: 'Desc security ',
                room_id: 1,
                pic_id: 1,
                security_id: 3
            }),
        medical_equipments_security_history
            .create({
                equipment_id: 4,
                security_desc: 'Desc security ',
                room_id: 2,
                pic_id: 2,
                security_id: 4
            }),
        medical_equipments_security_history
            .create({
                equipment_id: 5,
                security_desc: 'Desc security ',
                room_id: 2,
                pic_id: 2,
                security_id: 5
            }),
        medical_equipments_security_history
            .create({
                equipment_id: 6,
                security_desc: 'Desc security ',
                room_id: 2,
                pic_id: 2,
                security_id: 6
            }),
        medical_equipments_security_history
            .create({
                equipment_id: 7,
                security_desc: 'Desc security ',
                room_id: 3,
                pic_id: 3,
                security_id: 7
            }),
        medical_equipments_security_history
            .create({
                equipment_id: 8,
                security_desc: 'Desc security ',
                room_id: 3,
                pic_id: 3,
                security_id: 8
            }),
        medical_equipments_security_history
            .create({
                equipment_id: 9,
                security_desc: 'Desc security ',
                room_id: 3,
                pic_id: 3,
                security_id: 9
            }),

        breakdown_reports
            .create({
                report_sn: '1',
                report_desc: 'Desc report ',
                report_details: 'Details report ',
                is_open: true,
                equipment_id: 1,
                hospital_id: 1,
                user_id: 1
            }),
        breakdown_reports
            .create({
                report_sn: '2',
                report_desc: 'Desc report ',
                report_details: 'Details report ',
                is_open: true,
                equipment_id: 2,
                hospital_id: 1,
                user_id: 1
            }),
        breakdown_reports
            .create({
                report_sn: '3',
                report_desc: 'Desc report ',
                report_details: 'Details report ',
                is_open: true,
                equipment_id: 3,
                hospital_id: 1,
                user_id: 1
            }),
        breakdown_reports
            .create({
                report_sn: '4',
                report_desc: 'Desc report ',
                report_details: 'Details report ',
                is_open: true,
                equipment_id: 4,
                hospital_id: 2,
                user_id: 2
            }),
        breakdown_reports
            .create({
                report_sn: '5',
                report_desc: 'Desc report ',
                report_details: 'Details report ',
                is_open: true,
                equipment_id: 5,
                hospital_id: 2,
                user_id: 2
            }),
        breakdown_reports
            .create({
                report_sn: '6',
                report_desc: 'Desc report ',
                report_details: 'Details report ',
                is_open: true,
                equipment_id: 6,
                hospital_id: 2,
                user_id: 2
            }),
        breakdown_reports
            .create({
                report_sn: '7',
                report_desc: 'Desc report ',
                report_details: 'Details report ',
                is_open: true,
                equipment_id: 7,
                hospital_id: 3,
                user_id: 3
            }),
        breakdown_reports
            .create({
                report_sn: '8',
                report_desc: 'Desc report ',
                report_details: 'Details report ',
                is_open: true,
                equipment_id: 8,
                hospital_id: 3,
                user_id: 3
            }),
        breakdown_reports
            .create({
                report_sn: '9',
                report_desc: 'Desc report ',
                report_details: 'Details report ',
                is_open: true,
                equipment_id: 9,
                hospital_id: 3,
                user_id: 3
            }),

        maintenance_qty_task
            .create({
                quantitative_tasks: [{}],
                apparatus_type_id: 1,
                equipments_type_id: 1
            }),
        maintenance_qty_task
            .create({
                quantitative_tasks: [{}],
                apparatus_type_id: 1,
                equipments_type_id: 1
            }),
        maintenance_qty_task
            .create({
                quantitative_tasks: [{}],
                apparatus_type_id: 1,
                equipments_type_id: 1
            }),
        maintenance_qty_task
            .create({
                quantitative_tasks: [{}],
                apparatus_type_id: 2,
                equipments_type_id: 2
            }),
        maintenance_qty_task
            .create({
                quantitative_tasks: [{}],
                apparatus_type_id: 2,
                equipments_type_id: 2
            }),
        maintenance_qty_task
            .create({
                quantitative_tasks: [{}],
                apparatus_type_id: 2,
                equipments_type_id: 2
            }),
        maintenance_qty_task
            .create({
                quantitative_tasks: [{}],
                apparatus_type_id: 3,
                equipments_type_id: 3
            }),
        maintenance_qty_task
            .create({
                quantitative_tasks: [{}],
                apparatus_type_id: 3,
                equipments_type_id: 3
            }),
        maintenance_qty_task
            .create({
                quantitative_tasks: [{}],
                apparatus_type_id: 3,
                equipments_type_id: 3
            }),

        maintenance_ppm
            .create({
                apparatus_id: [],
                spare_part_id: [],
                qualitative_tasks: [{}],
                quantitative_tasks: [{}],
                preventive_tasks: [{}],
                est_tasks: [{}],
                notes: 'notes 1',
                is_open: true,
                ppm_sn: '1',
                ppm_result: true,
                ppm_next_date: '2018-08-09 07:42:28',
                hospital_id: 1,
                user_id: 1,
                equipment_id: 1
            }),
        maintenance_ppm
            .create({
                apparatus_id: [],
                spare_part_id: [],
                qualitative_tasks: [{}],
                quantitative_tasks: [{}],
                preventive_tasks: [{}],
                est_tasks: [{}],
                notes: 'notes 2',
                is_open: true,
                ppm_sn: '2',
                ppm_result: true,
                ppm_next_date: '2018-08-09 07:42:28',
                hospital_id: 1,
                user_id: 1,
                equipment_id: 2
            }),
        maintenance_ppm
            .create({
                apparatus_id: [],
                spare_part_id: [],
                qualitative_tasks: [{}],
                quantitative_tasks: [{}],
                preventive_tasks: [{}],
                est_tasks: [{}],
                notes: 'notes 3',
                is_open: true,
                ppm_sn: '3',
                ppm_result: true,
                ppm_next_date: '2018-08-09 07:42:28',
                hospital_id: 1,
                user_id: 1,
                equipment_id: 3
            }),
        maintenance_ppm
            .create({
                apparatus_id: [],
                spare_part_id: [],
                qualitative_tasks: [{}],
                quantitative_tasks: [{}],
                preventive_tasks: [{}],
                est_tasks: [{}],
                notes: 'notes 4',
                is_open: true,
                ppm_sn: '4',
                ppm_result: true,
                ppm_next_date: '2018-08-09 07:42:28',
                hospital_id: 2,
                user_id: 2,
                equipment_id: 4
            }),
        maintenance_ppm
            .create({
                apparatus_id: [],
                spare_part_id: [],
                qualitative_tasks: [{}],
                quantitative_tasks: [{}],
                preventive_tasks: [{}],
                est_tasks: [{}],
                notes: 'notes 5',
                is_open: true,
                ppm_sn: '5',
                ppm_result: true,
                ppm_next_date: '2018-08-09 07:42:28',
                hospital_id: 2,
                user_id: 2,
                equipment_id: 5
            }),
        maintenance_ppm
            .create({
                apparatus_id: [],
                spare_part_id: [],
                qualitative_tasks: [{}],
                quantitative_tasks: [{}],
                preventive_tasks: [{}],
                est_tasks: [{}],
                notes: 'notes 6',
                is_open: true,
                ppm_sn: '6',
                ppm_result: true,
                ppm_next_date: '2018-08-09 07:42:28',
                hospital_id: 2,
                user_id: 2,
                equipment_id: 6
            }),
        maintenance_ppm
            .create({
                apparatus_id: [],
                spare_part_id: [],
                qualitative_tasks: [{}],
                quantitative_tasks: [{}],
                preventive_tasks: [{}],
                est_tasks: [{}],
                notes: 'notes 7',
                is_open: true,
                ppm_sn: '7',
                ppm_result: true,
                ppm_next_date: '2018-08-09 07:42:28',
                hospital_id: 3,
                user_id: 3,
                equipment_id: 7
            }),
        maintenance_ppm
            .create({
                apparatus_id: [],
                spare_part_id: [],
                qualitative_tasks: [{}],
                quantitative_tasks: [{}],
                preventive_tasks: [{}],
                est_tasks: [{}],
                notes: 'notes 8',
                is_open: true,
                ppm_sn: '8',
                ppm_result: true,
                ppm_next_date: '2018-08-09 07:42:28',
                hospital_id: 3,
                user_id: 3,
                equipment_id: 8
            }),
        maintenance_ppm
            .create({
                apparatus_id: [],
                spare_part_id: [],
                qualitative_tasks: [{}],
                quantitative_tasks: [{}],
                preventive_tasks: [{}],
                est_tasks: [{}],
                notes: 'notes 9',
                is_open: true,
                ppm_sn: '9',
                ppm_result: true,
                ppm_next_date: '2018-08-09 07:42:28',
                hospital_id: 3,
                user_id: 3,
                equipment_id: 9
            }),

        maintenance_work_order
            .create({
                wo_desc: 'wo desc 1',
                wo_designation: 'wo designation 1',
                wo_req_details: 'wo req details 1',
                wo_sn: '1',
                is_open: true,
                hospital_id: 1,
                user_id: 1,
                equipment_id: 1,
                ppm_id: 1,
                report_id: 1
            }),
        maintenance_work_order
            .create({
                wo_desc: 'wo desc 2',
                wo_designation: 'wo designation 2',
                wo_req_details: 'wo req details 2',
                wo_sn: '2',
                is_open: true,
                hospital_id: 1,
                user_id: 1,
                equipment_id: 1,
                ppm_id: 2,
                report_id: 2
            }),
        maintenance_work_order
            .create({
                wo_desc: 'wo desc 3',
                wo_designation: 'wo designation 3',
                wo_req_details: 'wo req details 3',
                wo_sn: '3',
                is_open: true,
                hospital_id: 1,
                user_id: 1,
                equipment_id: 1,
                ppm_id: 3,
                report_id: 3
            }),
        maintenance_work_order
            .create({
                wo_desc: 'wo desc 4',
                wo_designation: 'wo designation 4',
                wo_req_details: 'wo req details 4',
                wo_sn: '4',
                is_open: true,
                hospital_id: 2,
                user_id: 2,
                equipment_id: 2,
                ppm_id: 4,
                report_id: 4
            }),
        maintenance_work_order
            .create({
                wo_desc: 'wo desc 5',
                wo_designation: 'wo designation 5',
                wo_req_details: 'wo req details 5',
                wo_sn: '5',
                is_open: true,
                hospital_id: 2,
                user_id: 2,
                equipment_id: 2,
                ppm_id: 5,
                report_id: 5
            }),
        maintenance_work_order
            .create({
                wo_desc: 'wo desc 6',
                wo_designation: 'wo designation 6',
                wo_req_details: 'wo req details 6',
                wo_sn: '6',
                is_open: true,
                hospital_id: 2,
                user_id: 2,
                equipment_id: 2,
                ppm_id: 6,
                report_id: 6
            }),
        maintenance_work_order
            .create({
                wo_desc: 'wo desc 7',
                wo_designation: 'wo designation 7',
                wo_req_details: 'wo req details 7',
                wo_sn: '7',
                is_open: true,
                hospital_id: 3,
                user_id: 3,
                equipment_id: 3,
                ppm_id: 7,
                report_id: 7
            }),
        maintenance_work_order
            .create({
                wo_desc: 'wo desc 8',
                wo_designation: 'wo designation 8',
                wo_req_details: 'wo req details 8',
                wo_sn: '8',
                is_open: true,
                hospital_id: 3,
                user_id: 3,
                equipment_id: 3,
                ppm_id: 8,
                report_id: 8
            }),
        maintenance_work_order
            .create({
                wo_desc: 'wo desc 9',
                wo_designation: 'wo designation 9',
                wo_req_details: 'wo req details 9',
                wo_sn: '9',
                is_open: true,
                hospital_id: 3,
                user_id: 3,
                equipment_id: 3,
                ppm_id: 9,
                report_id: 9
            }),

        maintenance_cm
            .create({
                apparatus_id: [],
                spare_part_id: [],
                qualitative_tasks: [{}],
                quantitative_tasks: [{}],
                preventive_tasks: [{}],
                est_tasks: [{}],
                notes: 'notes 1',
                is_open: true,
                cm_sn: '1',
                cm_result: true,
                ppm_next_date: '2018-08-09 07:42:28',
                hospital_id: 1,
                user_id: 1,
                equipment_id: 1,
                work_order_id: 1
            }),
        maintenance_cm
            .create({
                apparatus_id: [],
                spare_part_id: [],
                qualitative_tasks: [{}],
                quantitative_tasks: [{}],
                preventive_tasks: [{}],
                est_tasks: [{}],
                notes: 'notes 2',
                is_open: true,
                cm_sn: '2',
                cm_result: true,
                ppm_next_date: '2018-08-09 07:42:28',
                hospital_id: 1,
                user_id: 1,
                equipment_id: 2,
                work_order_id: 2
            }),
        maintenance_cm
            .create({
                apparatus_id: [],
                spare_part_id: [],
                qualitative_tasks: [{}],
                quantitative_tasks: [{}],
                preventive_tasks: [{}],
                est_tasks: [{}],
                notes: 'notes 3',
                is_open: true,
                cm_sn: '3',
                cm_result: true,
                ppm_next_date: '2018-08-09 07:42:28',
                hospital_id: 1,
                user_id: 1,
                equipment_id: 3,
                work_order_id: 3
            }),
        maintenance_cm
            .create({
                apparatus_id: [],
                spare_part_id: [],
                qualitative_tasks: [{}],
                quantitative_tasks: [{}],
                preventive_tasks: [{}],
                est_tasks: [{}],
                notes: 'notes 4',
                is_open: true,
                cm_sn: '4',
                cm_result: true,
                ppm_next_date: '2018-08-09 07:42:28',
                hospital_id: 2,
                user_id: 2,
                equipment_id: 4,
                work_order_id: 4
            }),
        maintenance_cm
            .create({
                apparatus_id: [],
                spare_part_id: [],
                qualitative_tasks: [{}],
                quantitative_tasks: [{}],
                preventive_tasks: [{}],
                est_tasks: [{}],
                notes: 'notes 5',
                is_open: true,
                cm_sn: '5',
                cm_result: true,
                ppm_next_date: '2018-08-09 07:42:28',
                hospital_id: 2,
                user_id: 2,
                equipment_id: 5,
                work_order_id: 5
            }),
        maintenance_cm
            .create({
                apparatus_id: [],
                spare_part_id: [],
                qualitative_tasks: [{}],
                quantitative_tasks: [{}],
                preventive_tasks: [{}],
                est_tasks: [{}],
                notes: 'notes 6',
                is_open: true,
                cm_sn: '6',
                cm_result: true,
                ppm_next_date: '2018-08-09 07:42:28',
                hospital_id: 2,
                user_id: 2,
                equipment_id: 6,
                work_order_id: 6
            }),
        maintenance_cm
            .create({
                apparatus_id: [],
                spare_part_id: [],
                qualitative_tasks: [{}],
                quantitative_tasks: [{}],
                preventive_tasks: [{}],
                est_tasks: [{}],
                notes: 'notes 7',
                is_open: true,
                cm_sn: '7',
                cm_result: true,
                ppm_next_date: '2018-08-09 07:42:28',
                hospital_id: 3,
                user_id: 3,
                equipment_id: 7,
                work_order_id: 7
            }),
        maintenance_cm
            .create({
                apparatus_id: [],
                spare_part_id: [],
                qualitative_tasks: [{}],
                quantitative_tasks: [{}],
                preventive_tasks: [{}],
                est_tasks: [{}],
                notes: 'notes 8',
                is_open: true,
                cm_sn: '8',
                cm_result: true,
                ppm_next_date: '2018-08-09 07:42:28',
                hospital_id: 3,
                user_id: 3,
                equipment_id: 8,
                work_order_id: 8
            }),
        maintenance_cm
            .create({
                apparatus_id: [],
                spare_part_id: [],
                qualitative_tasks: [{}],
                quantitative_tasks: [{}],
                preventive_tasks: [{}],
                est_tasks: [{}],
                notes: 'notes 9',
                is_open: true,
                cm_sn: '9',
                cm_result: true,
                ppm_next_date: '2018-08-09 07:42:28',
                hospital_id: 3,
                user_id: 3,
                equipment_id: 9,
                work_order_id: 9
            }),

        disposal_request
            .create({
                request_sn: '1',
                request_desc: 'desc request 1',
                disposal_reason: 'reason disposal 1',
                is_approved: true,
                hospital_id: 1,
                user_id: 1,
                equipment_id: 1,
                cm_id: 1
            }),
        disposal_request
            .create({
                request_sn: '2',
                request_desc: 'desc request 2',
                disposal_reason: 'reason disposal 2',
                is_approved: true,
                hospital_id: 1,
                user_id: 1,
                equipment_id: 2,
                cm_id: 2
            }),
        disposal_request
            .create({
                request_sn: '3',
                request_desc: 'desc request 3',
                disposal_reason: 'reason disposal 3',
                is_approved: true,
                hospital_id: 1,
                user_id: 1,
                equipment_id: 3,
                cm_id: 3
            }),
        disposal_request
            .create({
                request_sn: '4',
                request_desc: 'desc request 4',
                disposal_reason: 'reason disposal 4',
                is_approved: true,
                hospital_id: 2,
                user_id: 2,
                equipment_id: 4,
                cm_id: 4
            }),
        disposal_request
            .create({
                request_sn: '5',
                request_desc: 'desc request 5',
                disposal_reason: 'reason disposal 5',
                is_approved: true,
                hospital_id: 2,
                user_id: 2,
                equipment_id: 5,
                cm_id: 5
            }),
        disposal_request
            .create({
                request_sn: '6',
                request_desc: 'desc request 6',
                disposal_reason: 'reason disposal 6',
                is_approved: true,
                hospital_id: 2,
                user_id: 2,
                equipment_id: 6,
                cm_id: 6
            }),
        disposal_request
            .create({
                request_sn: '7',
                request_desc: 'desc request 7',
                disposal_reason: 'reason disposal 7',
                is_approved: true,
                hospital_id: 3,
                user_id: 3,
                equipment_id: 7,
                cm_id: 7
            }),
        disposal_request
            .create({
                request_sn: '8',
                request_desc: 'desc request 8',
                disposal_reason: 'reason disposal 8',
                is_approved: true,
                hospital_id: 3,
                user_id: 3,
                equipment_id: 8,
                cm_id: 8
            }),
        disposal_request
            .create({
                request_sn: '9',
                request_desc: 'desc request 9',
                disposal_reason: 'reason disposal 9',
                is_approved: true,
                hospital_id: 3,
                user_id: 3,
                equipment_id: 9,
                cm_id: 9
            }),

        disposal_report
            .create({
                report_sn: '1',
                report_desc: 'desc report 1',
                disposal_reason: 'reason disposal 1',
                disposal_tasks: [{}],
                is_open: true,
                hospital_id: 1,
                user_id: 1,
                equipment_id: 1,
                request_id: 1,
                file: null
            }),
        disposal_report
            .create({
                report_sn: '2',
                report_desc: 'desc report 2',
                disposal_reason: 'reason disposal 2',
                disposal_tasks: [{}],
                is_open: true,
                hospital_id: 1,
                user_id: 1,
                equipment_id: 2,
                request_id: 2,
                file: null
            }),
        disposal_report
            .create({
                report_sn: '31',
                report_desc: 'desc report 3',
                disposal_reason: 'reason disposal 3',
                disposal_tasks: [{}],
                is_open: true,
                hospital_id: 1,
                user_id: 1,
                equipment_id: 3,
                request_id: 3,
                file: null
            }),
        disposal_report
            .create({
                report_sn: '4',
                report_desc: 'desc report 4',
                disposal_reason: 'reason disposal 4',
                disposal_tasks: [{}],
                is_open: true,
                hospital_id: 1,
                user_id: 1,
                equipment_id: 4,
                request_id: 4,
                file: null
            }),
        disposal_report
            .create({
                report_sn: '5',
                report_desc: 'desc report 5',
                disposal_reason: 'reason disposal 5',
                disposal_tasks: [{}],
                is_open: true,
                hospital_id: 1,
                user_id: 1,
                equipment_id: 5,
                request_id: 5,
                file: null
            }),
        disposal_report
            .create({
                report_sn: '6',
                report_desc: 'desc report 6',
                disposal_reason: 'reason disposal 6',
                disposal_tasks: [{}],
                is_open: true,
                hospital_id: 1,
                user_id: 1,
                equipment_id: 6,
                request_id: 6,
                file: null
            }),
        disposal_report
            .create({
                report_sn: '7',
                report_desc: 'desc report 7',
                disposal_reason: 'reason disposal 7',
                disposal_tasks: [{}],
                is_open: true,
                hospital_id: 1,
                user_id: 1,
                equipment_id: 7,
                request_id: 7,
                file: null
            }),
        disposal_report
            .create({
                report_sn: '8',
                report_desc: 'desc report 8',
                disposal_reason: 'reason disposal 8',
                disposal_tasks: [{}],
                is_open: true,
                hospital_id: 1,
                user_id: 1,
                equipment_id: 8,
                request_id: 8,
                file: null
            }),
        disposal_report
            .create({
                report_sn: '9',
                report_desc: 'desc report 9',
                disposal_reason: 'reason disposal 9',
                disposal_tasks: [{}],
                is_open: true,
                hospital_id: 1,
                user_id: 1,
                equipment_id: 9,
                request_id: 9,
                file: null
            }),

        disposal_equipment
            .create({
                equipment_details: [{}],
                disposal_reason: 'Reason disposal 1',
                hospital_id: 1,
                report_id: 1
            }),
        disposal_equipment
            .create({
                equipment_details: [{}],
                disposal_reason: 'Reason disposal 2',
                hospital_id: 1,
                report_id: 2
            }),
        disposal_equipment
            .create({
                equipment_details: [{}],
                disposal_reason: 'Reason disposal 3',
                hospital_id: 1,
                report_id: 3
            }),
        disposal_equipment
            .create({
                equipment_details: [{}],
                disposal_reason: 'Reason disposal 4',
                hospital_id: 2,
                report_id: 4
            }),
        disposal_equipment
            .create({
                equipment_details: [{}],
                disposal_reason: 'Reason disposal 5',
                hospital_id: 2,
                report_id: 5
            }),
        disposal_equipment
            .create({
                equipment_details: [{}],
                disposal_reason: 'Reason disposal 6',
                hospital_id: 2,
                report_id: 6
            }),
        disposal_equipment
            .create({
                equipment_details: [{}],
                disposal_reason: 'Reason disposal 7',
                hospital_id: 3,
                report_id: 7
            }),
        disposal_equipment
            .create({
                equipment_details: [{}],
                disposal_reason: 'Reason disposal 8',
                hospital_id: 3,
                report_id: 8
            }),
        disposal_equipment
            .create({
                equipment_details: [{}],
                disposal_reason: 'Reason disposal 9',
                hospital_id: 3,
                report_id: 9
            }),

        medical_equipments_booking
            .create({
                start_date: '2018-08-09 07:42:28',
                end_date: '2018-09-10 07:42:28',
                purpose: 'purpose 1',
                is_used: true,
                user_id: 1,
                equipment_id: 1,
                room_id: 1,
                hospital_id: 1
            }),
        medical_equipments_booking
            .create({
                start_date: '2018-08-09 07:42:28',
                end_date: '2018-09-10 07:42:28',
                purpose: 'purpose 2',
                is_used: true,
                user_id: 1,
                equipment_id: 2,
                room_id: 2,
                hospital_id: 1
            }),
        medical_equipments_booking
            .create({
                start_date: '2018-08-09 07:42:28',
                end_date: '2018-09-10 07:42:28',
                purpose: 'purpose 3',
                is_used: true,
                user_id: 1,
                equipment_id: 3,
                room_id: 3,
                hospital_id: 1
            }),
        medical_equipments_booking
            .create({
                start_date: '2018-08-09 07:42:28',
                end_date: '2018-09-10 07:42:28',
                purpose: 'purpose 4',
                is_used: true,
                user_id: 2,
                equipment_id: 4,
                room_id: 4,
                hospital_id: 2
            }),
        medical_equipments_booking
            .create({
                start_date: '2018-08-09 07:42:28',
                end_date: '2018-09-10 07:42:28',
                purpose: 'purpose 5',
                is_used: true,
                user_id: 2,
                equipment_id: 5,
                room_id: 5,
                hospital_id: 2
            }),
        medical_equipments_booking
            .create({
                start_date: '2018-08-09 07:42:28',
                end_date: '2018-09-10 07:42:28',
                purpose: 'purpose 6',
                is_used: true,
                user_id: 2,
                equipment_id: 6,
                room_id: 6,
                hospital_id: 2
            }),
        medical_equipments_booking
            .create({
                start_date: '2018-08-09 07:42:28',
                end_date: '2018-09-10 07:42:28',
                purpose: 'purpose 7',
                is_used: true,
                user_id: 3,
                equipment_id: 7,
                room_id: 7,
                hospital_id: 3
            }),
        medical_equipments_booking
            .create({
                start_date: '2018-08-09 07:42:28',
                end_date: '2018-09-10 07:42:28',
                purpose: 'purpose 8',
                is_used: true,
                user_id: 3,
                equipment_id: 8,
                room_id: 8,
                hospital_id: 3
            }),
        medical_equipments_booking
            .create({
                start_date: '2018-08-09 07:42:28',
                end_date: '2018-09-10 07:42:28',
                purpose: 'purpose 9',
                is_used: true,
                user_id: 3,
                equipment_id: 9,
                room_id: 9,
                hospital_id: 3
            }),
            
        suppliers
            .create({
                supplier_name: 'Supplier 1',
                supplier_desc: 'Desc Supplier 1',
                supplier: '1'
            }),
            
        suppliers
            .create({
                supplier_name: 'Supplier 2',
                supplier_desc: 'Desc Supplier 2',
                supplier: '2'
            }),
            
        suppliers
            .create({
                supplier_name: 'Supplier 3',
                supplier_desc: 'Desc Supplier 3',
                supplier: '3'
            }),
            
        suppliers
            .create({
                supplier_name: 'Supplier 4',
                supplier_desc: 'Desc Supplier 4',
                supplier: '4'
            }),
            
        suppliers
            .create({
                supplier_name: 'Supplier 5',
                supplier_desc: 'Desc Supplier 5',
                supplier: '5'
            }),
            
        suppliers
            .create({
                supplier_name: 'Supplier 6',
                supplier_desc: 'Desc Supplier 6',
                supplier: '6'
            }),
            
        suppliers
            .create({
                supplier_name: 'Supplier 7',
                supplier_desc: 'Desc Supplier 7',
                supplier: '7'
            }),
            
        suppliers
            .create({
                supplier_name: 'Supplier 8',
                supplier_desc: 'Desc Supplier 8',
                supplier: '8'
            }),
            
        suppliers
            .create({
                supplier_name: 'Supplier 9',
                supplier_desc: 'Desc Supplier 9',
                supplier: '9'
            }),

        open_booking
            .create({
                start_date: '2018-08-09 07:42:28',
                end_date: '2018-09-10 07:42:28',
                purpose: 'purpose 2',
                is_used: true,
                equipment_id: 2,
                room_id: 2,
                hospital_id: 1
            }),
        open_booking
            .create({
                start_date: '2018-08-09 07:42:28',
                end_date: '2018-09-10 07:42:28',
                purpose: 'purpose 2',
                is_used: true,
                equipment_id: 2,
                room_id: 2,
                hospital_id: 1
            }),
        open_booking
            .create({
                start_date: '2018-08-09 07:42:28',
                end_date: '2018-09-10 07:42:28',
                purpose: 'purpose 2',
                is_used: true,
                equipment_id: 2,
                room_id: 2,
                hospital_id: 1
            }),
        open_booking
            .create({
                start_date: '2018-08-09 07:42:28',
                end_date: '2018-09-10 07:42:28',
                purpose: 'purpose 2',
                is_used: true,
                equipment_id: 2,
                room_id: 2,
                hospital_id: 1
            }),
        open_booking
            .create({
                start_date: '2018-08-09 07:42:28',
                end_date: '2018-09-10 07:42:28',
                purpose: 'purpose 2',
                is_used: true,
                equipment_id: 2,
                room_id: 2,
                hospital_id: 1
            }),
        open_booking
            .create({
                start_date: '2018-08-09 07:42:28',
                end_date: '2018-09-10 07:42:28',
                purpose: 'purpose 2',
                is_used: true,
                equipment_id: 2,
                room_id: 2,
                hospital_id: 1
            }),
        open_booking
            .create({
                start_date: '2018-08-09 07:42:28',
                end_date: '2018-09-10 07:42:28',
                purpose: 'purpose 2',
                is_used: true,
                equipment_id: 2,
                room_id: 2,
                hospital_id: 1
            }),
        open_booking
            .create({
                start_date: '2018-08-09 07:42:28',
                end_date: '2018-09-10 07:42:28',
                purpose: 'purpose 2',
                is_used: true,
                equipment_id: 2,
                room_id: 2,
                hospital_id: 1
            }),
        open_booking
            .create({
                start_date: '2018-08-09 07:42:28',
                end_date: '2018-09-10 07:42:28',
                purpose: 'purpose 2',
                is_used: true,
                equipment_id: 2,
                room_id: 2,
                hospital_id: 1
            }),

        adverse_event_report
            .create({
                report_sn: '1',
                report_desc: 'Desc report ',
                report_details: 'Details report ',
                equipment_id: 1,
                hospital_id: 1,
                user_id: 1
            }),
        adverse_event_report
            .create({
                report_sn: '2',
                report_desc: 'Desc report ',
                report_details: 'Details report ',
                equipment_id: 2,
                hospital_id: 1,
                user_id: 1
            }),
        adverse_event_report
            .create({
                report_sn: '3',
                report_desc: 'Desc report ',
                report_details: 'Details report ',
                equipment_id: 3,
                hospital_id: 1,
                user_id: 1
            }),
        adverse_event_report
            .create({
                report_sn: '4',
                report_desc: 'Desc report ',
                report_details: 'Details report ',
                equipment_id: 4,
                hospital_id: 2,
                user_id: 2
            }),
        adverse_event_report
            .create({
                report_sn: '5',
                report_desc: 'Desc report ',
                report_details: 'Details report ',
                equipment_id: 5,
                hospital_id: 2,
                user_id: 2
            }),
        adverse_event_report
            .create({
                report_sn: '6',
                report_desc: 'Desc report ',
                report_details: 'Details report ',
                equipment_id: 6,
                hospital_id: 2,
                user_id: 2
            }),
        adverse_event_report
            .create({
                report_sn: '7',
                report_desc: 'Desc report ',
                report_details: 'Details report ',
                equipment_id: 7,
                hospital_id: 3,
                user_id: 3
            }),
        adverse_event_report
            .create({
                report_sn: '8',
                report_desc: 'Desc report ',
                report_details: 'Details report ',
                equipment_id: 8,
                hospital_id: 3,
                user_id: 3
            }),
        adverse_event_report
            .create({
                report_sn: '9',
                report_desc: 'Desc report ',
                report_details: 'Details report ',
                equipment_id: 9,
                hospital_id: 3,
                user_id: 3
            });
    }
};