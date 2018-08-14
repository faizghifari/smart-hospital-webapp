module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            fullname: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            username: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            staffId: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                // unique: true,
            },
            role_id: {
                type: Sequelize.INTEGER,
                onDelete: 'SET NULL',
                references: {
                    model: 'roles',
                    key: 'id',
                },
            },
            hospital_id: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                allowNull: false,
                references: {
                    model: 'hospitals',
                    key: 'id',
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
            dep_id: {
                type: Sequelize.INTEGER,
                onDelete: 'SET NULL',
                references: {
                    model: 'departments',
                    key: 'id',
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
            div_id: {
                type: Sequelize.INTEGER,
                onDelete: 'SET NULL',
                references: {
                    model: 'divisions',
                    key: 'id',
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            }
        }),
    down: (queryInterface) => {
        queryInterface.dropTable('users');
    }
};