module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            username: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            password_hash: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            is_ministry: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            is_admin: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            role_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'roles',
                    key: 'id',
                },
            },
            hospital_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'hospitals',
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