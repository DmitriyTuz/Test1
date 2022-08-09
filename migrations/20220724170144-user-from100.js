module.exports = {
    up: async (queryInterface, sequelize) => {
        // await queryInterface.sequelize.query("CREATE SEQUENCE custom_sequence start 1020 increment 20",)

        // await queryInterface.sequelize.query("CREATE SEQUENCE sequence_id start 100 increment 2",)
        //
        // await queryInterface.addColumn('Users', 'customSequence', {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     defaultValue: sequelize.Sequelize.literal("nextval('custom_sequence')")
        // })
    },

    down: async (queryInterface, sequelize) => {
        // await queryInterface.sequelize.query('DROP SEQUENCE custom_sequence')
    }
};