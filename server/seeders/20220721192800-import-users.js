'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users',[
      {
        id: 1,
        userName: "bullwinkle2112",
        createdAt: new Date(),
        updatedAt:new Date(),
        deletedAt: null
      },
      {
        id: 2,
        userName: "SomeName",
        createdAt: new Date(),
        updatedAt:new Date(),
        deletedAt: null
      },
      {
        id: 3,
        userName: "ThirdName2022",
        createdAt: new Date(),
        updatedAt:new Date(),
        deletedAt: null
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null,{});
  }
};
