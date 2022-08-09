module.exports = {
    up: async (queryInterface, sequelize) => {
        await queryInterface.sequelize.query("CREATE SEQUENCE sequence_user_id start 101 increment 1",)
        await queryInterface.sequelize.query("CREATE SEQUENCE sequence_art_id start 10000 increment 1",)
        await queryInterface.sequelize.query("CREATE SEQUENCE sequence_comment_id start 10000 increment 1",)
        // await queryInterface.sequelize.query("CREATE SEQUENCE sequence_id",)
        // await queryInterface.sequelize.query("CREATE SEQUENCE sequence_id start 100 increment 2",)
        //
        // await queryInterface.addColumn('Users', 'customSequence', {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     defaultValue: sequelize.Sequelize.literal("nextval('custom_sequence')")
        // })
    },

    down: async (queryInterface, sequelize) => {
        await queryInterface.sequelize.query('DROP SEQUENCE sequence_user_id')
        await queryInterface.sequelize.query('DROP SEQUENCE sequence_art_id')
        await queryInterface.sequelize.query('DROP SEQUENCE sequence_comment_id')
    }
};