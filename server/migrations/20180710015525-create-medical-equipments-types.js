module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('medical_equipments_types', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            type_name: {
                type: Sequelize.STRING
            },
            type_desc: {
                type: Sequelize.STRING
            },
            type_hr_req: {
                type: Sequelize.STRING
            },
            type_time_params: {
                type: Sequelize.INTEGER
            },
            type_level: {
                type: Sequelize.INTEGER
            },
            apparatus_type_id: {
                type: Sequelize.ARRAY(Sequelize.INTEGER)
            },
            spare_part_type_id: {
                type: Sequelize.ARRAY(Sequelize.INTEGER)
            },
            qualitative_tasks: {
                type: Sequelize.ARRAY(Sequelize.JSON)
            },
            preventive_tasks: {
                type: Sequelize.ARRAY(Sequelize.JSON)
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        }),
    down: (queryInterface) => {
        queryInterface.dropTable('medical_equipments_types');
    }
};