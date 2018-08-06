module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('spare_parts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            part_name: {
                type: Sequelize.STRING
            },
            part_desc: {
                type: Sequelize.STRING
            },
            part_sn: {
                type: Sequelize.STRING
            },
            part_qrcode: {
                type: Sequelize.STRING
            },
            part_qty: {
                type: Sequelize.INTEGER
            },
            part_type_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'spare_part_types',
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
        return queryInterface.dropTable('spare_parts');
    }
};