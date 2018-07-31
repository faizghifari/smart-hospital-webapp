module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('maintenance_cms', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            apparatus_id: {
                type: Sequelize.ARRAY(Sequelize.INTEGER)
            },
            spare_part_id: {
                type: Sequelize.ARRAY(Sequelize.INTEGER)
            },
            qualitative_tasks: {
                type: Sequelize.ARRAY(Sequelize.JSON)
            },
            quantitative_tasks: {
                type: Sequelize.ARRAY(Sequelize.JSON)
            },
            preventive_tasks: {
                type: Sequelize.ARRAY(Sequelize.JSON)
            },
            est_tasks: {
                type: Sequelize.ARRAY(Sequelize.JSON)
            },
            notes: {
                type: Sequelize.TEXT
            },
            cm_status: {
                type: Sequelize.BOOLEAN
            },
            cm_result: {
                type: Sequelize.BOOLEAN
            },
            cm_next_date: {
                type: Sequelize.DATEONLY
            },
            user_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'users',
                    key: 'id',
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
            equipment_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'medical_equipments',
                    key: 'id',
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
            work_order_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'maintenance_work_orders',
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
        return queryInterface.dropTable('maintenance_cms');
    }
};