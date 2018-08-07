module.exports = {
    up: (queryInterface, Sequelize) => 
        queryInterface.createTable('medical_equipments_safeties', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            equipment_id: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                allowNull: false,
                references: {
                    model: 'medical_equipments',
                    key: 'id',
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
            equipments_age: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            last_maintenance_date: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
            },
            standard_maintenance: {
                type: Sequelize.INTEGER
            },
            is_reported: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
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
        queryInterface.dropTable('medical_equipments_safeties');
    }
};