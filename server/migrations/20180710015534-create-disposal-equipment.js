module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('disposal_equipments', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            equipment_name: {
                type: Sequelize.STRING
            },
            equipment_desc: {
                type: Sequelize.STRING
            },
            equipment_sn: {
                type: Sequelize.STRING
            },
            equipment_details: {
                type: Sequelize.ARRAY(Sequelize.JSON)
            },
            dispose_reason: {
                type: Sequelize.STRING
            },
            hospital_id:{
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                allowNull: false,
                references: {
                    model: 'hospitals',
                    key: 'id',
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
            report_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'disposal_reports',
                    key: 'id',
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
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
        return queryInterface.dropTable('disposal_equipments');
    }
};