module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('apparatus', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            apparatus_name: {
                type: Sequelize.STRING
            },
            apparatus_desc: {
                type: Sequelize.STRING
            },
            apparatus_sn: {
                type: Sequelize.STRING
            },
            apparatus_qrcode: {
                type: Sequelize.STRING
            },
            apparatus_calibration_due_on: {
                type: Sequelize.DATEONLY
            },
            apparatus_type_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'apparatus_types',
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
        queryInterface.dropTable('apparatus');
    }
};