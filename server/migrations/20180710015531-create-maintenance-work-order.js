module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('maintenance_work_orders', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            wo_desc: {
                type: Sequelize.TEXT
            },
            wo_designation: {
                type: Sequelize.TEXT
            },
            wo_req_details: {
                type: Sequelize.TEXT
            },
            ppm_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'maintenance_ppms',
                    key: 'id',
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
            report_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'reports',
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
        return queryInterface.dropTable('maintenance_work_orders');
    }
};