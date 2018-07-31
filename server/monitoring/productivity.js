const medical_equipments_model = require('../models').medical_equipments;
const medical_equipments_productivity_model = require('../models').medical_equipments_productivity;

module.exports = {
    start: (io) => {
        const productivity_io = io.of('/equipment/productivity/');

        productivity_io.on('connection', (client) => {
            console.log('Client Connected');

            client.on('disconnect', () => {
                console.log('Client Disconnected');
            });
        });
    },

    send_productivity(equipment_id, productivity_level) {
        productivity_io.emit('productivity/' + equipment_id, productivity_level);
    },

    receive_usage(req,res) {
        medical_equipments_productivity_model
        .findOne({
            where: {
                equipment_id: req.params.equipment_id
            }
        })
        .then(equipment_productivity => {
            let usage = equipment_productivity.count_usage + 1;
            let object = {
                "equipment_id": req.params.equipment_id,
                "count_usage": usage
            }
            let data = JSON.stringify(object);

            this.update(data.equipment_id, data);

            return res.status(200).send(data);
        })
        .catch(error => res.status(400).send(error));
    },

    calculate_productivity(data) {
        let productivity_level = -1;

        if (data.count_usage > data.standard_usage) {
            productivity_level = 3;
        } else
        if (data.count_usage > 0) {
            productivity_level = 2;
        } else {
            productivity_level = 1;
        }

        return productivity_level;
    },

    create(equipment_id, data) {
        medical_equipments_productivity_model
        .create({
            equipment_id: equipment_id,
            count_usage: data.count_usage || 0,
            standard_usage: data.standard_usage
        })
        .catch(error => console.log(error));
    },

    update(equipment_id, data) {
        medical_equipments_productivity_model
        .findOne({
            where: {
                equipment_id: equipment_id
            }
        })
        .then(equipment_productivity => {
            equipment_productivity
            .update({
                count_usage: data.count_usage,
                standard_usage: data.standard_usage
            })
            .then(equipment_productivity_new => {
                let productivity_level = this.calculate_productivity(equipment_productivity_new);

                if (productivity_level != -1) {
                    this.update_productivity(equipment_id, productivity_level);
                    this.send_productivity(equipment_id, productivity_level);
                }
            })
            .catch((error) => console.log(error));
        })
        .catch(error => console.log(error));
    },

    update_productivity(equipment_id, productivity_level) {
        medical_equipments_model
        .findById(equipment_id)
        .then(medical_equipment => {
            if (!medical_equipment) {
                console.log("Medical Equipment Not Found");
            }
            medical_equipment
            .update({
                current_productivity: productivity_level
            })
            .catch((error) => console.log(error));
        })
        .catch(error => console.log(error));
    }
};