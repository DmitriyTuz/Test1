'use strict';

const {Art,User,Comments} = require('../models/index')

// const userM = require('../models-mongo/userM')
// const Baskets = require('../models-mongo/Baskets')

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

module.exports = {
  async up (queryInterface, Sequelize) {

      // let users = await userM.find();
      // let baskets = await Baskets.find();

    // console.log('***user = ', users);
    // console.log('***user = ', users[0].name);
    // console.log('***userLength = ', users.length);

       // for (let i = 0; i <= users.length - 1; i++) {
       //     await userM.deleteOne({name: users[i].name});
       // }
       //
       // for (let i = 0; i <= baskets.length - 1; i++) {
       //     await Baskets.deleteOne({name: baskets[i].name});
       // }

      await Art.create({ title: "Poppies", artist: "Monet", year: 1873 })
      await Art.create({ title: "Woman with the parasol", artist: "Monet", year: 1875})
      await User.create({ name: "Ahren", age: 24, location: "San Francisco"})
      await User.create({ name: "John", age: 28, location: "San Francisco"})
      await User.create({ id: 10000, name: "Allison Johnson", age: 27, location: "San Francisco"})


      // await Comments.create({ content: "", ArtId: 10000, UserId: null })
      await Comments.create({ name: "John", content: "This is rad", artId: 10001})
      await Comments.create({ name: "Allison Johnson", content: "This is super cool", artId: 10001, userId: 10000 })
      await Comments.create({ id: 10002, name: "Allison Johnson", content: "Super !!!", artId: 10001, userId: 10000 })

       // await Comments.create({ content: "", ArtId: 1, UserId: null })

          // let user = await userM.find();
          //
          // console.log('***user = ', user);
          // console.log('***user = ', user[0].name);
          // console.log('***userLength = ', user.length);
          //
          // for ( let i = 0; i <= user.length - 1; i++ ) {
          //   await User.create({ name: user[i].name, email: user[i].email } );
          //
          // }
     },


  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
