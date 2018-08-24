'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('medical_equipments_bookings', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            start_time: {
                type: Sequelize.DATE
            },
            end_time: {
                type: Sequelize.DATE
            },
            purpose: {
                type: Sequelize.TEXT
            },
            is_used: {
                type: Sequelize.BOOLEAN
            },
            user_id: {
                type: Sequelize.INTEGER,
                onDelete: 'SET NULL',
                references: {
                    model: 'users',
                    key: 'id',
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
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
            room_id: {
                type: Sequelize.INTEGER,
                onDelete: 'SET NULL',
                allowNull: false,
                references: {
                    model: 'rooms',
                    key: 'id',
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
            hospital_id: {
                type: Sequelize.INTEGER,
                onDelete: 'SET NULL',
                allowNull: false,
                references: {
                    model: 'hospitals',
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
        });
    },
    down: (queryInterface) => {
        return queryInterface.dropTable('medical_equipments_bookings');
    }
};