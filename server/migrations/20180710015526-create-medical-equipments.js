module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('medical_equipments', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            equipments_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            equipments_desc: {
                type: Sequelize.STRING
            },
            equipments_sn: {
                type: Sequelize.STRING
            },
            equipments_qrcode: {
                type: Sequelize.STRING
            },
            equipments_status: {
                type: Sequelize.BOOLEAN
            },
            equipments_lifetime: {
                type: Sequelize.INTEGER
            },
            equipments_value: {
                type: Sequelize.INTEGER
            },
            purchase_date: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
            },
            is_active: {
                type: Sequelize.BOOLEAN
            },
            is_on: {
                type: Sequelize.BOOLEAN
            },
            maintenance_options: {
                type: Sequelize.INTEGER
            },
            current_safety: {
                type: Sequelize.INTEGER
            },
            current_security: {
                type: Sequelize.INTEGER
            },
            current_productivity: {
                type: Sequelize.INTEGER
            },
            equipments_type_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'medical_equipments_types',
                    key: 'id',
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
            manufacturers_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'manufacturers',
                    key: 'id',
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
            room_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'rooms',
                    key: 'id',
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
            pic_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'users',
                    key: 'id',
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
            pic_mt_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'users',
                    key: 'id',
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
            pic_usage_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'users',
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
        queryInterface.dropTable('medical_equipments');
    }
};